import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { DashainDates, TiharDates } from '../../constants'

const linkSx = isActive => ({
  textTransform: 'none',
  fontWeight: isActive ? 700 : 500,
  fontSize: '0.95rem',
  color: isActive ? '#d31121' : '#222',
  borderBottom: isActive ? '2px solid #d31121' : '2px solid transparent',
  borderRadius: 0,
  minWidth: 'auto',
  px: 1.25,
  py: 0.5,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent',
    opacity: 0.85,
  },
})

/**
 * Festival switcher fixed top-right. While Dashain is still ongoing, expose a
 * Tihar link so /tihar is readable before the home route auto-switches.
 */
const FestivalNav = () => {
  const location = useLocation()
  const today = new Date()
  const hasDashainEnded = today > new Date(DashainDates.end_date)
  const hasTiharEnded = today > new Date(TiharDates.end_date)

  const showTiharLink = !hasDashainEnded && !hasTiharEnded
  const showDashainLink = !hasDashainEnded || (hasDashainEnded && !hasTiharEnded)

  if (!showTiharLink && !showDashainLink) {
    return null
  }

  const path = location.pathname
  const onDashain = path === '/' || path === '/dashain'
  const onTihar = path === '/tihar'

  return (
    <Box
      component="nav"
      aria-label="Festival navigation"
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1300,
        display: 'flex',
        gap: 1,
        p: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      {showDashainLink && (
        <Button
          component={Link}
          to="/dashain"
          sx={linkSx(onDashain && !onTihar)}
        >
          Dashain · दशैँ
        </Button>
      )}
      {showTiharLink && (
        <Button component={Link} to="/tihar" sx={linkSx(onTihar)}>
          Tihar · तिहार
        </Button>
      )}
    </Box>
  )
}

export default FestivalNav
