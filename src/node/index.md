## nvm配置
```js
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
```

## .npmrc
yarn也会读取.npmrc,只配这一个就行
```js
registry=https://registry.npmmirror.com
```
 
## 全局npm配置
```js
// 一次性配置，所有通过npm安装的均使用新的淘宝镜像
npm config set registry https://registry.npmmirror.com/
 
// 验证
npm config get registry
```