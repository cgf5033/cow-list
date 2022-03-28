const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {save, getAll, update, remove} = require('../database')

const PORT = 3000;
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // FORGOT -- NEED THIS


// Routes
app.get('/api/cows', (req, res) => {
  getAll()
  .then(result => res.status(200).send(result)) // distinguish 'result'
  .catch(err => console.error(err))
})

app.post('/api/cows', (req, res) => {
  //console.log(req.body)
  save(req.body)
    .then(() => res.status(201).send('posted to app.post!'))
    .catch(err => console.error(err))
})

// app.put('/api/cows', (req, res) => {
//   console.log('PUT says hello');
//   console.log(req.body);
//   //res.send('GOOOD');
//   update(req.body)
//     .then((result) => res.status(201).send(result))
//     .catch(err => res.status(500).send(err))
// })

app.delete('/api/cows', (req, res) => {
  remove(req.body)
    .then(() => res.status(200).send('Got a DELETE request at /api/cows!'))
    .catch(err => console.error(err))
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
