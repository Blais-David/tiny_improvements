const User = require('../models/User');
const Kudos = require('../models/Kudos');

module.exports = function (app) {

  app.get('/api/user', function (req, res) {
    User.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get('/api/users/:id', function (req, res) {
    User.find({ _id: req.params.id })
      .populate('kudos')
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.get('/api/kudos', function (req, res) {
    Kudos.find({})
      .populate('from')
      .populate('to')
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post('/api/kudos', function (req, res) {
    const newEntry = {
      from: req.body.from,
      to: req.body.to,
      title: req.body.title,
      body: req.body.body

    }

    console.log(newEntry);
    Kudos.create(newEntry)

      .then(function (userData) {
        res.json(userData);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};