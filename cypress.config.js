const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){
      baseUrl: 'http://localhost:8080',
      allureWriter(on, config);
            return config;
      
    }
  },
})
