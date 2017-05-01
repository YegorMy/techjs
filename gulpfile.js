const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject('./tsconfig.json');
const clean = require('gulp-clean');

gulp.task('default', ['ts']);

gulp.task('clean', () => {
    gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('ts', () => {
    gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['clean', 'ts'], () => {
    gulp.watch('src/**/*.ts', ['ts']);
});