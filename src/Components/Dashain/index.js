import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import ReactTypingEffect from 'react-typing-effect';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { convertNepaliDigit } from '../../utils';
import './style.css';

import dhun from '../../music/dashain_dhun.mp3';

import { Countdown } from '../Countdown';

import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';

import BottomAppBar from './footer';
import KiteFlying from '../Kite';
import DashainDetails from './importantDates';

import { DashainDates, addHours } from '../../utils';
import { fontSize } from '@mui/system';

const NepaliCountdown = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const datFS = {
  md: '55px',
  sm: '30px',
  xs: '25px',
};

const DashainCountdown = () => {
  const fulpati = addHours(DashainDates.start_date, 6 * 24);
  let timeLeft = Countdown(fulpati);
  let year = new Date().getFullYear();

  const [loading, setLoading] = useState(true);
  const [msgLoading, setMsgLoading] = useState(true);

  const useAudio = url => {
    const [audio] = useState(new Audio(url));
    audio.volume = 0.2;
    audio.loop = true;
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };
  const [playing, toggle] = useAudio(dhun);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsgLoading(false);
      toggle();
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const timerComponents = [];
  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}
      </span>,
    );
  });

  return (
    <Box
      sx={{ flexGrow: 1, pt: '10%', pr: '2%', pl: '2%' }}
      className="bg-image"
    >
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
            <ReactTypingEffect text={['बडा दशैँ २०७९', `Dashain ${year}`]} />
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
                <button onLoadedData={toggle} onClick={toggle}>
                  {playing ? (
                    <PauseCircleOutlineRoundedIcon
                      sx={{ fontSize: 50, color: 'info' }}
                    />
                  ) : (
                    <PlayCircleOutlineRoundedIcon
                      sx={{ fontSize: 50, color: 'info' }}
                    />
                  )}
                </button>
              </div>
              <ReactTypingEffect
                text={[
                  'विजया दशमी एवम दिपावली २०७९को हार्दिक मंङगलमय शुभकामना!!!',
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
      <BottomAppBar />
    </Box>
  );
};

export default DashainCountdown;
