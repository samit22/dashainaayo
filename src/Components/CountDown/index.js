import React from 'react'
import { Box, Typography } from '@mui/material'
import { useCountdown } from '../../hooks/useCountdown'
import { addHours, convertNepaliDigit } from '../../utils'
import { DashainDates, TiharDates, datFS } from '../../constants'
import { styled } from '@mui/material/styles'

const NepaliCountdown = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}))

const CountDown = ({ isDashain }) => {
  const sDate = isDashain
    ? addHours(DashainDates.start_date, 6 * 24)
    : addHours(TiharDates.start_date)
  let timeLeft = useCountdown(sDate)
  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }
    timerComponents.push(<span key={interval}>{`${timeLeft[interval]} ${interval} `}</span>)
  })

  return (
    <React.Fragment>
      {timerComponents.length ? (
        <>
          <Typography
            sx={{
              fontSize: '25px',
            }}
          >
            {timerComponents}
          </Typography>
          <Box
            display={'flex'}
            justifyContent="center"
            sx={{
              mt: '2%',
            }}
          >
            <NepaliCountdown fontSize={datFS}>
              {convertNepaliDigit(timeLeft.days)} दिन
            </NepaliCountdown>
            <NepaliCountdown fontSize={datFS}>
              {convertNepaliDigit(timeLeft.hours)} घण्टा
            </NepaliCountdown>
            <NepaliCountdown fontSize={datFS}>
              {convertNepaliDigit(timeLeft.minutes)} मिनेट
            </NepaliCountdown>
            <NepaliCountdown fontSize={datFS}>
              {convertNepaliDigit(timeLeft.seconds)} सेकेन्ड
            </NepaliCountdown>
          </Box>
        </>
      ) : (
        <span>{isDashain ? 'Dashain' : 'Tihar'} is here!!</span>
      )}
    </React.Fragment>
  )
}

export default CountDown
