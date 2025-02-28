// next-i18next.config.js
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'tr', 'ar'],
      localeDetection: true, // Enable automatic locale detection
    },
    /** To avoid issues when deploying to some paas (vercel) */
    localePath:
      typeof window === 'undefined'
        ? require('path').resolve('./public/locales')
        : '/public/locales',
  
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  };