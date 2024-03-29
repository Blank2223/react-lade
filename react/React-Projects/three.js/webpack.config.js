const path = require('path');

module.exports = {
    entry: './main.js', // Your main JavaScript file
    output: {
        filename: 'bundle.js', // Output bundle name
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};