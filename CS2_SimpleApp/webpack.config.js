var webpack = require('webpack'),
    path = require('path');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  devtool: 'source-map',
  
  entry: './app/boot.ts',
  resolve: {
    extensions: ['.ts', '.js', '.html']
  },
  output: {
    path: __dirname+'./build',
    filename: 'bundle.js'
  },
  module: {
    
    rules: [
 { test: /\.js$/, loader: 'source-map-loader', exclude: [ root('node_modules/rxjs') ] ,enforce:"pre"},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.html/, loader: 'html-loader'},
      {test: /\.ts?$/, loader: 'ts-loader'}, ]
  },
  devServer: {
    historyApiFallback: true
  }
};
