import express from 'express';
import dateHelper from './helpers/dateHelper';

var app = express();
// Required for heroku
var port = process.env.PORT || 3100;


app.get('/:value', function(req, res) {
  res.json(dateHelper(req.params['value']));
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).render('error');
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
