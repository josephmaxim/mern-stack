const { resolve } = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssOutputLocation = process.env.NODE_ENV === 'production' ?
  'public/stylesheets/style-prod.css' :
  'stylesheets/style.css';

const jsProdOutput = {
  filename: 'public/javascripts/build-prod.js',
  path: resolve(__dirname),
  publicPath: '/',
};

const jsDevOutput = {
  filename: 'javascripts/build.js',
  path: '/',
  publicPath: '/',
};

const jsOutputLocation = process.env.NODE_ENV === 'production' ? jsProdOutput : jsDevOutput;

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './index.jsx',
  ],
  output: jsOutputLocation,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'style-loader!css-loader!resolve-url-loader',
        }),
      },
      {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(gif|png|jpg|svg)$/i,
        use: [
          'file-loader?name=[hash].[ext]&outputPath=public/img/&publicPath=/img/',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: cssOutputLocation,
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    output: {
      comments: false,
    },
  }));
  module.exports.plugins.push(new webpack.HashedModuleIdsPlugin());
  module.exports.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  module.exports.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }));
  module.exports.plugins.push(new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    threshold: 10240,
    minRatio: 0.8,
  }));
}

if (process.env.NODE_ENV !== 'production') {
  module.exports.entry.unshift(
    'react-hot-loader/patch',
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
  );
  module.exports.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}
