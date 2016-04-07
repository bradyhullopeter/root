module.exports = function (gulp, plugins) {
    return function() {
        gulp.src(['app/**/*.js'])
            .pipe(plugins.fixmyjs())
            .pipe(gulp.dest('app'));
    };
};