import {
  VideoItemContainer,
  VideoItem,
  VideoTextBlock,
  VideoText,
  VideoItemFilmScreen,
} from '../Styles/VideoStyled.styled'
import enlargeLight from 'assets/icons/new/white/small/enlargeLight.svg'
import { useState } from 'react'

export const VideoRender = ({ source, title, length, count, toHHMMS }) => {
  const [filmScreen, setFilmScreen] = useState(false)
  const handleChangeTheScreenSize = () => {
    setFilmScreen(!filmScreen)
  }

  return (
    <VideoItemContainer filmScreen={filmScreen}>
      <VideoItemFilmScreen
        src={enlargeLight}
        onClick={handleChangeTheScreenSize}
        filmScreen={filmScreen}
      />
      <VideoItem
        filmScreen={filmScreen}
        src={`https://www.youtube.com/embed/${source}`}
        title={title}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
      ></VideoItem>
      <VideoTextBlock filmScreen={filmScreen}>
        <VideoText>{title} </VideoText>
      </VideoTextBlock>
      <VideoTextBlock filmScreen={filmScreen}>
        {length && <VideoText>{toHHMMS(length)}</VideoText>}
        <VideoText>{count} views</VideoText>
      </VideoTextBlock>
    </VideoItemContainer>
  )
}
