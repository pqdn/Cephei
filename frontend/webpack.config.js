let path = require('path');
let webpack = require('webpack');

let b = path.join(__dirname, 'target', 'classes');

const paths = {
  build: b,
  static: path.join(b, 'static'),
  srcJavascript: path.join(__dirname, 'src', 'main', 'javascript'),
  srcResources: path.join(__dirname, 'src', 'main', 'resources'),
};

module.exports = {
  entry: {
    javascript: path.join(paths.srcJavascript, 'index.jsx'),

  },
  output: {
    path: paths.static,
    filename: 'bundle.js',
    //publicPath: '/static/',
  },
  devtool: 'inline-source-map',
  module: {
      loaders: [
        {
            test: /\.jsx?$/,
            loader: [
                'react-hot-loader',
                'babel-loader'
            ],
            include: paths.srcJavascript
        },
          { test: /\.css$/, loader: 'style-loader!css-loader'}

    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      'NODE_ENV': 'development',
      'EFS_REST_URL': 'http://localhost:8080/rest',
    }),
    new webpack.NamedModulesPlugin(),
  ]
};
