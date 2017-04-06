const webpack = require('webpack')

module.exports = {
	entry: './index.js',
	output: {
		path: './dist', // 不存在的话会自动创建。
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: './vendors/jquery-plugin', // 使用统一的 jQuery 的插件。
			jQ: './vendors/jquery-plugin'
		}) 
	]
}