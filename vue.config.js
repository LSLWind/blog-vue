const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    // 部署应用包时的基本 URL
    publicPath: '/',
    //代理api设置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '127.0.0.1', //ip地址
        port: 3001, //vue项目端口
        https: false, //false关闭https，true为开启
        proxy: {
            '/api': {  //代理别名，将 /api 替换成 http://localhost:8000/
                target: 'http://localhost:8000/',   //代理目标值
                changeOrigin: true, //同源策略cors
                secure: false,//是否https接口
                // pathRewrite: {  //替换路径中的/api
                //     '^/api': ''
                // }
                // /*pathRequiresRewrite: {
                //   '^/api': ''
                // }*/
            }
        }
    },
    transpileDependencies: true

})

