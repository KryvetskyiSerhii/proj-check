import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { VideoStyled, VideoButton } from '../Styles/VideoStyled.styled'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { VimeoItemsBlock, VimeoPlayer } from '../Styles/vimeo/VimeoStyled.styled'
import { VideoHeader } from './VideoHeader'

export const VimeoVideo = () => {
  const videoList = useSelector(state => state.videoSlice.vimeoVideos)
  const [resultsVisible, setResultsVisible] = useState(10)
  const onFlip = useSelector(state => state.general.flipMenu)
  const showMore = () => {
    setResultsVisible(resultsVisible + 5)
  }
  return (
    <VideoStyled>
      <VideoHeader />
      <VimeoItemsBlock menu={onFlip}>
        {videoList.slice(0, resultsVisible).map(el => (
          <VimeoPlayer url={el.link} width='300px' height='300px' controls='true'></VimeoPlayer>
        ))}
      </VimeoItemsBlock>
      <SimpleBlock>
        <SimpleBlock margin='20px'>
          <VideoButton type='button' onClick={showMore}>
            Show more results
          </VideoButton>
        </SimpleBlock>
      </SimpleBlock>
    </VideoStyled>
  )
}
