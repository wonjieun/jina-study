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
          path.join(__dirname, '../client.js'),
          path.join(__dirname, '../server.js')
        ],
        loader: 'babel-loader'
      },
    ]
  },
};

const client = extend(true, {}, common, {
  entry: path.join(__dirname, '../client.js'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../build/public'),
    filename: 'client.js'
  }
});

const server = extend(true, {}, common, {
  entry: path.join(__dirname, '../server.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'server.js',
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
