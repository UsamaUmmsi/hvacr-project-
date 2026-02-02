import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import { deleteAsync } from 'del';

const sassCompiler = gulpSass(sass);
const bs = browserSync.create();

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
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(bs.stream());
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
    .pipe(bs.stream());
}

// Image Optimization Task
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin([
      imageminGifsicle({interlaced: true}),
      imageminMozjpeg({quality: 80, progressive: true}),
      imageminPngquant({quality: [0.6, 0.8]}),
      imageminSvgo({
        plugins: [
          {name: 'removeViewBox', active: false},
          {name: 'cleanupIDs', active: false}
        ]
      })
    ]))
    .pipe(gulp.dest(paths.images.dest));
}

// Browser Sync Task
function serve() {
  bs.init({
    proxy: 'localhost:5173', // Vite dev server port
    port: 3001,
    open: false
  });

  // Watch files
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.html.src).on('change', bs.reload);
}

// Clean Task
function clean() {
  return deleteAsync(['src/assets/css', 'src/assets/js', 'public/optimized-images']);
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
      imageminMozjpeg({quality: 85, progressive: true})
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
export { styles, scripts, images, serve, clean, watch, minifyCSS, optimizeHVACImages, buildCSS };

// Default Task
export const defaultTask = gulp.series(clean, gulp.parallel(styles, scripts, images));

// Development Task
export const dev = gulp.series(clean, gulp.parallel(styles, scripts), serve);

// Production Build Task
export const build = gulp.series(clean, gulp.parallel(styles, scripts, images, minifyCSS, buildCSS));

// HVACR Optimization Task
export const hvacr = gulp.series(optimizeHVACImages, buildCSS);

// Set default export
export default defaultTask;