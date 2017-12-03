var gulp = require('gulp');
const minify = require("gulp-babel-minify");
const imagemin = require('gulp-imagemin');

gulp.task('minifyJS', function(){
    gulp.src("./public/build/bundle.js")
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(gulp.dest("./public/minified"));
});


gulp.task('default', () =>
    gulp.src('./public/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images/'))
);


gulp.task('watch', function() {
    gulp.watch('public/build/bundle.js', ['minifyJS']);
});
