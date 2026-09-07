import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { DashainDates, TiharDates } from '../../constants'

const linkSx = isActive => ({
  textTransform: 'none',
  fontWeight: isActive ? 700 : 500,
  fontSize: '1.1rem',
  color: isActive ? '#d31121' : '#333',
  borderBottom: isActive ? '2px solid #d31121' : '2px solid transparent',
  borderRadius: 0,
  minWidth: 'auto',
  px: 1.5,
})

/**
 * Festival switcher. While Dashain is still ongoing, expose a Tihar link
 * so /tihar is reachable before the home route auto-switches.
 */
const FestivalNav = () => {
  const location = useLocation()
  const today = new Date()
  const hasDashainEnded = today > new Date(DashainDates.end_date)
  const hasTiharEnded = today > new Date(TiharDates.end_date)

  // Nav for Tihar while Dashain dates are not crossed
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
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        mb: 2,
        mt: 1,
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
