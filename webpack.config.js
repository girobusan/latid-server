const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

const env = process.env.NODE_ENV
const econfig = {
    mode: env || 'development'
 }

//var watchornot = (this.mode=="development");

module.exports =  (env, argv) =>( {
    
   
    watch: argv.mode != 'production',
    target: 'node',

       

    mode: "development",
    entry: {
        "latidserv": './src/index.js',
    
    }, //array!!!
    devtool: argv.mode !="production" ? 'inline-source-map' : "",

    output: {
        filename: '[name].js',
        //path: path.resolve(__dirname, ''),
        path: path.resolve(__dirname, argv.mode=='production' ? 'dist' : 'out')
    },
 
    module: {
        rules: [ 
     

        ]

    },
    plugins: [
        new webpack.DefinePlugin({
            // Definitions...
            'VERSION': JSON.stringify(pkg.version)
        }),

    ],
});