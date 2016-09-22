var test = require('tape');
var chrono = require('chrono-node');
import moment from 'moment';

import dateHelper, * as helpers from '../helpers/dateHelper';

test('dateHelper', function(t) {
  const unix = 1111078800;
  const natural = 'March 17, 2005';
    const expected = {
      unix,
      natural
    };

  t.test('with epoch', (t) => {
    const actual = dateHelper(unix);
    t.deepEqual(actual, expected);
    t.end();
  });

  t.test('with natural', (t) => {
    const actual = dateHelper(natural);
    t.deepEqual(actual, expected);
    t.end();
  });

});

test('isEpoch', (t) => {
  const isEpoch = helpers.isEpoch;
  let actual;

  actual = isEpoch(Array(11).join('1'));
  t.equal(true, actual);
  actual = isEpoch('not');
  t.equal(actual, false);
  actual = isEpoch(100000000);
  t.equal(actual, false);
  actual = isEpoch(11110000000);
  t.equal(actual, false);
  t.end();
});
