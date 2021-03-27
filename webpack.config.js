const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/index.ts',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
   },
   devtool: 'inline-source-map',
   plugins: [
      new CopyPlugin({
         patterns: [
            { from: 'src/*.html', to: '[name][ext]' },
            { from: 'src/icons/*.png', to: 'icons/[name][ext]' },
            { from: 'src/icons/*.svg', to: 'icons/[name][ext]' },
            { from: 'src/*.mp3', to: '[name][ext]' },
         ],
      }),
   ],
   module: {
      rules: [
         // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
         {
            test: /\.tsx?$/,
            use: ['ts-loader'],
            exclude: /node_modules/,
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
               },
            ],
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
               // Creates `style` nodes from JS strings
               {
                  loader: 'style-loader',
                  // options: {
                  //   // injectType: "singletonStyleTag"
                  //   // injectType: "linkTag"
                  // }
               },
               // Translates CSS into CommonJS
               'css-loader?url=false',
               'resolve-url-loader',
               // Compiles Sass to CSS
               'sass-loader',
            ],
         },
      ],
   },
};
