import ReactHowler from 'react-howler'
import raf from 'raf'
import { useRef, useState } from 'react'

import * as Icons from './icons'

// TODO: remove mock data, add shuffle, loop functionality and error handler

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

const PlayerButton = ({
  children,
  onClick,
  active = false,
  xsHidden = false,
}) => (
  <button
    className={`p-1 h-4 w-4 hover:bg-[#e5edf5] m-1 rounded-full ${
      xsHidden ? 'hidden sm:block' : ''
    } ${active ? 'text-primary' : 'text-[#51596D]'}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const PlayerRange = ({
  label,
  output,
  name,
  max,
  min,
  value,
  onChange,
  step,
  className,
}) => {
  const getRangeStyle = (val, max) => ({
    backgroundSize: `${
      (val > 0 ? (Number(val) / Number(max)) * 100 : 0) + '%'
    } 4px`,
    backgroundPosition: 'left center',
    backgroundRepeat: `no-repeat`,
  })
  return (
    <label className={`mx-1 items-center text-neutral text-xs ${className}`}>
      {label}
      <input
        className="mx-1 range range-xs range-primary bg-gradient-to-r from-primary to-primary"
        type="range"
        min={min}
        name={name}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        style={getRangeStyle(value, max)}
      />
      <output name="duration" for="seek">
        {output}
      </output>
    </label>
  )
}

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
  const [trackNumber, setTrackNumber] = useState(0)
  const [volume, setVolume] = useState(0.75)
  const [shuffle, setShuffle] = useState(false)

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
  const handleSeek = (e) => {
    const seek = e.target.value
    playerRef?.current?.seek(seek)
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
    const seek = playerRef?.current?.seek()
    setSeek(seek)
    if (!playing) {
      _raf = raf(renderSeekPos)
    }
  }

  const clearRAF = () => raf.cancel(_raf)

  const handleShuffle = () => setShuffle(!shuffle)
  const handleLoop = () => setLoop(!loop)

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
      <div className="flex items-center bg-base-100 w-full px-4 h-[80px] mx-auto border-t border-base-300">
        {loaded && (
          <div className="flex items-center w-full max-w-[1600px] mx-auto">
            <div className="flex items-center lg:grow lg:min-w-[300px]">
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
              <PlayerButton onClick={handleShuffle} xsHidden active={shuffle}>
                <Icons.Shuffle />
              </PlayerButton>
              <PlayerButton onClick={handleBack}>
                <Icons.Rewind />
              </PlayerButton>
              <PlayPauseButton
                playing={playing}
                onPause={handleOnPause}
                onPlay={handleOnPlay}
              />
              <PlayerButton onClick={handleNext}>
                <Icons.Rewind className="rotate-180" />
              </PlayerButton>
              <PlayerButton onClick={handleLoop} xsHidden active={loop}>
                <Icons.Replay />
              </PlayerButton>
            </div>
            <PlayerRange
              className="grow mx-1 hidden md:flex"
              label={
                <span className="block w-[50px]">
                  {seek !== undefined ? convertToMinutes(seek) : '0:00'}
                </span>
              }
              min="0"
              name="seek"
              max={duration}
              step="0.1"
              value={seek}
              onChange={handleSeek}
              output={duration ? convertToMinutes(duration) : '0:00'}
            />
            <PlayerRange
              className="hidden lg:flex"
              label={<Icons.Volume />}
              min="0"
              name="volume"
              max={1}
              step="0.25"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Player
