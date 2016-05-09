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
    		'react-redux',
            'bootstrap'

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
            { 
                test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
    		{ 
                test: /\.es$/,
                loaders: ['babel?presets[]=es2015,presets=react'] },
    		{ 
                test: /\.jsx$/,
                loaders: ['jsx-loader?insertPragma'] 
            },
    		{ 
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'] 
            },
    		{ 
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'scss-loader'] 
            },
    		{ 
                test: /\.png$/,
                loaders: ['url-loader?limit=150000'] 
            },
    		{ 
                test: /\.jpg$/,
                loaders: ['url-loader?limit=150000'] 
            },
    		{
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            { test: /\.json$/, loaders: ['json-loader'] },
                ]
    },
    resolve: {
    	root: [path.join(__dirname, 'app/scripts')],
    	extensions: ['', '.js', '.es', '.css', '.scss'],
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
