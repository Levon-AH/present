const webpack = require('webpack');
const path = require('path');

module.exports = {

    devtool: "source-map",

    entry: ["babel-polyfill","./src/index.js"],

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env'],
                        plugins: ['babel-plugin-transform-object-rest-spread']
                    }
                }
            },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};