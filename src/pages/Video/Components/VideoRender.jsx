import {
  VideoItemContainer,
  VideoTextBlock,
  VideoText,
  VideoBookmarkButton,
  VideoBookmarks,
  VideoBookmarkItem,
  VideoBookmarkItemButton,
} from '../Styles/VideoStyled.styled'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useRef } from 'react'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'

export const VideoRender = ({ source, title, length, count, toHHMMS }) => {
  const [filmScreen, setFilmScreen] = useState(false)
  const [bookmarks, setBookmarks] = useState([])
  const playerRef = useRef(null)

  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: source,
        provider: 'youtube',
      },
    ],
  }

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
    setBookmarks([...bookmarks, { time: currentTime, display: elapsedTime }])
    console.log(bookmarks)
  }

  return (
    <VideoItemContainer filmScreen={filmScreen}>
      {/* <Plyr source={videoSrc} /> */}

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
    </VideoItemContainer>
  )
}
