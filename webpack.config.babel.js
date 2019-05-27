import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import HTMLWebpackTemplate from 'html-webpack-template'

export default () => {
  const plugins = []
  plugins.push(
    new HTMLWebpackPlugin({
      template: HTMLWebpackTemplate,
      inject: false,
      title: 'React App Template',
      mobile: true,
      chunks: ['main'],
      filename: 'index.html',
    })
  )

  return {
    devtool: 'source-map',
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules'),
      ],
    },
    resolveLoader: {
      modules: [path.join(__dirname, 'node_modules')],
    },
    entry: {
      main: ['./src/index.js'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    devServer: {
      open: true,
      historyApiFallback: true,
    },
    plugins,
  }
}
