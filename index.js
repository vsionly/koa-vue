const path = require("path") // 引入path模块
const {green, autoC} = require("color7log")

// 引入koa
const koa = require('koa');
const app = new koa();

// 引入参数解析模块
const parser = require('koa-bodyparser');
app.use(parser());

// 处理vue-router使用history模式返回index.html
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
app.use(historyApiFallback({ whiteList: ['/api'] }));

// 将webpack打包好的项目目录作为Koa静态文件服务的目录
const static = require('koa-static');
app.use(static(path.resolve(__dirname, './dist')));

const router = require('./server/router') // 引入router模块
app.use(router.routes());
autoC(1, 2, 3, 4, 5, 6, 7, 8, 9)
// 监听端口
let port = 3000;
app.listen(port, function(){
    green('启动成功, 端口：' + port);
}); // #54bbfe
