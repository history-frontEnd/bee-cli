# Bee Cli - wepy小程序组件化解决方案

Bee Cli是[min-cli](https://github.com/meili/min-cli)在[wepy](https://github.com/Tencent/wepy)上的实现。

### ◆ 安装

``` bash
$ npm install -g @b1/bee-cli
```

### ◆ wepy小程序框架模板 [BeeWepy](https://github.com/biosan-frontEnd/BeeWepy)
``` bash
bee init # 选择新建小程序
# example
#? 请设置项目目录 ~/test
#? 请选择项目类型 新建小程序
#? 是否继续高级设置 Yes
#? 请设置项目标题 Test
#? 请设置小程序AppId touristappid
#? 请设置项目描述 Test-小程序
#? 是否使用全局变量 Yes
#? 请设置GIT仓库地址 git://example.git
#? 请设置Author ex
```
- 微信开发者工具 —— 目录指向生成的 dist/, 运行报错:
1. 微信开发者工具-->项目-->关闭ES6转ES5。
2. 微信开发者工具-->项目-->关闭上传代码时样式自动补全。
3. 微信开发者工具-->项目-->关闭代码压缩上传

### ◆ wepy小程序Ui组件库模板 [BeeUi](https://github.com/biosan-frontEnd/BeeUi)
``` bash
bee init # 选择新建组件库
# example
#? 请设置项目目录 ~/test
#? 请选择项目类型 新建组件库
#? 是否继续高级设置 Yes
#? 请设置项目标题 Test
#? 请设置小程序AppId touristappid
#? 请设置项目描述 Test-组件库
#? 请设置组件名前缀 test
#? 是否使用全局变量 Yes
#? 请设置NPM模块的scope名称 @b1
#? 请设置GIT仓库地址 github://example.git
#? 请设置Author ex
```
- 微信开发者工具 —— 目录指向生成的 dist/, 运行报错:
1. 微信开发者工具-->项目-->关闭ES6转ES5。
2. 微信开发者工具-->项目-->关闭上传代码时样式自动补全。
3. 微信开发者工具-->项目-->关闭代码压缩上传

### ◆ 在Ui组件库中开发组件

- **新建组件**

``` bash
$ bee new *name
#? 请选择新建类型 新建组件
#? 请设置新组件的英文名称 test-xx
#? 请设置新组件的中文标题 xx
```
1. 该命令会在src/packages生成组件的npm库，同时生成指定模板的样例页面
2. 修改组件首页中的config.js
3. 组件开发时，注意在app.wpy中加入相应的页面

- **开发实时编译**

``` bash
$ npm run dev
```

- **发布组件**

``` bash
$ bee publish

# example
#$ bee publish
#? 请选择发布方式 发布项目里的每个组件
#info Checking for updated packages...
#info Comparing with @b1/bee-code-input@1.0.4.
#info Checking for prereleased packages...
#? Select a new version for @b1/bee-code-input (currently 1.0.4) (Use arrow keys)
#❯ Patch (1.0.5)
#  Minor (1.1.0)
#  Major (2.0.0)
#  Prepatch (1.0.5-0)
#  Preminor (1.1.0-0)
#  Premajor (2.0.0-0)
#  Prerelease
#  Custom
```
1. 把该组件库commit到一个远程仓库中。
2. 如果检测不到你的组件更新，使用git add 把新组件加入到索引中
3. 设置你npm publish 环境 https://blog.csdn.net/Thenightelfsnow/article/details/78573179
4. 该命令会给项目打上tag并提交，同时会publish你的组件到npm.org

### ◆ 组件使用安装

- **安装组件**

``` bash
$ npm install @b1/bee-code-input -S
```

### ◆ 使用组件

``` javascript
import wepy from 'wepy'
import BeeCodeInput from '@b1/bee-code-input'
export default class Index extends wepy.component {
  components = {
    BeeCodeInput
  }
  data = {}
  methods = {}
}
```

### ◆ 相关资源：
- [小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)
- [wepy](https://tencent.github.io/wepy/)
- [min-cli](https://github.com/meili/min-cli)
- [minui](https://github.com/meili/minui)

### ◆ 开源协议

基于 [MIT](http://opensource.org/licenses/MIT) License，请自由的享受、参与开源。

### ◆ Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
