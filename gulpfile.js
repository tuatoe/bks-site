var gulp = require('gulp'),
watch = require('gulp-watch');

//first argument task name, second what we want it to do
gulp.task('default', function(){
    console.log('Hooray - you created a buld task');
});

gulp.task('html',function(){
    console.log('something cool');
});

gulp.task('watch',function(){
    //first argument file we want to watch, second what we want it to do
    watch('./app/index.html', function(){
        gulp.start('html');
    });
});