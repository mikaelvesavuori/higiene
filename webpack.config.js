const webpack = require("webpack");
const path = require("path");

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

module.exports = {
	watch: false,
	context: srcDir,
	entry: {
		main: ["./index.ts"]
	},
	output: {
		path: distDir,
		filename: "[name].[chunkhash].js",
		publicPath: "/"
	},
	resolve: {
		modules: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src")],
		extensions: [".ts", ".js", ".mjs"]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(js|mjs)$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								[
									"@babel/preset-env",
									{
										modules: false,
										useBuiltIns: "usage",
										loose: true,
										targets: {
											//browsers: ["last 2 versions", "> 5%", "ie 11"]
											browsers: [
												"Chrome >= 60",
												"Safari >= 10.1",
												"iOS >= 10.3",
												"Firefox >= 54",
												"Edge >= 15"
											]
										}
									}
								],
								"@babel/preset-stage-0"
							]
						}
					}
				],
				exclude: /node_modules/
			}
		]
	},
	performance: {
		maxEntrypointSize: 300000,
		maxAssetSize: 175000,
		hints: "warning"
	}
};
