import express from 'express';
import bodyParser from 'body-parser';
import dateHelper from './helpers/dateHelper';

const app = express();
// Required for heroku
const port = process.env.PORT || 3100;

// __dirname is '/' after babel
app.use(express.static(`${process.cwd()}/public`));

app.use(bodyParser.json());

app.post('/', function(req, res) {
  const {natural, unix} = req.body;

  if(!natural && !unix) {
    res.status(400).send('Invalid API call');
    return;
  }

  res.json(dateHelper(natural || unix));
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).render('error');
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
