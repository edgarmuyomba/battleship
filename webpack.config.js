const path = require("path");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                type: "asset/resource",
            }
        ]
    },
    devServer: {
        static: "./dist",
    }
}