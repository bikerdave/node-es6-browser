module.exports = {
    entry: './src/numeral.js',
    output: {
        filename: 'numeral.js',
        library: {
            type: 'umd',
        },
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
        ],
    },
};
