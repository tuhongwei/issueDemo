var gulp = require('gulp');
var watch = require('gulp-watch');

var webpackStream = require('webpack-stream');
var webpack = require("webpack");
// 引用webpack配置文件
var webpackConfig = require('./webpack.config.js');

gulp.task("jsbuild", function(){
	return gulp.src("./js/**/*.js")
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest("./build/js"));
});


// 监视文件改动并重新载入
var webserver = require('gulp-webserver');
gulp.task('serve', function(){
	gulp.start("jsbuild");
	gulp.src("./")
		.pipe(webserver({
			host: "127.0.0.1",
			port: 9000,
			livereload: true,
			open: "./html/test.html"
		}));
	
	watch(["./js/**/*.js", "./template/**/*.art"], function(){
		gulp.start("jsbuild");
		reload();
	});
});

// 开发
gulp.task("dev", ["serve"]);
