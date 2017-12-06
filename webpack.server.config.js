const path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ["babel-polyfill", "./routes/index.js"],
    output: {
        path: path.resolve(__dirname, "./routes/isomorphic"),
        filename: "index.js"
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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
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
    stats: "errors-only",
    target: 'node',
    externals: [nodeExternals()],
}
