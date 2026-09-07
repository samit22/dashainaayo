import moment from 'moment-timezone'
import {
  addHours,
  convertNepaliDigit,
  findDaysUntil,
  findReadableTime,
} from './index'

describe('convertNepaliDigit', () => {
  it('converts arabic digits to nepali', () => {
    expect(convertNepaliDigit(34)).toBe('३४')
    expect(convertNepaliDigit('12')).toBe('१२')
  })
})

describe('addHours', () => {
  it('adds whole days from festival start offsets', () => {
    expect(addHours('2026-10-11 00:00:00', 0)).toBe('2026-10-11 00:00:00')
    expect(addHours('2026-10-11 00:00:00', 6 * 24)).toBe('2026-10-17 00:00:00')
    expect(addHours('2026-10-11 00:00:00', 10 * 24)).toBe('2026-10-21 00:00:00')
  })
})

describe('findDaysUntil', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('shows whole days until a future date', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-09-07T12:00:00'))
    expect(findDaysUntil('2026-10-11 00:00:00')).toBe('in 34 days')
    expect(findDaysUntil('2026-10-21 00:00:00')).toBe('in 44 days')
  })

  it('uses singular for one day away', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-10-20T08:00:00'))
    expect(findDaysUntil('2026-10-21 00:00:00')).toBe('in 1 day')
  })

  it('returns today on the same calendar day', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-10-21T18:30:00'))
    expect(findDaysUntil('2026-10-21 00:00:00')).toBe('today')
  })

  it('returns past day strings after the date', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-10-22T10:00:00'))
    expect(findDaysUntil('2026-10-21 00:00:00')).toBe('1 day ago')
    jest.setSystemTime(new Date('2026-10-25T10:00:00'))
    expect(findDaysUntil('2026-10-21 00:00:00')).toBe('4 days ago')
  })

  it('keeps findReadableTime aligned with findDaysUntil', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-09-07T12:00:00'))
    const date = '2026-10-11 00:00:00'
    expect(findReadableTime(date)).toBe(findDaysUntil(date))
    expect(findReadableTime(date)).not.toMatch(/month|hour|minute|second/i)
  })
})

describe('Dashain 2026 Important Dates offsets', () => {
  it('maps Hamro Patro day offsets to the correct calendar dates', () => {
    const start = '2026-10-11 00:00:00'
    const expected = [
      { day: 1, date: '2026-10-11' },
      { day: 7, date: '2026-10-17' },
      { day: 8, date: '2026-10-18' },
      { day: 10, date: '2026-10-20' },
      { day: 11, date: '2026-10-21' },
      { day: 12, date: '2026-10-22' },
      { day: 15, date: '2026-10-25' },
    ]
    expected.forEach(({ day, date }) => {
      const actual = addHours(start, (day - 1) * 24)
      expect(moment(actual).format('YYYY-MM-DD')).toBe(date)
    })
  })
})
