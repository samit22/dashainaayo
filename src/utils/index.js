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

/** Whole calendar days until (or since) a date — for Important Dates countdown. */
export const findDaysUntil = date => {
  const target = moment(date).startOf('day')
  const today = moment().startOf('day')
  const days = target.diff(today, 'days')

  if (days > 1) {
    return `in ${days} days`
  }
  if (days === 1) {
    return 'in 1 day'
  }
  if (days === 0) {
    return 'today'
  }
  if (days === -1) {
    return '1 day ago'
  }
  return `${Math.abs(days)} days ago`
}

/** @deprecated Prefer findDaysUntil for Important Dates; kept for any legacy use */
export const findReadableTime = date => findDaysUntil(date)

export const addHours = (date, hours) => {
  const added = moment(date).add(hours, 'hours').format('YYYY-MM-DD HH:mm:ss')
  return added
}
