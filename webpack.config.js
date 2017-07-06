module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        path: "./app/temp/scripts",
        filename: "App.js",
    },
    
    module:{
        loadres: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                //apply babel plugin to just javascript
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
 };