## 在 vscode 安装 vim（插件） 导致无法输入和编辑文本

### 问题

其实并不是文件不可以修改，只是 VSCode 编辑采取了类似于 Vim 编辑器的模式

### 解决办法

1. 删除 vim（插件）
2. 在英文输入法模式下键入 i(insert)才可以进行修改，修改完成后键入 Command+S(MacOS)或 Control+S(Windows)是没有办法保存的，需要键入 esc，再键入:wq+enter 才可以保存。
