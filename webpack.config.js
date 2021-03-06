const path = require('path'),
      webpack = require('webpack'),
      CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./public/javascripts/react/App.js"],
    output: {
        path: path.resolve(__dirname, "./public/build"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["env", 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?postcss-loader"
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }, {
                    loader: "postcss-loader"
                }]
            },
            {
                test: /\.(jpg|png|eot|svg|ttf|woff|woff2)$/, loader: 'url-loader?file-loader?name=public/fonts/[name].[ext]'
            },
            { test: require.resolve("react-addons-perf"), loader: "expose-loader?Perf" }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            buzz: "buzz"
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "public")
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    },

    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    devtool: "source-map", // enum
    context: __dirname, // string (absolute path!)
    target: "web", // enum
    stats: "errors-only"
}
