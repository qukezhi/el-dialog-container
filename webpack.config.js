const path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/dialog.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'el-dialog-container.min.js',
        library: 'ElDialogContainer',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {

                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: 'media/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue', '.jsx', 'json'],
        alias: {
            '@': path.resolve('./src'),
            'vue$': 'vue/dist/vue.esm.js',
            'vuex$': 'vuex/dist/vuex.esm.js',
            'vue-router$': 'vue-router/dist/vue-router.esm.js',
        }
    }
};