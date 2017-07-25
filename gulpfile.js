//Variáveis do gulp
var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");
//Mapeando diretórios de origem
var origemcss = './source/scss/*.scss';
var origemhtml = './source/*.html';
//Mapeando diretórios de destino
var destinocss = './dist/css';
var destinohtml = './dist';

gulp.task('minificacss', function() {
 return gulp.src(origemcss)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest(destinocss));
});

gulp.task('minificahtml', function() {
  return gulp.src(origemhtml)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(destinohtml));
});

gulp.task('background', function() {
	 gulp.watch(origemcss,['minificacss']);
	 gulp.watch(origemhtml,['minificahtml']);
});