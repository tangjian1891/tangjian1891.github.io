vscode

## 彻底删除
1. C:\Users\tangjian_home_pc\.vscode        配置
2. C:\Users\tangjian_home_pc\AppData\Roaming\Code       插件

 > 如果你想将cloud sync 存储配置删除, [如何删除云上配置](https://code.visualstudio.com/docs/editor/settings-sync#_how-do-i-delete-my-data)

 ## 安装插件
 1. open in browser   对于.html文件打开页面
 2. Live Server         针对当前工作区/文件，启动一个server服务
 3. One Dark Pro        
 4. vscode-icons
 5. Vue Language Features (Volar)      本身包含.vue文件高亮，对ts支持,即可关闭内置的typescript，采用takeover模式。[功能有哪些](https://github.com/vuejs/language-tools/discussions/53)
 6. TypeScript Vue Plugin (Volar)      此插件得作用在于激活.ts文件中对于.vue得相关支持，包括rename，import提示,路径检测.vue
 7. Code Runner     代码运行
 8. Code Spell Checker      命名检查
 9. GitLens — Git supercharged      vscode内置git只能做提交，拉取等操作。而聚焦到每一行blame，change，graph图，需要使用这个插件。
 10. Prettier - Code formatter      编辑格式化，建议直接写入到prettier文件中，注意覆盖volar得默认格式化。
 

 ## 配置补充
 1. "editor.linkedEditing": true        此配置可以一定程度替换 Auto Rename Tag 插件，缺点是标签全部删除后无法同步再次输入同步。但是可以使用F2重构也行，稍微麻烦点。另外：Volar也需要开启此配置。

 

 ## 项目配置
 1. 