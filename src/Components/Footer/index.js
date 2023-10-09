import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import TwitterIcon from '@mui/icons-material/Twitter'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

export default function Footer() {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background: '#e59c96' }}>
      <Toolbar>
        <Box
          sx={{
            fontSize: '25px',
          }}
        >
          {'Wishing you and your family a very'}
          <strong> Happy Bijaya Dashami </strong> and
          <strong> Deepawali.</strong>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="secondary"
          aria-label="open drawer"
          href="https://twitter.com/samit_gh?ref_src=twsrc%5Etfw"
          target="_blank"
        >
          <TwitterIcon /> @samit_gh
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
