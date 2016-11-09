module.exports = {
  sass: {
    src: 'src/sass/main.scss',
    dist: 'public/assets/css'
  },
  server: {
    root: 'public/'
  },
  javascript: {
    src: 'src/js/main.js',
    dist: 'public/assets/js',
    mainFile: 'main.js',
    distFile: 'bundle.js'
  },
  html: {
    dist: 'i18n'
  }
}
