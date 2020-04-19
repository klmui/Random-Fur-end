const functions = require('firebase-functions');
const app = require('express')();

const {
    getRandomCat
} = require('./APIs/cats')

app.get('/todos', getRandomCat);
exports.api = functions.https.onRequest(app);