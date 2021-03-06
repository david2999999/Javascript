const path = require('path');

module.exports = {
    entry: './boilerplate/src/index.js',
    output: {
        path: path.resolve(__dirname, 'boilerplate/public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'boilerplate/public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
};