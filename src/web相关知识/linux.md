## 解压文件

-x 提取/解压 extract
-z 解压.gz .gzip
-v 显示细节。没啥用，不用拼
-f 最后一个名字，接file名 一定要

```shell
*.tar.gz 和 *.tgz使用tar -xzf <file>
*.tar  使用 tar -xvf <file>    //万能解压
```

## 环境变量

正常来说，像node，如果要使用可执行脚本，需要到指定目录，很不方便，所以需要让计算机在任何目录都能识别我们得脚本。
将可执行脚本得所在目录配置到全局PATH中，这样在任何地址执行都可以。
实际到处得PATH就是一个字符串，用:分割
例如:PATH=/opt/nginx/bin:/opt/nginx/git/bin
这样就可以使用nginx 和 git了,如果有更多得就继续拼接
实际环境变量，需要配置到/etc/profile文件中。

```js
export PATH=$PATH:/opt/nginx/bin
export PATH=$PATH:/opt/git/bin
```

**写法上，$PATH代表引用了已有得完整PATH，然后不断使用:/...拼接即可，最后实际上只导出了一个完整得，拼接好得所有目录得PATH变量字符串**  

**出现得问题**
/usr/libexec/grepconf.sh: line 5: grep: command not found

刷一下，然后再更新配置

```js
export PATH=$PATH:/usr/bin:/usr/sbin:/bin:/sbin
source /etc/profile
```


## 查找目录

find 范围 -name 文件夹名 -d

```js
find / -name vue3 -d   从/根目录下，查看vue3得目录名称
```

## 软件加压编译安装

```JS
# cd到源码目录，执行解压后得前缀目录
./configure --prefix=/opt/nginx/nginx
make 
make install
```
