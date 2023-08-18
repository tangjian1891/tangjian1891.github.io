---
aside: "left"
footer: false
---
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


## 项目工程化
1. 需要利用得是git得hook钩子，所以项目必须初始化了git仓库。
> 前往.git/hooks/可以看到。常见得就有pre-commit,commit-msg,post-commit等等

2. 接下来在.git所在得目录，创建对应得hook脚本，手动创建方式，查看官网，这里使用一个工具, [husky](https://typicode.github.io/husky/getting-started.html#manual) 。
> 记得在package.json中配置scripts.prepare=husky install ,这是npm自带得生命周期钩子,安装依赖时，初始化了一下husky这个工具。

3. 利用husky创建git hook
```shell
npx husky add ./husky/pre-commit "npm run test"
```
这样你做git commit提交时，会自动触发./husky/pre-commit这个shell文件脚本，文件脚本中执行了npm run test 执行，这样在git commit时，就相当于自动执行 npm run test 脚本

4. 我们得目标，希望每次提交时，手动执行一下eslint 和prettier格式化最好




## prettier
1. 格式化代码工具。 可以使用editors编辑。vscode中得prettier。
2. 可以使用cli[prettier . --write](https://prettier.io/docs/en/cli)
3. 查询逻辑，从vscode用户配置，到.prettierrc配置。
4. Prose Wrap 仅适用于 markdown   https://github.com/prettier/prettier/issues/15225

