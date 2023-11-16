# vscode相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. vscode改成eclipse快捷键习惯
### 1.1. windows
1. 管理 -> 键盘快捷方式（左下角） -> 打开键盘快捷方式JSON（右上角）
  ```json
  [
      { "key": "alt+/",  "command": "editor.action.triggerSuggest","when": "editorTextFocus" },
      { "key": "ctrl+alt+down","command": "editor.action.copyLinesDownAction", "when": "editorTextFocus" },
      { "key": "ctrl+alt+up", "command": "editor.action.copyLinesUpAction", "when": "editorTextFocus" },
      { "key": "ctrl+shift+c","command": "editor.action.commentLine","when": "editorTextFocus" },
      { "key": "ctrl+d","command": "editor.action.deleteLines","when": "editorTextFocus" },
      { "key": "ctrl+k","command": "editor.action.addSelectionToNextFindMatch","when": "editorFocus"},
      { "key": "ctrl+shift+f","command": "editor.action.format","when": "editorTextFocus"},
      { "key": "ctrl+shift+x","command": "editor.action.transformToUppercase","when": "editorTextFocus"},
      { "key": "ctrl+shift+y","command": "editor.action.transformToLowercase","when": "editorTextFocus"},
      { "key": "ctrl+shift+alt+x","command": "workbench.view.extensions" },
      { "key": "ctrl+shift+alt+y","command": "workbench.debug.action.toggleRepl"},
  ]
  ```

### 1.2. macOS
- 在mac下大部分只要把alt替换成cmd就可以了
  ```json
  // 将键绑定放在此文件中以覆盖默认值
  [
      { "key": "ctrl+/",  "command": "editor.action.triggerSuggest","when": "editorTextFocus" },
      { "key": "ctrl+cmd+down","command": "editor.action.copyLinesDownAction", "when": "editorTextFocus" },
      { "key": "ctrl+cmd+up", "command": "editor.action.copyLinesUpAction", "when": "editorTextFocus" },
      { "key": "ctrl+shift+c","command": "editor.action.commentLine","when": "editorTextFocus" },
      { "key": "cmd+d","command": "editor.action.deleteLines","when": "editorTextFocus" },
      { "key": "ctrl+k","command": "editor.action.addSelectionToNextFindMatch","when": "editorFocus"},
      { "key": "ctrl+shift+f","command": "editor.action.format","when": "editorTextFocus"},
      { "key": "ctrl+shift+x","command": "editor.action.transformToUppercase","when": "editorTextFocus"},
      { "key": "ctrl+shift+y","command": "editor.action.transformToLowercase","when": "editorTextFocus"},
      { "key": "ctrl+shift+cmd+x","command": "workbench.view.extensions" },
      { "key": "ctrl+shift+cmd+y","command": "workbench.debug.action.toggleRepl"},
  ]
  ```
  
## 2. 在vscode中编辑小程序
1. 首先在小程序开发工具中把项目搭建好
2. 接着在vscode中打开建好的小程序项目，这个时候小程序项目目录下面会生成几个文件夹
3. 然后进行小程序的插件安装，先搜索安装vscode weapp api，这是小程序的语法结构api
4. 接着安装vscode wxml这个插件，主要是针对wxml文件的
5. 接着继续搜索安装vscode-wechat这个插件
6. 然后安装一下Easy WXLESS，是针对wxss文件的
7. 安装好插件以后，我们直接在vscode里面编辑小程序项目，保存即可同步到小程序开发工具中
8. 最后小编要说的是利用vscode开发小程序只是起到了编辑的效果，真正的调试等还需要在小程序开发工具中进行

## 3. vscode中安装插件
- `使用alt(cmd) + shift + p`打开控制台

## 4. vscode中小技巧
- mac跳转到某行
  - `cmd + p`

## 5. vetur忽略绝对路径报错
- 设置，在setting.js里面编辑
```json
"vetur.grammar.customBlocks": {
  "docs": "md",
  "i18n": "json"
},
"vetur.ignoreProjectWarning": true,
"vetur.validation.template": false,
"vetur.experimental.templateInterpolationService": false,
"vetur.validation.style": false,
"vetur.validation.script": false
```

## 6. vscode终端不为下拉框
- 设置里面搜索terminal.integrated.tabs.enabled，改成false即可

## 7. 常用插件推荐
- Remote - Containers => 链接远程服务器
- bookmarks => 在代码上打标记，读源码时使用最佳
  - 可以鼠标右键，选择书签，点击打开书签开关
  - 也可以使用键盘快捷键ctrl + alt + k
  - 也可以自定义设置 ctrl + alt + a
- Project Manager => 把经常打开的项目做一下保存
  - 比如保存一个vue3的源码