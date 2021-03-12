const request = require('supertest');
import '@babel/polyfill';
const fetch = require('node-fetch') /*Since jest run on node environment which does not have fetch API like 
in a browser, it is producing referenceError. To fix this use node-fetch module to 
require fetch in app.js)*/
const app = require('../../../server/index.js')  // Link to your server file

// import { startupMessage } from './server'
const startupMessage = require('../../../server/index.js');
test('listen', () => {
    expect(startupMessage).toBeDefined();
});