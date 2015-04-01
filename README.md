# butterflyjs

这是一个为 butterfly.js 添砖加瓦的项目，用 bower 管理包依赖、用 gulp 构建前端自动化工作流。修改项目目录，使目录更加科学。

### 使用指南

请确保 gulp, npm, bower 已经安装完成。

1. git clone 到本地
2. npm install
3. bower install  ***** 到这里，项目的基本构建已经完成。
4. gulp           ***** 可以开始编写项目，项目目录在 /bulid

### 说明

目前只配置了 butterfly.js 必须的依赖包，如：underscore.js, backbone.js, zepto.js(这里用 zepto.js 代替 jquery), require.js, require-text.js。

gulp.js 的 task 只配置了：自动监测 js 文件，有改动则执行 jshint。jshint，使一个 js 代码检查工具，代码有语法错误则在命令行报出。

### Todo

1. 用于构建项目的基础 css 还没有添加，这里可以能要根据项目需要添加：ratchet, bootstrap 或者 normalize.css。
2. 诸如 iscroll.js, fastclick 的基础库也没有进行添加，这个需要根据项目需求。
3. 只移植了 butterfly.js 的 view, stackview 模块，诸如：notification.js 等工具类，打算重新进行编写。( modal 类)
4. gulp 任务，未来应该会增加 browserSync 的支持和更高级 e2e, 单元模块测试，增加生产任务，将 js, css, image 进行自动生产压缩(由于 butterfly.js 运用了 require.js 这里是难点，待解决)。 
5. 未来会考虑使用 sass 来更加科学地构建项目 css (更好维护)，mustache 作为 html 模版(实在受够了 underscore 的模版了，个人感觉十分难阅读，而且勾起了我 asp 的不愉快回忆，可选项：jade，但是 jade 需要 node 来编译，可能要在 gulp 添加自动化任务)。
6. 最遥遥无期的一点：重构 butterfly.js 框架。