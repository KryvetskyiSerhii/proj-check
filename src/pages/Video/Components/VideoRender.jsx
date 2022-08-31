import {
  VideoItemContainer,
  VideoItem,
  VideoTextBlock,
  VideoText,
  VideoItemFilmScreen,
  VideoControls,
  VideoBookmarkButton,
  VideoBookmarks,
  VideoBookmarkItem,
  VideoBookmarkItemButton,
} from '../Styles/VideoStyled.styled'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useRef } from 'react'

export const VideoRender = ({ source, title, length, count, toHHMMS }) => {
  const [filmScreen, setFilmScreen] = useState(false)
  const [bookmarks, setBookmarks] = useState([])
  const [pause, setPause] = useState(false)
  const canvasRef = useRef(null)
  const playerRef = useRef(null)

  const handleFormatTime = seconds => {
    if (isNaN(seconds)) return '00:00'
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = date.getUTCSeconds().toString().padStart(2, '0')
    if (hh) return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`
    return `${mm}:${ss}`
  }

  const handleSeekTheTime = time => {
    playerRef.current.seekTo(time)
    playerRef.current.getInternalPlayer().playVideo()
  }

  const handleAddBookmark = () => {
    const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : '00:00'
    const elapsedTime = handleFormatTime(currentTime)
    // const canvas = canvasRef.current
    // canvas.width = 160
    // canvas.height = 90
    // const ctx = canvas.getContext('2d')
    // ctx.drawImage(playerRef.current.getInternalPlayer(), 0, 0, canvas.width, canvas.height)
    // const imageUrl = canvas.toDataURL()
    // canvas.width = 0
    // canvas.height = 0
    setBookmarks([...bookmarks, { time: currentTime, display: elapsedTime }])
    console.log(bookmarks)
  }
  const getTime = () => {
    console.log(playerRef.current.getCurrentTime())
    console.log('clicked')
    console.log(playerRef.current.getInternalPlayer())
    playerRef.current.getInternalPlayer().stopVideo()
  }

  return (
    <VideoItemContainer filmScreen={filmScreen}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${source}&modestbranding=1`}
        controls
        height='115px'
        width='200px'
        ref={playerRef}
        config={{
          file: {
            attributes: {
              crossorigin: 'anonymous',
            },
          },
        }}
      />

      <VideoTextBlock filmScreen={filmScreen}>
        <VideoText>{title} </VideoText>
      </VideoTextBlock>
      <VideoTextBlock filmScreen={filmScreen}>
        {length && <VideoText>{toHHMMS(length)}</VideoText>}
        <VideoText>{count} views</VideoText>
      </VideoTextBlock>
      <VideoBookmarkButton onClick={handleAddBookmark}>Bookmark</VideoBookmarkButton>
      {bookmarks.length > 0 && (
        <VideoBookmarks>
          {bookmarks.map(el => (
            <VideoBookmarkItem
              onClick={() => {
                handleSeekTheTime(el.time)
              }}
            >
              <VideoBookmarkItemButton>{el.display}</VideoBookmarkItemButton>
            </VideoBookmarkItem>
          ))}
        </VideoBookmarks>
      )}

      {/* <canvas ref={canvasRef}></canvas> */}
    </VideoItemContainer>
  )
}
