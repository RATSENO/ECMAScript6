const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
//걸프 의존성을 여기에 작성합니다.

gulp.task('default',(done) => {
    //걸프 작업을 여기에 작성합니다.

    //ESLint를 실행합니다.
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    //node 소스
    gulp
        .src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    //브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));

    done();
});