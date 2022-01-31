import path from 'path';
import extend from 'extend';

const common = {
  mode: 'development',
  stats: {
    colors: true,
    chunks: false,
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        include: [
          path.join(__dirname, '../components'),
          path.join(__dirname, '../routes'),
          path.join(__dirname, '../client.js'),
          path.join(__dirname, '../server.js'),
        ],
        loader: 'babel-loader'
      },
    ]
  },
};

const client = extend(true, {}, common, {
  entry: path.join(__dirname, '../client.js'),
  output: {
    filename: 'client.js',
    publicPath: '/',
    path: path.join(__dirname, '../dist/public'),
  }
});

const server = extend(true, {}, common, {
  entry: path.join(__dirname, '../server.js'),
  output: {
    filename: 'server.js',
    path: path.join(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
    global: false,
    __filename: false,
    __dirname: false
  },
  externals: /^[a-z][a-z\/\.\-0-9]*$/i
});

export default [client, server];
