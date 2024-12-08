const path = require('path');

module.exports = {
  webpack: (config) => {
    // Добавляем полифиллы для https и http
    console.log('Webpack config before modification:', config);  // Лог текущей конфигурации

    config.resolve.fallback = {
      ...config.resolve.fallback,
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
    };

    // Разрешаем импорт модуля https-browserify из новой папки src/libs
    config.resolve.alias = {
      ...config.resolve.alias,
      'https-browserify': path.resolve(__dirname, 'src/libs/https-browserify'),
    };

    console.log('Webpack config after modification:', config);  // Лог после изменений

    return config;
  },
};
