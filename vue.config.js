module.exports = {
    // webpack-dev-server 相关配置
    devServer: {
        open: true,                                 //配置自动启动浏览器
        host: 'localhost',
        port: 8080,                                 // 端口号
        https: false,
        hotOnly: false,                             // https:{type:Boolean}
        proxy: {
            // 配置跨域
            '/posts': {
                target: 'http://jsonplaceholder.typicode.com',   // target表示代理的服务器url
                changeOrigin:true,                  //改变源
                ws:true,                            //是否代理websockets
                pathRewrite: {     // pathRewrite表示路径重写，key表示一个正则，value表示别名
                    '^/posts': '/posts'   // 即用 '/posts'表示'http://jsonplaceholder.typicode.com/posts'
                }
            }
        },                                           // 配置跨域处理,只有一个代理
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {}
};