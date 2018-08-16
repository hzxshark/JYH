module.exports = {
    entry:{
        "index" : __dirname + "/src/js/index.js",
        "list" : __dirname + "/src/js/list.js",
       "details" : __dirname + "/src/js/details.js",      
        "shopchart" : __dirname + "/src/js/shopchart.js",
        "register" : __dirname + "/src/js/register.js",
        "login" : __dirname + "/src/js/login.js"           
    },
   output: {   		
        path: __dirname + "/dist",           //打包后的文件存放的地方
        filename: "[name].js"               //打包后输出文件的文件名
    }, 
    module: {
        rules: [{
            test: /\.js/,
            use: {
                loader: "babel-loader",
                options: {presets: ["env"]}
            },
            exclude: /node_modules/			
        }]
    } 
}