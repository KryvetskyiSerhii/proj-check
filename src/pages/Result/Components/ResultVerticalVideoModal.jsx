import { useSelector } from 'react-redux'
import { ResultVerticalModal, ResultVideoLink } from '../Styles/modal/ResultVideoModalStyled.styled'
import { locations } from 'routing/locations'

export const ResultVerticalVideoModal = ({ menu, setActiveMenuItem }) => {
  const modal = useSelector(state => state.videoSlice.isHoverVerticalModal)

  return (
    <ResultVerticalModal modal={modal} menu={menu}>
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
    </ResultVerticalModal>
  )
}
