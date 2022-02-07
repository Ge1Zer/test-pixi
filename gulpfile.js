const { src, task, dest, parallel, series, watch } = require('gulp');
const concat = require('gulp-concat')

const { createProject } = require('gulp-typescript');
const tsProject = createProject('tsconfig.json')

const sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync').create("my server");

//=========================================>
//task compiling html file to dest
task("html", ()=>{
  return src("src/**/*.html")
    .pipe(dest("dest"))
})

//=========================================>
//task compiling sass file to dest
task("sass", ()=>{
  return src("src/style/*.scss")
    .pipe(sass())
    .pipe(dest("dest/css"))
    .pipe(browserSync.stream());
})

//=========================================>
//task compiling ts file to dest
task("ts", ()=>{
  return src("src/script/*.{ts,tsx}")
    .pipe(tsProject())
    .pipe(concat('index.js'))
    .pipe(dest('dest/js'));
})


//=========================================>
//run server
task("server", ()=>{
  
  browserSync.init({
    server: {
      baseDir: "dest"
    },
    browser: 'chrome'
  });
  
  //watcher to change file
  watch("src/**/*.scss", series("sass"))
  watch("src/**/*.ts", series("ts"))
  watch("src/*.html").on('change', browserSync.reload)
}, )

//=========================================>
//tasks runing by default 
task('default', series("html", "sass", "ts", 'server'))