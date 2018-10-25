const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const outputDirectory = "dist";
module.exports = {
    entry: "./smashview/src/index.js",
    output: {
        path: path.join(__dirname, '/smashview/', outputDirectory),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: /smashview\/\src/,
                exclude: [/node_modules/, /smash/],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:8080"
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: "./smashview/public/index.html"
        })
    ]
};