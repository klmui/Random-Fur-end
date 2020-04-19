const functions = require('firebase-functions');
const app = require('express')();

const {
    getRandomCat
} = require('./APIs/cats')

app.get('/', getRandomCat);
exports.api = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


