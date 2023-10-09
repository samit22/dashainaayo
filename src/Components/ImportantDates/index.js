import React from 'react'
import { DashainDates, TiharDates, columns } from '../../constants'
import { addHours, findReadableTime } from '../../utils'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const ImportantDates = ({ isDashain }) => {
  const dates = isDashain ? DashainDates : TiharDates
  const startDate = dates.start_date
  const rows = dates.dates.map((d, i) => {
    const day = addHours(startDate, (d.day - 1) * 24)
    return {
      id: i + 1,
      day: d.day,
      nep_label: d.nep_label,
      eng_label: d.eng_label,
      label: `${d.nep_label}(${d.eng_label})`,
      in: `${findReadableTime(day)}`,
    }
  })
  return (
    <React.Fragment>
      <Box
        sx={{
          pt: '5%',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          Important Dates
        </Typography>
      </Box>
      <Box
        sx={{
          height: '380px',
          width: '100%',
          '& .super-app-theme--odd': {
            backgroundColor: '#ea80808c',
            color: '#1a3e72',
            fontWeight: '600',
          },
          '& .super-app-theme--even': {
            backgroundColor: 'rgba(157, 255, 118, 0.49)',
            color: '#1a3e72',
            fontWeight: '600',
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnSelector
          hideFooter
          hideFooterSelectedRowCount
          getRowClassName={params => {
            const rd = params.id % 2 === 0 ? 'even' : 'odd'
            return `super-app-theme--${rd}`
          }}
          headerHeight={0}
        />
      </Box>
    </React.Fragment>
  )
}

export default ImportantDates
