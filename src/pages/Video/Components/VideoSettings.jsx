import {
  SimpleVideoButton,
  VideoCategoryItem,
  VideoCategoryBlock,
  VideoList,
  VideoListItem,
  VideoSettingsStyled,
  VideoCategoryArrow,
} from '../Styles/VideoStyled.styled'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularVideo, fetchTrendingVideo, switchCategorySatus } from 'redux/videoSlice'
import arrowBottomLight from 'assets/icons/arrowBottomLight.svg'
import arrowBottomBlack from 'assets/icons/arrowBottomBlack.svg'
import { VideoCategoriesForm } from './VideoCategoriesForm'

export const VideoSettings = ({ onFlip }) => {
  const [height, setHeight] = useState('83vh')
  const dispatch = useDispatch()
  const isCategoryActive = useSelector(state => state.videoSlice.isCategoryActive)
  const style = useSelector(state => state.general)

  const listenToScroll = () => {
    const winScroll = window.innerHeight + window.scrollY
    winScroll >= document.body.scrollHeight - 100 ? setHeight('70vh') : setHeight('83vh')
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  const searchTrendingVideo = () => {
    dispatch(fetchTrendingVideo())
  }
  const searchPopularVideos = () => {
    dispatch(fetchPopularVideo())
  }

  const handleCategoryMenu = () => {
    dispatch(switchCategorySatus())
  }

  return (
    <VideoSettingsStyled height={height} onFlip={onFlip}>
      <VideoList>
        <VideoListItem>
          <SimpleVideoButton onClick={handleCategoryMenu}>
            Category
            <VideoCategoryArrow
              src={style.darkStyle ? arrowBottomLight : arrowBottomBlack}
              isCategoryActive={isCategoryActive}
            />
          </SimpleVideoButton>
          <VideoCategoryBlock isCategoryActive={isCategoryActive}>
            <VideoCategoriesForm />
          </VideoCategoryBlock>
        </VideoListItem>
        <VideoListItem>
          <SimpleVideoButton onClick={searchPopularVideos}>Popular</SimpleVideoButton>
        </VideoListItem>
        <VideoListItem>
          <SimpleVideoButton onClick={searchTrendingVideo}>Trending</SimpleVideoButton>
        </VideoListItem>
      </VideoList>
    </VideoSettingsStyled>
  )
}
