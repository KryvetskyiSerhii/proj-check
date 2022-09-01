import { useSelector } from 'react-redux'
import { useState } from 'react'
import { VideoStyled, VideoButton } from './Styles/VideoStyled.styled'
import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { Loading } from 'components/modules/Loading/Loading'
import { VideoHeader } from './Components/VideoHeader'
import { VimeoItemsBlock } from './Styles/vimeo/VimeoStyled.styled'
import { Footer } from 'components/modules/Footer/Footer'
import { VideoSettings } from './Components/VideoSettings'
import { VideoRender } from './Components/VideoRender'
import { useHHMMSS } from 'hooks/useHHMMSS'

export const VideoMain = () => {
  const videoList = useSelector(state => state.videoSlice.videos)
  const popularVideos = useSelector(state => state.videoSlice.popularVideos)
  const trendingVideos = useSelector(state => state.videoSlice.trendingVideos)
  const isLoading = useSelector(state => state.videoSlice.isLoading)
  const [resultsVisible, setResultsVisible] = useState(28)
  const onFlip = useSelector(state => state.general.flipMenu)

  const showMore = () => {
    setResultsVisible(resultsVisible + 20)
  }
  const toHHMMSS = useHHMMSS

  return (
    <VideoStyled>
      <VideoHeader />
      {isLoading ? (
        <Loading />
      ) : (
        <VimeoItemsBlock menu={onFlip}>
          {videoList &&
            videoList
              .slice(0, resultsVisible)
              .map(el => (
                <VideoRender
                  source={el.videoId}
                  title={el.title}
                  length={el.lengthSeconds}
                  count={el.viewCount}
                  toHHMMS={toHHMMSS}
                />
              ))}
          {popularVideos &&
            popularVideos
              .slice(0, resultsVisible)
              .map(el => (
                <VideoRender
                  source={el.videoId}
                  title={el.title}
                  length={el.lengthSeconds}
                  count={el.viewCount}
                  toHHMMS={toHHMMSS}
                />
              ))}
          {trendingVideos &&
            trendingVideos
              .slice(0, resultsVisible)
              .map(el => (
                <VideoRender
                  source={el.videoId}
                  title={el.title}
                  length={el.lengthSeconds}
                  count={el.viewCount}
                  toHHMMS={toHHMMSS}
                />
              ))}
        </VimeoItemsBlock>
      )}
      <SimpleBlock margin='20px'>
        <VideoButton type='button' onClick={showMore}>
          Show more results
        </VideoButton>
      </SimpleBlock>
      <VideoSettings onFlip={onFlip} />
      <Footer />
    </VideoStyled>
  )
}
