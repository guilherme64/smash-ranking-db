const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const outputDirectory = "dist";
const NodemonPlugin = require('nodemon-webpack-plugin')
module.exports = {
    entry: "./smashview/src/index.js",
    output: {
        path: path.join(__dirname, '/smashview/', outputDirectory),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
            resolve: {
                extensions: ['.js', '.jsx'],
            }

        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },

    devServer: {
        port: 3000,
        open: true,
    },
    plugins: ["babel-plugin-styled-components",
        new CleanWebpackPlugin(['/smashview/' + outputDirectory]),
        new HtmlWebpackPlugin({
            template: "./smashview/public/index.html",
            filename: "./index.html"
        }),
        new NodemonPlugin()
    ]
};