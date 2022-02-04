import ReactHowler from 'react-howler'

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

const PlayerButton = ({ children, onClick }) => (
  <button
    className="p-1 h-4 w-4 hover:bg-base-300 m-1 rounded-full"
    onClick={onClick}
  >
    {children}
  </button>
)

const PlayPauseButton = ({ playing, onClick }) => (
  <button
    className="p-1 bg-primary m-1 rounded-full hover:scale-110 transition-all"
    onClick={onClick}
  >
    {playing ? <Icons.Pause /> : <Icons.Play />}
  </button>
)

const Player = () => {
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [duration, setDuration] = useState()
  const [loop, setLoop] = useState(false)
  const [seek, setSeek] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)
  const [trackNumber, setTrackNumber] = useState(0)
  const [volume, setVolume] = useState(1)
  const player = useRef(null)

  const handlePlayPause = () => setPlaying(!playing)
  const handleOnLoad = () => {
    setLoaded(true)
    setDuration(player.duration)
  }
  const handleOnPlay = () => {
    setPlaying(true)
    // renderSeekPos()
  }
  const handleOnEnd = () => {
    setPlaying(false)
    setDuration(player.duration)
  }
  const handleLoopToggle = () => {
    setLoop(false)
  }
  const handleMouseDownSeek = () => {
    setIsSeeking(true)
  }
  const handleMouseUpSeek = (e) => {
    setIsSeeking(false)

    player.seek(e.target.value)
  }

  const handleSeekingChange = (e) => {
    setSeek(parseFloat(e.target.value))
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
    if (!isSeeking) {
      setSeek(player.seek())
    }
    if (playing) {
      // this._raf = raf(this.renderSeekPos)
    }
  }
  const handleShuffle = () => {}
  const handleRepeat = () => {}
  return (
    <>
      <ReactHowler
        src={MOCK_TRACKLIST[trackNumber].file}
        playing={playing}
        ref={player}
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
          <PlayPauseButton playing={playing} onClick={handlePlayPause} />
          <PlayerButton onClick={handleBack}>
            <Icons.Rewind className="rotate-180" onClick={handleNext} />
          </PlayerButton>
          {/* <PlayerButton onClick={handleBack}>
            <Icons.Replay />
          </PlayerButton> */}
          {/* <div className="seek">
            <label>
              Seek:
              <span className="slider-container">
                <input
                  type="range"
                  min="0"
                  max={duration ? duration.toFixed(2) : 0}
                  step=".01"
                  value={seek}
                  onChange={handleSeekingChange}
                  onMouseDown={handleMouseDownSeek}
                  onMouseUp={handleMouseUpSeek}
                />
              </span>
            </label>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Player
