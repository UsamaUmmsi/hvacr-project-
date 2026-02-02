const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Paths
const paths = {
  styles: {
    src: 'src/**/*.scss',
    dest: 'src/assets/css'
  },
  scripts: {
    src: 'src/**/*.js',
    dest: 'src/assets/js'
  },
  images: {
    src: 'public/images/**/*',
    dest: 'public/optimized-images'
  },
  html: {
    src: 'public/*.html'
  }
};

// SCSS Compilation Task
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// JavaScript Processing Task
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env', '@babel/preset-react']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Image Optimization Task
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 80, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(paths.images.dest));
}

// Browser Sync Task
function serve() {
  browserSync.init({
    proxy: 'localhost:5173', // Vite dev server port
    port: 3001,
    open: false
  });

  // Watch files
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// Clean Task
function clean() {
  const del = require('del');
  return del(['src/assets/css', 'src/assets/js', 'public/optimized-images']);
}

// CSS Minification for Production
function minifyCSS() {
  return gulp.src('src/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
}

// Watch Task
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// HVACR Specific Tasks
function optimizeHVACImages() {
  return gulp.src('public/*.jpg')
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 85, progressive: true})
    ]))
    .pipe(gulp.dest('public/optimized'));
}

function buildCSS() {
  return gulp.src('src/index.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
}

// Export Tasks
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.serve = serve;
exports.clean = clean;
exports.watch = watch;
exports.minifyCSS = minifyCSS;
exports.optimizeHVACImages = optimizeHVACImages;
exports.buildCSS = buildCSS;

// Default Task
exports.default = gulp.series(clean, gulp.parallel(styles, scripts, images));

// Development Task
exports.dev = gulp.series(clean, gulp.parallel(styles, scripts), serve);

// Production Build Task
exports.build = gulp.series(clean, gulp.parallel(styles, scripts, images, minifyCSS, buildCSS));

// HVACR Optimization Task
exports.hvacr = gulp.series(optimizeHVACImages, buildCSS);