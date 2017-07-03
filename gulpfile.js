var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

//first argument task name, second what we want it to do
gulp.task('default', function(){
    console.log('Hooray - you created a buld task');
});

gulp.task('html',function(){
    console.log('something cool');
});

//styles task
gulp.task('styles',function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars,nested,autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch',function(){
    //first argument file we want to watch, second what we want it to do
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    })
});
