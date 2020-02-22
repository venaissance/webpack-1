const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};