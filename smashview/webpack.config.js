const path = require("path");
const outputDirectory = "dist";

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,

            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devServer: {
        port: 3000,
        open: true
    },
    //plugins: [htmlPlugin]
}