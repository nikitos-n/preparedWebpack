const path = require('path');

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node-modules/'
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: '/node-modules/'
            }
        ]
    },
}

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production 
        ? false
        : 'eval-sourcemap';
    return conf;
}