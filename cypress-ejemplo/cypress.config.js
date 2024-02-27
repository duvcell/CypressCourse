const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin = 
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = 
      require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    //se define la ruta dónde estarán los archivos 
    //con nuestros escenarios de prueba
    specPattern: "cypress/e2e/features/*.feature",
    //Se define la url base de nuestras pruebas
    baseUrl: "https://demo.realworld.io/#/",
    //Deshabilitar seguridad Web para navegar 
    //sin resrtiiciones
    chromeWebSecurity: false
  },
});
