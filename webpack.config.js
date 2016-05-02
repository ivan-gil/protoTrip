const NODE_ENV = process.env.NODE_ENV || "dev";
const webpack = require('webpack');
module.exports = {
    entry: "./app/main.js",
    output: {
        path: './public/build/',
        filename: "bundle.js",
        library: "TRP"
    },
    watch: NODE_ENV === "dev",
    watchOptions: {
    	aggregateTimeout: 100
    },
    devtool: NODE_ENV === "dev" ? "cheap-inline-module-source-map" : null,

    plugins: [
    	new webpack.DefinePlugin({
    		NODE_ENV: JSON.stringify('NODE_ENV')
    	})
    ],

    module: {
    	loaders: [{
    		test: /\.js$/,
    		loader: 'babel?presets[]=es2015'
    	}]
    }
};

if(NODE_ENV === 'prod') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}
