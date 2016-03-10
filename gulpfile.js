var gulp = require('gulp'), 
	webserver = require('gulp-webserver'); // 本地服务器

// 注册任务
gulp.task('webserver', function() {
  gulp.src( './' ) // 服务器目录（./代表根目录）
  .pipe(webserver({ // 运行gulp-webserver
    livereload: true, // 启用LiveReload
    open: true // 服务器启动时自动打开网页
  }));
});



// 监听任务
gulp.task('watch',function(){
  gulp.watch( 'index.html'); // 监听根目录下所有.html文件
  gulp.watch( 'clock.js'); // 监听根目录下所有.js文件
  gulp.watch( 'clock.css'); // 监听根目录下所有.css文件
});

// 默认任务
gulp.task('default',['webserver','watch']); 