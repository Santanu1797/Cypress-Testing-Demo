const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config){
      baseUrl: 'https://s2azure.capgemini.com/petclinic/',
      allureWriter(on, config);
            return config;
      
    }
  },
})
