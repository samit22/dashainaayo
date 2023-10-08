import moment from 'moment-timezone'

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
  }
  const convertArray = num
    .toString()
    .split('')
    .map(n => {
      if (n === '.' || n === ',') {
        return n
      }

      return numbers[Number(n)]
    })
  return convertArray.join('')
}

export const findReadableTime = date => {
  return moment(date).fromNow()
}

export const addHours = (date, hours) => {
  const added = moment(date).add(hours, 'hours').format('YYYY-MM-DD HH:mm:ss')
  return added
}
