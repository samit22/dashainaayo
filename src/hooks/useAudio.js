import { useCallback, useEffect, useState } from 'react'

export const useAudio = url => {
  const [audio] = useState(new Audio(url))
  audio.autoplay = true
  audio.volume = 0.3
  audio.loop = true
  const [playing, setPlaying] = useState(false)

  const toggle = useCallback(() => {
    setPlaying(!playing)
  }, [playing])

  useEffect(() => {
    if (playing) {
      var playedPromise = audio.play()
      if (playedPromise) {
        playedPromise
          .catch(e => {
            console.log(e)
            if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
              toggle()
            }
          })
          .then(() => {})
      }
    } else {
      audio.pause()
    }
  }, [playing, audio, toggle])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [audio])

  return [playing, toggle]
}
