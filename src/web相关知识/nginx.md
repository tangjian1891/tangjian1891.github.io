
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

## nginx安装-linux

采用官网手动下载tar.gz包方式,安装解压方式如下。放入/opt/nginx下。

```js
//解压源码包。解压出来的有src目录，所以是源码包，没有sbin目录，没有nginx可执行文件
cd /opt/nginx
tar -xzf nginx-1.22.0.tar.gz

//准备编译nginx ，安装所需环境
# yum remove gcc -y   如果报gcc不存在，那么可以先卸载一下，再装
yum install gcc -y
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel
//新建一个源码编译后的nginx目录。  
cd /opt/nginx/nginx  //新建此目录

//进入源码目录,添加编译后目录前缀。 
cd /opt/nginx/nginx-1.22.0
./configure --prefix=/opt/nginx/nginx
make
make install


//编译成功后，
cd /opt/nginx/nginx/sbin
./nginx       //启动
```

## nginx.conf配置

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

## nginx.conf实际配置

```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   html;
        index  index.html index.htm;
        try_files $uri $uri/ /jas-security-dir/index.html;
    }
    
    location = /jas-security-dir/ {
      root html;
      index  index.html;
    } 

    location ~* /jas-security-dir/.*\.(html|htm|gif||jpe|jpg|jpeg|bmp|png|ico|txt|js|svg|css|ttf|woff|woff2|raq|json)$ {
            root  html;
    }

    location /jas-security/ {
      proxy_pass http://192.168.124.30:32428;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

## location路径匹配规则

|参数|解释|
|---|---|
|空|从头匹配URI，优先级最低|
|=|URI需要与pathname完全一致,优先级最高|
|^~|从头匹配URI，匹配后生效，优先级高于正则。相当于提高空参数的优先级|
|~|后面跟正则，区分大小写，一般用来开发一些图片，css，js等资源|
|~*| 后面跟正在，不区分大小写|

## 常见问题

location URI结尾带不带 /

1. location 中的规则字符有没有  / 都不影响。就是说/user/和/user 一样,但是建议location中结尾都加上/,防止被命中同样前缀URI。
2. 浏览器的访问URI结构如果是<https://www.baidu.com>无pathname路径形式，结尾有没有/都不会造成重定型。因为浏览器发起时，回默认加上/,所以实际发出的请求为<https://www.baidu.com/>,可浏览器查看。
3. 浏览器的访问URI接口如果是<https://www.baidu.com/foo/qwer>含有pathname路径形式，那么没有/代表访问的是foo目录下的qwer文件,没找到qwer文件，就会触发重定向/foo/qwer/,去qwer 目录访问。

## 技巧
一个工程项目，部署时不一定会部署在域名的根路径上。部署在子路径上，带publicPath。 访问根路径，直接跳转定位。

```js
# 也可以时后端重定型请求路径,注意必须是= 完全匹配
location = / {  
 return http://49.234.13.241/jas-security-dir/;
}
```

spa单页项目，使用history刷新404。

```js
# 这里不推荐在/下面使用try_files，还是要在项目的子路径匹配上使用try_files
location ^~  /jas-security-dir/ {
  root   html;
  index  index.html index.htm;
  try_files $uri $uri/ /jas-security-dir/index.html;
}
```

静态资源

```js
#二选一，路径放行 ，后缀匹配放行
location ^~ /static/ {
    root /webroot/static/;
}
location ~* \.(gif|jpg|jpeg|png|css|js|ico)$ {
    root /webroot/res/;
}
```
