# <%= proName %>
<% if (description) { %>
> <%= description %>
<% } %>

### ◆ 几个约定：
- 代码风格规范请使用 [JavaScript Standard Style](https://github.com/feross/standard)
- Less mixins请使用 [lesshat](https://github.com/madebysource/lesshat#size)
- 命名规范使用驼峰命名方式，且命名尽量能够顾名思义，如：变量名`userInfo`，方法名`getUserInfo`，类名、组件名`User`
- 在less中直接使用px，编辑后自动转为rpx

### ◆ 安装

1. Clone <%= proName %> 仓库到本地；
2. 安装依赖 `$ npm install`;
3. 在 <%= proName %> 根目录下执行 `$ npm run dev`，生成 dist/ 目录；
4. 微信开发者工具 —— 新建一个小程序，目录指向生成的 dist/；

### ◆ 全局inject

- $link: 注册为wepy.page的页面跳转方式
```javascript
  this.$link('/page/home/index')
```

- $back: 返回上一页，非跳转
```javascript
  this.$back()
```

- $toast：吐司提示
```javascript
  this.$toast('吐司提示')
```

- $loading：正在加载提示
```javascript
  this.$loading() // 显示
  this.$loading(false) //隐藏
```

- $modal: 模态框
```javascript
  await this.$modal('确定？', '子标题', true)
```

- $db: 同步方式获取以及设置localstorage
```javascript
  this.$db.get('name')
  this.$db.set('name', '子标题')
```

- $d/$debug: debug消息
```javascript
  this.$d('消息')
  this.$debug('消息')
```

### ◆ Api相关

- 在`config/index.js`中定义是否需要全局mock数据(isMock), 也可以在特定的请求中覆盖, 生产环境自动覆盖。
  isMock决定是否使用mock数据，当`isMock=true`时根据`src/mock/mockConfig.js`的设置获取mock数据，当`isMock=false`时会发送网络请求，并且在请求中删除`isMock`参数。
```javascript
let requestData = {
  isMock: false,
  mobile: '110'
}
await this.POST('/login', requestData)
```

- 不明确定义`usertoken`,请求中会默认带上localstorage中的`usertoken`,一般不需要自带`usertoken`
```javascript
let requestData = {
  usertoken: this.$parent.globalData.token
  mobile: '110'
}
await this.POST('/login', requestData)
```

- 请求url以http或才https开头，不会拼接`domain`, mockConfig中定义key时使用全url
```javascript
await this.POST('/login', requestData) //url为 domain + /login
await this.POST('http://www.baidu.com/login', requestData) //url为 http://www.baidu.com/login
```

- 参数 `showToast`
默认为`false`时, 调用`wepy.showNavigationBarLoading()`, 为`true`时, 调用`wepy.showLoading()`

### ◆ 踩坑:

- 使用wepy-cli 生成项目，运行后报: `Error: module "npm/lodash/_nodeUtil.js" is not defined`

解决方法：
> `npm i util --no-save && wepy build --no-cache`

> https://github.com/Tencent/wepy/issues/1294 不保存依赖,安装util,同时 不使用缓存构建

- 微信开发者工具打开dist运行时报TypeError: Cannot read property 'Promise' of undefined

解决方法：
> 微信开发者工具-->项目-->关闭ES6转ES5。重要：漏掉此项会运行报错。
微信开发者工具-->项目-->关闭上传代码时样式自动补全 重要：某些情况下漏掉此项会也会运行报错。
微信开发者工具-->项目-->关闭代码压缩上传 重要：开启后，会导致真机`computed`, `props.sync` 等等属性失效。（参考[开发者工具编译报错](https://github.com/Tencent/wepy/issues/273)）

### ◆ 相关文档：
- [小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/)
- [wepy文档](https://tencent.github.io/wepy/)

### ◆ 开源协议

基于 [MIT](http://opensource.org/licenses/MIT) License，请自由的享受、参与开源。

### ◆ Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
