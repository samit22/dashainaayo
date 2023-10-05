import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'

import ReactTypingEffect from 'react-typing-effect'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'

import { convertNepaliDigit } from '../../utils'
import './style.css'

import dhun from '../../music/dashain_dhun.mp3'

import { Countdown } from '../Countdown'

import IconButton from '@mui/material/IconButton'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded'
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded'

import Footer from '../Footer/footer'
import KiteFlying from '../Kite'
import DashainDetails from './importantDates'

import { DashainDates, addHours } from '../../utils'
import { useAudio } from '../../hooks/useAudio'

const NepaliCountdown = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}))

const datFS = {
  md: '55px',
  sm: '30px',
  xs: '25px',
}

const DashainCountdown = () => {
  const fulpati = addHours(DashainDates.start_date, 6 * 24)
  let timeLeft = Countdown(fulpati)
  let year = new Date().getFullYear()

  const [loading, setLoading] = useState(true)
  const [msgLoading, setMsgLoading] = useState(true)

  const [playing, toggle] = useAudio(dhun)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 7000)

    const msgLoadingTimer = setTimeout(() => {
      setMsgLoading(false)
      toggle()
    }, 8000)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(msgLoadingTimer)
    }
  }, [])

  const timerComponents = []
  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }
    timerComponents.push(<span key={interval}>{`${timeLeft[interval]} ${interval} `}</span>)
  })

  return (
    <Box sx={{ flexGrow: 1, pt: '5%', pr: '2%', pl: '2%' }} className="bg-image">
      <Grid container spacing={2}>
        <Grid item md={1} xs={12}></Grid>
        <Grid
          item
          md={8}
          xs={12}
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            component={'div'}
            sx={{
              textAlign: 'center',
              fontSize: '55px',
              fontWeight: 'bold',
            }}
          >
            <ReactTypingEffect text={['बडा दशैँ २०८०', `Dashain ${year}`]} />
          </Typography>
          {loading ? (
            ''
          ) : (
            <>
              <KiteFlying />
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
                <span>Dashain is here!!</span>
              )}
            </>
          )}
          {msgLoading ? (
            ''
          ) : (
            <div className="greeting-msg">
              <div className="play-pause">
                <Tooltip
                  TransitionComponent={Zoom}
                  open={!playing}
                  arrow
                  enterDelay={3000}
                  title={
                    <Typography fontSize={30} sx={{ backgroundColor: 'secondary' }}>
                      Click me to Play!
                    </Typography>
                  }
                  placement="bottom-end"
                  sx={{
                    fontSize: '20px',
                  }}
                >
                  <IconButton
                    aria-label="controller"
                    size="large"
                    color="success"
                    sx={{
                      height: '2em',
                      width: '2em',
                      fontSize: '40px',
                    }}
                    onClick={e => {
                      toggle()
                    }}
                  >
                    {playing ? (
                      <PauseCircleOutlineRoundedIcon
                        color="success"
                        sx={{ fontSize: 100, color: 'succces' }}
                      />
                    ) : (
                      <PlayCircleOutlineRoundedIcon
                        color="error"
                        sx={{ fontSize: 100, color: 'danger' }}
                      />
                    )}
                  </IconButton>
                </Tooltip>
              </div>
              <ReactTypingEffect
                text={[
                  'विजया दशमी एवम दिपावली २०८०को हार्दिक मंङगलमय शुभकामना!!!',
                  `Wish you a very Happy Dashain and Tihar!!!`,
                ]}
              />
            </div>
          )}
        </Grid>
        <Grid item md={3} xs={12}>
          {loading ? (
            <></>
          ) : (
            <Box
              sx={{
                pt: '5%',
              }}
            >
              <Typography
                sx={{
                  fontSize: '20px',
                  textAlign: 'center',
                }}
              >
                Important Dates
              </Typography>
              <DashainDetails />
            </Box>
          )}
        </Grid>
      </Grid>
      <Footer />
    </Box>
  )
}

export default DashainCountdown
