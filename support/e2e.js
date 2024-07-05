// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// cypress/support/e2e.js

// Ignorer les erreurs d'origine croisée
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorer les erreurs provenant d'origines croisées
    if (err.message.includes('Script error')) {
      return false;
    }
    // Sinon, laissez Cypress échouer le test normalement
    return true;
  });
  
  // Vous pouvez ajouter d'autres configurations et commandes ici
  