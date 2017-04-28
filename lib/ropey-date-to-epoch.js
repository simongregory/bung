// Designed to transform strings in the format of '21 Nov 2014', '5 Nov 2014' into
// their epoch equivalents.

// "HH:MMa/pm d MMM YYYY"
// "d MMM YYYY"
// "MMM YYYY"
// "YYYY"
function ropeyDateToEpoch(time) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const times = time.split(' ');

  let date;
  let minute;
  let hour;
  let day;
  let month;
  let year;

  if (times.length === 1) {
    date = Date.UTC(Number(times[0]), 0);
  } else if (times.length === 2) {
    month = months.indexOf(times[0]);
    year = Number(times[1]);

    date = Date.UTC(year, month);
  } else if (times.length === 3) {
    day = Number(times[0]);
    month = months.indexOf(times[1]);
    year = Number(times[2]);

    date = Date.UTC(year, month, day);
  } else if (times.length === 4) {
    const hoursMinsMatch = times[0].match(/([0-1]?[0-9]|2[0-3])(:([0-5][0-9]))?(a|p)m/);

    if (hoursMinsMatch !== null) {
      hour = parseInt(hoursMinsMatch[1], 10);
      minute = parseInt(hoursMinsMatch[3], 10);
      if (isNaN(minute)) {
        minute = 0;
      }

      if (hour < 12 && hoursMinsMatch[4] === 'p') {
        hour += 12;
      }
    }

    day = parseInt(times[1], 10);
    month = months.indexOf(times[2]);
    year = parseInt(times[3], 10);

    date = Date.UTC(year, month, day, hour, minute);
  }

  return date;
}

module.exports = ropeyDateToEpoch;
