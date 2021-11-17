---
sidebar_position: 3
---

# Scripts

在新创建的项目中，你可以运行一些内置命令：

## 常用命令

### `npm start`

在开发模式下运行应用程序。 打开 [http://localhost:32324](http://localhost:32324) 在浏览器中查看它。

如果你更改代码，页面将自动重新加载。 你将在控制台中看到构建错误和 lint 警告。

### `npm run lint`

执行项目内 lint 检查与格式校验，包含所有的js和css文件

### `npm run build`

将生产环境的应用程序构建到 dist 目录。 它能将 React 正确地打包为生产模式中并优化构建以获得最佳性能。

构建将被压缩，文件名中将包含哈希。

这样你的应用已准备好部署了。

## Feature

- 支持部署
- 支持上传静态资源至 CDN
