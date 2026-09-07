import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { DashainDates, TiharDates } from '../../constants'

const linkSx = isActive => ({
  textTransform: 'none',
  fontWeight: isActive ? 700 : 500,
  fontSize: '0.95rem',
  color: isActive ? '#d31121' : '#333',
  borderBottom: isActive ? '2px solid #d31121' : '2px solid transparent',
  borderRadius: 0,
  minWidth: 'auto',
  px: 1.25,
  py: 0.5,
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
})

/**
 * Festival switcher fixed top-right. While Dashain is still ongoing, expose a
 * Tihar link so /tihar is reachable before the home route auto-switches.
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
        p: 0.5,
        borderRadius: 1,
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
