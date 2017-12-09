var path = require('path')
module.exports = {
   entry: './index.js',
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
   },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      components: path.resolve(__dirname, 'src/components/')
    }
  },
   module: {
     rules:[{
       test: /\.jsx?$/,
       use: 'babel-loader'
     }]
   }
}