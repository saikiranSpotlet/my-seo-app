// react-snap.config.js
module.exports = {
    // ignore: ['/*/'],
    routes: [
      '/',
      '/about-us',
      '/blogs',
      ...Array.from({ length: 20 }, (_, i) => `/blogs/blog-${i + 1}`)
    ]
  };