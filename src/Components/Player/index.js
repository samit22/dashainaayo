import React from 'react'

import { IconButton, Tooltip, Typography, Zoom } from '@mui/material'
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded'
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded'

import { useAudio } from '../../hooks/useAudio'

import './index.css'
import dashainDhun from '../../music/dashain_dhun.mp3'
import tiharDhun from '../../music/tihar_dhun.mp3'

const Player = ({ isDashain }) => {
  const [playing, toggle] = useAudio(isDashain ? dashainDhun : tiharDhun)

  return (
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
          onClick={_ => {
            toggle()
          }}
        >
          {playing ? (
            <PauseCircleOutlineRoundedIcon
              color="success"
              sx={{ fontSize: 100, color: 'succces' }}
            />
          ) : (
            <PlayCircleOutlineRoundedIcon color="error" sx={{ fontSize: 100, color: 'danger' }} />
          )}
        </IconButton>
      </Tooltip>
    </div>
  )
}

export default Player
