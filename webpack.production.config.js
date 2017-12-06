const path = require('path');
var webpack = require('webpack');
const Uglify = require("uglifyjs-webpack-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
const BabiliPlugin = require('babili-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: ["babel-polyfill", "./public/javascripts/react/App.js"],
    output: {
        path: path.resolve(__dirname, "./public/build"),
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2017', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
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
                test: /\.(jpg|png|eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            buzz: "buzz"
        }),
        //new webpack.LoaderOptionsPlugin({
          //  minimize: true,
          //  debug: false
        //}),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
            },
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new BabiliPlugin(),
        //new BundleAnalyzerPlugin()
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

    context: __dirname, // string (absolute path!)
    target: "web", // enum
    stats: "errors-only"
}
