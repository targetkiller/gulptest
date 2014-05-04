// 定义依赖项和插件
var gulp=require('gulp'),
    gutil=require('gulp-util'),
    uglify=require('gulp-uglify'),
    concat=require('gulp-concat'),
    connect=require('gulp-connect');
 
// 定义名为 "js" 的任务
gulp.task('js', function(){
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
});
 
// 打开web服务器
gulp.task('webserver', function() {
     connect.server({
     	// 端口
      	port: 8090,
      	// 域名http://gulp.dev
  		// host: 'gulp.dev',
     	// 让其支持实时刷新
      	livereload: true
    });
});
 
// 定义默认任务
gulp.task('default', ['webserver','js']);