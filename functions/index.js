const functions = require('firebase-functions');
const app = require('express')();

const { db } = require('./util/admin');

const {
    getRandomCat
} = require('./APIs/cats')

// GET a cat
app.get('/', getRandomCat);

// POST a cat
app.post('/', (request, response) => {
  const newCat = {
    cat: request.body.cat
  }
  db
    .collection('cats')
    .add(newCat)
    .then((doc) => {
        const responseCatItem = newCat;
        responseCatItem.id = doc.id;
        return response.json(responseCatItem);
    })
    .catch((err) => {
      response.status(500).json({ error: 'Something went wrong' });
      console.log(err);
    });
});

exports.api = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onrequest((requestuest, responseponse) => {
//  responseponse.send("Hello from Firebase!");
// });


