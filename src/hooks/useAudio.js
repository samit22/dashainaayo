// import { useEffect, useState } from 'react';

// export const useAudio = (url) => {
//   const [audio] = useState(() => {
//     const audioObj = new Audio(url);
//     audioObj.autoplay = true;
//     audioObj.volume = 0.3;
//     audioObj.loop = true;
//     return audioObj;
//   });

//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying((prevPlaying) => !prevPlaying);

//   useEffect(() => {
//     const playAudio = async () => {
//       try {
//         await audio.play();
//       } catch (e) {
//         console.error(e);
//         if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
//           toggle();
//         }
//       }
//     };

//     if (playing) {
//       playAudio();
//     } else {
//       audio.pause();
//     }
//   }, [playing, audio]);

//   useEffect(() => {
//     const handleAudioEnded = () => setPlaying(false);
//     audio.addEventListener('ended', handleAudioEnded);

//     return () => {
//       audio.removeEventListener('ended', handleAudioEnded);
//     };
//   }, [audio]);

//   return [playing, toggle];
// };

import { useEffect, useState, useCallback } from 'react'

export const useAudio = url => {
  const [audio] = useState(() => {
    const audioObj = new Audio(url)
    audioObj.autoplay = true
    audioObj.volume = 0.3
    audioObj.loop = true
    return audioObj
  })

  const [playing, setPlaying] = useState(false)

  const toggle = useCallback(() => {
    setPlaying(prevPlaying => !prevPlaying)
  }, [])

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audio.play()
      } catch (e) {
        console.error(e)
        if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
          toggle()
        }
      }
    }

    if (playing) {
      playAudio()
    } else {
      audio.pause()
    }
  }, [playing, audio, toggle])

  useEffect(() => {
    const handleAudioEnded = () => setPlaying(false)
    audio.addEventListener('ended', handleAudioEnded)

    return () => {
      audio.removeEventListener('ended', handleAudioEnded)
    }
  }, [audio])

  return [playing, toggle]
}
