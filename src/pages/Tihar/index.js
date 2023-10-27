import React, { useEffect, useState } from 'react';

import ReactTypingEffect from 'react-typing-effect';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Footer from '../../Components/Footer';
import Lights from '../../Components/Lights';
import Header from '../../Components/Header';
import CountDown from '../../Components/CountDown';
import Player from '../../Components/Player';
import ImportantDates from '../../Components/ImportantDates';
import { TiharMessage } from '../../constants';

import './style.css';

const Tihar = () => {
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
    <>
      <Box
        sx={{
          pt: '1%',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Lights />
      </Box>
      <Box
        sx={{ flexGrow: 1, pt: '5%', pr: '2%', pl: '2%' }}
        className="bg-image-tihar"
      >
        <Grid container spacing={2}>
          <Header>
            {!loading && <CountDown />}
            {!msgLoading && (
              <div className="greeting-msg">
                <Player />
                <ReactTypingEffect
                  text={[TiharMessage.nepEffect, TiharMessage.engEffect]}
                />
              </div>
            )}
          </Header>
          <Grid item md={3} xs={12}>
            {!loading && <ImportantDates />}
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};

export default Tihar;
