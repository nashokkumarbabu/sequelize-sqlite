const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.get('/api/contacts', (req, res) => {
  return db.Contact.findAll()
    .then((contacts) => res.send(contacts))
    .catch((err) => {
      console.log('There was an error querying contacts', JSON.stringify(err))
      return res.send(err)
    });
});

app.post('/api/contacts', (req, res) => {
  const { firstName, lastName, phone } = req.body
  // TODO: create contact
});

app.delete('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  // TODO: find and delete contact by id
});

app.put('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const { firstName, lastName, phone } = req.body
  // TODO: find and update contact by id
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});