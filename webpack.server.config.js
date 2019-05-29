const path = require('path'),
    nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

module.exports = {
    target: "node",
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
                    presets: ['env', 'react', 'stage-2']
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
