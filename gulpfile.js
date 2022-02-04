const { src, task ,dest, parallel, series, watch } = require('gulp');

const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json')

const sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync').create("my server");

//=========================================>
//задание 1 скомпилировать html в отдельную папку
task("html", ()=>{
  return src("src/**/*.html")
    .pipe(dest("dest"))
})

//=========================================>
//задание 1 скомпилировать scss в отдельную папку
task("sass", ()=>{
  return src("src/style/*.scss")
    .pipe(sass())
    .pipe(dest("dest/css"))
    .pipe(browserSync.stream());
})

//=========================================>
//задание 1 скомпилировать ts в отдельную папку
task("ts", ()=>{
  return src("src/script/*.{ts,tsx}")
    .pipe(tsProject())
    .pipe(dest('dest/js'));
})


//=========================================>
//задание на запуск сервера
task("server", ()=>{
  
  //просматривает папку на наличие html(в нутри есть все ссылки на скрипты)
  browserSync.init({
    server: {
      baseDir: "dest"
    },
    browser: 'chrome'
  });
  
  //при просмотре файлов запускает задания если файлы были изменены
  //место установки watchers
  watch("src/**/*.scss", series("sass"))
  watch("src/**/*.ts", series("ts"))
  watch("src/*.html").on('change', browserSync.reload)
}, )

//=========================================>
//стандартное задание на сборку и запуск запуск
task('default', series("html", "sass", "ts", 'server'))