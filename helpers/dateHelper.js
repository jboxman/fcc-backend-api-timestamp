import moment from 'moment';
import chrono from 'chrono-node';

export function isEpoch(value) {
  return /^\d{10}$/.test(value);
}

export default function(value) {
  const dateFmt = 'MMMM D, YYYY';
  let unix;
  let natural;
  let parsedDate;
  let asDate;

  if(isEpoch(value)) {
    unix = value;
    natural = moment.unix(value).format(dateFmt);
  }
  else {
    parsedDate = chrono.parseDate(value);

    if(parsedDate) {
      asDate = new Date(parsedDate).getTime();
      natural = moment(asDate).format(dateFmt);
      unix = asDate / 1000.0;
    }
    else {
      unix = null;
      natural = null;
    }
  }

  return {
    unix,
    natural
  };
}
