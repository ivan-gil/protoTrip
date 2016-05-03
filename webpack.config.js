var NODE_ENV = process.env.NODE_ENV || "dev";
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
    	app: ["./app/main.es"],
    	vendor: [
    		'react',
    		'react-router',
    		'redux',
    		'react-redux'
    	]
    },
    output: {
        path: path.join(__dirname, '/public/build/'),
        filename: '[name].bundle.js',
        library: "TRP"
    },
    watch: NODE_ENV === "dev",
    watchOptions: {
    	aggregateTimeout: 100
    },
    devtool: NODE_ENV === "dev" ? "cheap-inline-module-source-map" : null,
    module: {
    	loaders: [
    		{ test: /\.es$/, loaders: ['babel?presets[]=es2015'] },
    		{ test: /\.jsx$/, loaders: ['jsx-loader?insertPragma'] },
    		{ test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    		{ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'scss-loader'] },
    		{ test: /\.png$/, loaders: ['url-loader?limit=150000'] },
    		{ test: /\.jpg$/, loaders: ['url-loader?limit=150000'] },
    		{ test: /\.ttf$/, loaders: ['url-loader?limit=150000'] },
    		{ test: /\.json$/, loaders: ['json-loader'] },
    	]
    },
    resolve: {
    	root: [path.join(__dirname, 'app/scripts')],
    	extensions: ['', '.js', 'es', 'css', 'scss'],
    	moduleDirectories: ['node_modules']
    },
    plugins: [
    	new webpack.DefinePlugin({
    		NODE_ENV: JSON.stringify('NODE_ENV')
    	}),
    	new webpack.optimize.CommonsChunkPlugin({
    		name:['vendor'],
    		minChunks: Infinity
    	})
    ],
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
