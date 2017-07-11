module.exports = {
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: "./app/temp/scripts",
        filename: "[name].js"
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