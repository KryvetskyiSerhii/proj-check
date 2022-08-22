import {
  ResultModalBlock,
  ResultVideoLink,
  ResultVideoModalStyled,
} from '../Styles/modal/ResultVideoModalStyled.styled'
import { locations } from 'routing/locations'

export const ResultVideoModal = ({ onModal, offModal, modal, setActiveMenuItem }) => {
  return (
    <ResultVideoModalStyled onMouseOver={onModal} onMouseOut={offModal} modal={modal}>
      <ResultModalBlock>
        <ResultVideoLink
          to={locations.videoMain}
          onClick={() => {
            setActiveMenuItem('video')
          }}
        >
          YouTube
        </ResultVideoLink>
        <ResultVideoLink
          to={locations.vimeoVideos}
          onClick={() => {
            setActiveMenuItem('video')
          }}
        >
          Vimeo
        </ResultVideoLink>
      </ResultModalBlock>
    </ResultVideoModalStyled>
  )
}
