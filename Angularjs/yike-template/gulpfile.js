
// 引入本地安装的gulp
var gulp = require('gulp');

var less = require('gulp-less');

var cssmin = require('gulp-cssmin');

var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');

//返回值gulp是一个对象，借助此对象可以实现任务清单定制
//通过一系列方法实现

//定义任务
gulp.task('less',function(){
     
 
     // console.log('学习gulp');
     // 借助gulp.src来指定less文件位置
     // //正则*，只要是less
     gulp.src('./public/less/*.less')
     //借助于gulp插件实现less 转 css 操作
         .pipe(less())
         .pipe(cssmin())
         //通过gulp.dest进行存储
         .pipe(gulp.dest('./release/public'));
     
});

//处理图片(压缩图片)
gulp.task('image',function(){
	//所有格式图片
	// gulp.src('./public/images/*')
	// 可以把文件夹内的图片也拿出来压缩
	gulp.src('./public/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./release/public/images'));
});

//压缩JS
gulp.task('js',function(){
	gulp.src('./scripts/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./release/public/'))
})

