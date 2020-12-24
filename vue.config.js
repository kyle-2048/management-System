module.exports= {
    // baseUrl:'/',
    devServer:{
        proxy:{
            '/api':{
                target:'https://market.douban.com',
                changeOrigin: true
            }
        },
    }
}

