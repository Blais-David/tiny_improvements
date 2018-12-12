const express = require('express');

const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") { app.use(express.static('client/build')); }

require('./routes/api-routes')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kudos')

app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT}`);
});