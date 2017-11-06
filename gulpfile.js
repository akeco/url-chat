var gulp = require('gulp');
const minify = require("gulp-babel-minify");

gulp.task('minifyJS', function(){
    gulp.src("./public/build/bundle.js")
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(gulp.dest("./public/minified"));
});


gulp.task('watch', function() {
    gulp.watch('public/build/bundle.js', ['minifyJS']);
});
