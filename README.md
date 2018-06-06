# Bee Cli - wepy小程序组件化解决方案

Bee Cli是[min-cli](https://github.com/meili/min-cli)在[wepy](https://github.com/Tencent/wepy)上的实现。

### ○ 安装

``` bash
$ npm install -g @b1/bee-cli
```

### ○ wepy小程序框架框架模板
``` bash
bee-cli init # 选择新建小程序
```

### ○ wepy小程序Ui组件库模板
``` bash
bee-cli init # 选择新建组件库
```

### ○ 在Ui组件库中开发组件

- **新建组件**

``` bash
$ bee-cli new *name
```

1. 该命令会在src/packages生成组件的npm库，同时生成指定模板的样例页面
2. 修改组件首页中的config.js
3. 组件开发时，注意在app.wpy中加入相应的页面

- **开发实时编译**

``` bash
$ wepy dev
```

- **发布组件**

``` bash
$ bee-cli publish
```

1. 如果检测不到你的组件更新，使用git add 把新组件加入到索引中
2. 设置你npm publish 环境 https://blog.csdn.net/Thenightelfsnow/article/details/78573179
3. 该命令会给项目打上tag并提交，同时会publish你的组件到npm.org

### ○ 组件使用安装

- **安装组件**

``` bash
$ npm install @b1/bee-code-input -S
```

### ○ 使用组件

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
### ○ 开源协议

基于 [MIT](http://opensource.org/licenses/MIT) License，请自由的享受、参与开源。
