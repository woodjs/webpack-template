module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'), // Объединяет media запросы
    require('cssnano'), // Минимизирует css код
  ],
};
