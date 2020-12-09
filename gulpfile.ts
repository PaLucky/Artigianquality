declare function require(path: string) : any;

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');

const styl = require('gulp-stylus');
const autoprefix = require('gulp-autoprefixer');
const minifystyl = require('gulp-clean-css');
const gutil  = require('gulp-util');

const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init({
        open: false,
        server: {
            baseDir: "./dist",
        }
    });
});
/**

 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts", "!**/*.styl"])
        .pipe(gulp.dest("dist"))
});

/**
 * Copy all required libraries into build directory.
 'angular2/es6/dev/src/testing/shims_for_IE.js',
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'angular2/bundles/angular2-polyfills.js',
            'systemjs/dist/system.src.js',
            'rxjs/bundles/Rx.js',
            'angular2/bundles/angular2.dev.js',
            'angular2/bundles/router.dev.js',
            'angular2/bundles/upgrade.dev.js',
            'angular2/bundles/http.dev.js',
            'angular2-google-maps/bundles/angular2-google-maps.js'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("dist/lib"));
});

gulp.task('st', () => {
  return gulp.src("src/**/*.styl")
  .pipe(styl())
  .pipe(autoprefix())
  .pipe(minifystyl())
  .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.styl"], ['resources','st']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

/**
gulp.task('images', () => {
  return gulp.src('src/images/')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

 * Build the project.
 */
gulp.task("build", ['compile', 'st', 'resources', 'libs'], () => {
    console.log("Building the project ...")
});
