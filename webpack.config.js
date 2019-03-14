const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const isProduction = env === 'production';
    return{
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },{
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options:{sourceMap: true}
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        },
                    }
                ]
            }]
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename: 'styles.css',
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/',
            historyApiFallback: true,
        }
    }
};