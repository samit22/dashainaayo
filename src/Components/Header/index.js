import React from 'react'
import { Grid, Typography } from '@mui/material'
import ReactTypingEffect from 'react-typing-effect'

const Header = ({ isDashain, children }) => {
  const year = new Date().getFullYear()
  const nepaliYear = '२०८१'
  const greetingText = isDashain
    ? [`बडा दशैँ ${nepaliYear}`, `Dashain ${year}`]
    : [`तिहार ${nepaliYear}`, `Tihar ${year}`]

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
