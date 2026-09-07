import React from 'react'
import { render, screen } from '@testing-library/react'
import ImportantDates from './index'

jest.mock('@mui/x-data-grid', () => ({
  DataGrid: ({ rows }) => (
    <table data-testid="important-dates-grid">
      <tbody>
        {rows.map(row => (
          <tr key={row.id}>
            <td>{row.label}</td>
            <td>{row.in}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
}))

describe('ImportantDates', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('shows day-based countdown strings, not fuzzy fromNow months', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2026-09-07T12:00:00'))

    render(<ImportantDates isDashain />)

    expect(screen.getByText(/घटस्थापना/)).toBeInTheDocument()
    expect(screen.getByText('in 34 days')).toBeInTheDocument()
    expect(screen.getByText('in 44 days')).toBeInTheDocument()

    const cells = screen.getAllByRole('cell').map(c => c.textContent)
    const countdownCells = cells.filter(t => /days|today|ago/.test(t))
    expect(countdownCells.length).toBeGreaterThan(0)
    countdownCells.forEach(text => {
      expect(text).not.toMatch(/month|hour|minute|a few seconds/i)
    })
  })
})
