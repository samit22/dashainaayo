import moment from 'moment-timezone';

export const convertNepaliDigit = num => {
  const numbers = {
    0: '०',
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
  };
  const convertArray = num
    .toString()
    .split('')
    .map(n => {
      if (n === '.' || n === ',') {
        return n;
      }

      return numbers[Number(n)];
    });
  return convertArray.join('');
};

export const DashainDates = {
  start_date: '2022-09-26 00:00:00',
  dates: [
    { eng_label: 'Ghatasthapana', nep_label: 'घटस्थापना', day: 1 },
    { eng_label: 'Fulpati', nep_label: 'फूलपाती', day: 7 },
    { eng_label: 'Maha astami', nep_label: 'महाअष्टमी', day: 8 },
    { eng_label: 'Maha Nawami', nep_label: 'महानवमी', day: 9 },
    { eng_label: 'Bijaya Dashami', nep_label: 'विजया दशमी', day: 10 },
    { eng_label: 'Papakunsa Ekadashi', nep_label: 'पापांकुशा एकादशी', day: 11 },
    { eng_label: 'Kojagrat Poornima', nep_label: 'कोजाग्रत पूर्णिमा', day: 14 },
  ],
};
export const findReadableTime = date => {
  // console.log(date);
  return moment(date).fromNow();
};

export const addHours = (date, hours) => {
  const added = moment(date).add(hours, 'hours').format('YYYY-MM-DD HH:mm:ss');
  return added;
};
