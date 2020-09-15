/**
 * Required External Modules
 */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || '8000';
const category = require('./category');

const databaseUrl = `mongodb://localhost:27017/category`;

mongoose.connect(databaseUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(category);
/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
  res.status(200).send('Category: NodeJS Assignment');
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});