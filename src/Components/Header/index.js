import React from 'react'
import { Grid, Typography } from '@mui/material'
import ReactTypingEffect from 'react-typing-effect'
import  { NepaliYear } from '../../constants/dates'

const Header = ({ isDashain, children }) => {
  const year = new Date().getFullYear()
  const greetingText = isDashain
    ? [`बडा दशैँ ${NepaliYear}`, `Dashain ${year}`]
    : [`तिहार ${NepaliYear}`, `Tihar ${year}`]

  return (
    <React.Fragment>
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
          <ReactTypingEffect text={greetingText} />
        </Typography>
        {children}
      </Grid>
    </React.Fragment>
  )
}

export default Header
