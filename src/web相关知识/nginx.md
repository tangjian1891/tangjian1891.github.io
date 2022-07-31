wefwf

## 功能介绍

1. 正向代理：对客户端负责，隐藏客户端行踪。
2. 反向代理：对服务端负责，隐藏服务端行踪。
3. 负载均衡：
    1. 基于DNS，不同地址，公用一个域名，通过DNS解析，动态选择某一个地址。
    2. 基于反向代理的负载均衡。自动分发到内部服务器。
4. 动态分离： 资源的区分:是否被服务端业务逻辑处理过。例如jsp，ajax请求接口数据（跨域问题，做nginx代理），这些都是动态资源。  一般来说是html,css,js这种为静态资源，直接放行（所有用户访问结果相同），无需业务处理，减少服务器压力。

## 指令:windows

1. 启动  start nginx  或者执行nginx.exe,不推荐，会导致cmd窗口一直处于执行中状态，不能进行其他命令操作。
2. 停止  
    1. ngninx -s stop 停止，不会保存相关
    2. nginx -s quit  有序停止，保存相关信息（推荐）
3. 重新启动 nginx -s reload 主要用于加载更改后的nginx.conf配置文件
4. 查看版本 nginx -v

## nginx.conf配置文件解析

```js
...              #全局块
events {         #events块
   ...
}
http      #http块   http服务器，可以有多个server，配置代理，缓存，日志
{
    ...   #http全局块 配置编码，开启gzip等等
    server        #server块 配置一个虚拟主机服务的相关参数，一个http下可以有多个server
    { 
        ...       #server全局块 
        location [PATTERN]   #location块  配置请求的路由，以及各种页面的处理情况
        {
            ...
          root 目录   # 最终访问的地址是自定义配置时，非常重要 目录/[PATTERN],也就是root+访问path
          index index.html index.htm  #如果发现路径是目录，那么优先寻找目录下的哪个文件
          proxy_pass http://127.0.0.1:4000/;   # 代理到这个下面，原域名后目录的所有，全部向此之后拼接
        }
        location [PATTERN] 
        {
            ...
        }
    }
    server
    {
      ...
    }
    ...     #http全局块
}
```

## location匹配规则
共有四种方式：
```js
location [ = | ^~ | ~ | ~* ] url {

}
```
1. = : 精确匹配，用于【不含正则表达式】的url钱，要求字符串与url【严格匹配】，完全相等时，才能命中。（非常严格） **如果完全匹配的是目录，则结尾需要/。**
2. ^~ : 以某个常规字符串开头。好理解，因为有^。 感觉就跟正则一样
3. ~ :  跟随正则，【区分】大小写。 可以用来判断 静态资源， ~ \.(git|jpg|png|js|css)$ 
4. ~* : 跟随正则，【不区分】大小写。
5. 没有规则:  那么就是匹配url任意部分就行。
**如果url包含正则表达式，则需要 ~ 作为开头表示。nginx具有优先顺序，一旦匹配立马推出，不会再向下匹配**
**匹配命中后，寻找规则，root+真实的path，root+真实的path，root+真实的path**
 
## 常见处理问题:
1. nginx反向代理为什么能ajax接口跨域问题?   
答：首先你得了解跨域，静态资源与服务端不同源得情况下，如果ajax接口直接访问后端服务器地址，除非后端开了cors，否则就会跨域。 所以ajax接口请求时，都是访问当前静态资源所在得地址。   

例如:当前得页面在http://www.baidu.com:8081/static/index.html上，
发出一个ajax请求，理论上地址必须是**http://www.baidu.com:8081**/api/...同源才可以，这样浏览器才不会拦截响应。但是很明显我们得接口地址是部署在另外一台服务器http://www.api.com/api上得。如果是nginx，那就让nginx拦截http://www.baidu.com:8081/api/,然后转发到http://www.api.com/api,拿到响应再返给ajax请求，相当于隐藏了最终得服务器地址，所以是反向代理。


2. location URI结尾带不带 /
答： 根据约定，URL的/表示目录，没有/表示文件。 浏览器上访问时，如果没有/，那就固定寻找文件，没有文件就当目录访问里面文件，默认是index.html

3. 403 forbidden
答： 出现的一种情况是，lcoation 使用 = 匹配目录时，结尾没有跟随/

4. [history刷新404](https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子)
```js
location / {
  try_files $uri $uri/ /index.html; #history,是找不到的，那么就尝试再次找到index.html即可。如果是部署在目录之下，则/目录/.../index.html
}
```

5. 关于history模式，需要使用try_files重新定向,可以直接写到静态资源里面
```js
    location    /gis {
      root   pages;
      index  index.html;
      try_files $uri $uri/ /gis/index.html;
  }
```

6. 根路径如果定位到目录上,与第5点不冲突
```js
  location = / {
      return http://127.0.0.1/gis;
  }
```
