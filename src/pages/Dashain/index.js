import React, { useEffect, useState } from 'react';

import ReactTypingEffect from 'react-typing-effect';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Kite from '../../Components/Kite';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import CountDown from '../../Components/CountDown';
import Player from '../../Components/Player';
import ImportantDates from '../../Components/ImportantDates';
import { DashainMessages } from '../../constants';

import './style.css';

const Dashain = () => {
  const [loading, setLoading] = useState(true);
  const [msgLoading, setMsgLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    const msgLoadingTimer = setTimeout(() => {
      setMsgLoading(false);
    }, 8000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(msgLoadingTimer);
    };
  }, []);

  return (
    <Box
      sx={{ flexGrow: 1, pt: '5%', pr: '2%', pl: '2%' }}
      className="bg-image-dashain"
    >
      <Grid container spacing={2}>
        <Header isDashain>
          {!loading && (
            <>
              <Kite />
              <CountDown isDashain />
            </>
          )}
          {!msgLoading && (
            <div className="greeting-msg">
              <Player isDashain />
              <ReactTypingEffect
                text={[DashainMessages.nepEffect, DashainMessages.engEffect]}
              />
            </div>
          )}
        </Header>
        <Grid item md={3} xs={12}>
          {!loading && <ImportantDates isDashain />}
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Dashain;
