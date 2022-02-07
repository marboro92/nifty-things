import ReactHowler from 'react-howler'
import raf from 'raf'
import { useRef, useState } from 'react'

import * as Icons from './icons'
import { Label, LabelDescription } from '../typography'

const MOCK_TRACKLIST = [
  {
    title: 'Alien Breath',
    artist: 'google',
    coverImage: 'http://placeimg.com/100/100/arch/grayscale',
    file: 'https://actions.google.com/sounds/v1/science_fiction/alien_breath.ogg',
  },
  {
    title: 'Windchime Drone',
    artist: 'google',
    coverImage: 'http://placeimg.com/100/100/arch/grayscale',
    file: 'https://actions.google.com/sounds/v1/science_fiction/windchime_drone.ogg',
  },
  {
    title: 'Alien Song',
    artist: 'google',
    coverImage: 'http://placeimg.com/100/100/arch/grayscale',
    file: 'https://actions.google.com/sounds/v1/science_fiction/alien_song.ogg',
  },
]

const convertToMinutes = (seconds) => {
  const remainingSeconds = (seconds % 60).toFixed(0)
  const formattedSeconds =
    remainingSeconds > 9 ? remainingSeconds : '0' + remainingSeconds
  const minutes = (seconds / 60).toFixed(0)
  return `${minutes}:${formattedSeconds}`
}

const PlayerButton = ({ children, onClick }) => (
  <button
    className="p-1 h-4 w-4 hover:bg-base-300 m-1 rounded-full"
    onClick={onClick}
  >
    {children}
  </button>
)

const PlayPauseButton = ({ playing, onPlay, onPause }) => (
  <button
    className="p-1 bg-primary m-1 rounded-full hover:scale-110 transition-all"
    onClick={playing ? onPause : onPlay}
  >
    {playing ? <Icons.Pause /> : <Icons.Play />}
  </button>
)

const Player = () => {
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [duration, setDuration] = useState()
  const [loop, setLoop] = useState(false)
  const [seek, setSeek] = useState()
  const [isSeeking, setIsSeeking] = useState(false)
  const [trackNumber, setTrackNumber] = useState(0)
  const [volume, setVolume] = useState(1)
  const [playError, setPlayError] = useState(false)

  const playerRef = useRef(null)
  let _raf

  const onPlayError = () => setPlayError(true)

  const handleOnLoad = () => {
    setLoaded(true)
    setDuration(playerRef.current.duration())
    renderSeekPos()
  }
  const handleOnPlay = () => {
    setPlaying(true, () => renderSeekPos())
  }
  const handleOnPause = () => {
    setPlaying(false)
  }
  const handleOnEnd = () => {
    setPlaying(false)
    clearRAF()
  }
  const handleLoopToggle = () => {
    setLoop(!loop)
  }
  const handleMuteToggle = () => {
    setMute(!mute)
  }
  const handleSeek = (e) => {
    const seek = e.target.value
    playerRef.current.seek(seek)
    setSeek(seek)
  }

  const handleNext = () => {
    if (trackNumber < MOCK_TRACKLIST.length + 1) {
      setTrackNumber(trackNumber + 1)
    } else {
      setTrackNumber(0)
    }
  }
  const handleBack = () => {
    if (trackNumber > 0) {
      setTrackNumber(trackNumber - 1)
    } else {
      setTrackNumber(MOCK_TRACKLIST.length - 1)
    }
  }

  const renderSeekPos = () => {
    const seek = playerRef.current.seek()
    setSeek(seek)
    if (!playing) {
      _raf = raf(renderSeekPos)
    }
  }

  const clearRAF = () => raf.cancel(_raf)

  const handleShuffle = () => {}
  const handleRepeat = () => {}
  return (
    <>
      <ReactHowler
        html5={true}
        src={MOCK_TRACKLIST[trackNumber].file}
        playing={playing}
        ref={playerRef}
        onLoad={handleOnLoad}
        onPlay={handleOnPlay}
        onEnd={handleOnEnd}
        loop={loop}
        volume={volume}
      />
      <div className="flex items-center bg-base-100 w-full px-4 h-[80px] border-t border-base-300">
        <div className="flex items-center min-w-[300px]">
          <img
            className="h-[48px] w-48px rounded"
            src={MOCK_TRACKLIST[trackNumber].coverImage}
          />
          <div className="px-1">
            <p className="font-semibold leading-tight">
              {MOCK_TRACKLIST[trackNumber].title}
            </p>
            <p className="text-neutral text-xs leading-tight">
              {MOCK_TRACKLIST[trackNumber].artist}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          {/* <PlayerButton onClick={handleBack}>
            <Icons.Shuffle />
          </PlayerButton> */}
          <PlayerButton onClick={handleBack}>
            <Icons.Rewind />
          </PlayerButton>
          <PlayPauseButton
            playing={playing}
            onPause={handleOnPause}
            onPlay={handleOnPlay}
          />
          <PlayerButton onClick={handleBack}>
            <Icons.Rewind className="rotate-180" onClick={handleNext} />
          </PlayerButton>
          {/* <PlayerButton onClick={handleBack}>
            <Icons.Replay />
          </PlayerButton> */}
        </div>
        <label className="flex mx-1 items-center">
          <span className="block w-[50px]">
            {seek !== undefined ? convertToMinutes(seek) : '0:00'}
          </span>
          <input
            className="mx-1 range range-xs range-primary"
            type="range"
            min="0"
            name="seek"
            max={duration}
            step="0.1"
            value={seek}
            onChange={handleSeek}
          />
          <output name="duration" for="seek">
            {duration ? convertToMinutes(duration) : '0:00'}
          </output>
        </label>
        <label className="flex mx-1 items-center">
          Volume
          <input
            className="range range-xs range-primary"
            type="range"
            min="0"
            max={1}
            step="0.25"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </label>
      </div>
    </>
  )
}

export default Player
