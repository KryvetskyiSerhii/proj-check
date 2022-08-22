import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from 'redux/menu'
import {
  OptionsLinkImage,
  OptionsLinkNews,
  OptionsLinkVideos,
  OptionsLinkWeb,
  ResultOptions,
} from '../Styles/options/ResultOptions.styled'
import { OptionsList } from '../Styles/options/ResultOptions.styled'
import { OptionsItem } from '../Styles/options/ResultOptions.styled'
import { OptionsLink } from '../Styles/options/ResultOptions.styled'
import webLight from 'assets/icons/new/white/small/webLight.svg'
import webBlack from 'assets/icons/black/small/webBlack.svg'
import fotosLight from 'assets/icons/new/white/small/fotosLight.svg'
import fotosBlack from 'assets/icons/black/small/fotosBlack.svg'
import videosLight from 'assets/icons/new/white/small/videosLight.svg'
import videosBlack from 'assets/icons/black/small/videosBlack.svg'
import newsLight from 'assets/icons/new/white/small/newsLight.svg'
import newsBlack from 'assets/icons/black/small/newsBlack.svg'
import academicLight from 'assets/icons/new/white/small/academicLight.svg'
import academicBlack from 'assets/icons/black/small/academicBlack.svg'
import mapsLight from 'assets/icons/new/white/small/mapsLight.svg'
import mapsBlack from 'assets/icons/black/small/mapsBlack.svg'
import shoppingLight from 'assets/icons/white/small/shoppingLight.svg'
import shoppingBlack from 'assets/icons/black/small/shoppingBlack.svg'
import { ResultVideoModal } from './ResultVideoModal'
import { setActiveItem } from 'redux/optionsSlice'
import { fetchImageData, setImagesInputValue } from 'redux/imagesSlice'
import { fetchNewsData, setNewsInputValue } from 'redux/newsSlice'
import { locations } from 'routing/locations'

export const ResultNavOptions = ({ handleMouseOut, handleMouseOver }) => {
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.general.inputValue)
  const activeItem = useSelector(state => state.optionsSlice.activeItem)
  const setActiveMenuItem = item => {
    dispatch(setActiveItem(item))
  }

  const searchImageData = () => {
    dispatch(fetchImageData(searchValue))
    dispatch(setImagesInputValue(searchValue))
  }

  const searchNewsData = () => {
    dispatch(fetchNewsData(searchValue))
    dispatch(setNewsInputValue(searchValue))
  }
  const videoModal = useSelector(state => state.videoSlice.isHoverModal)

  const closeMenu = () => {
    dispatch(closeModal())
  }
  const style = useSelector(state => state.general)

  return (
    <ResultOptions onClick={closeMenu}>
      <OptionsList>
        <OptionsItem iconLight={webLight} iconBlack={webBlack} style={style} top='50%' left='-5px'>
          <OptionsLinkWeb
            to={locations.results}
            activeItem={activeItem}
            onClick={() => {
              setActiveMenuItem('web')
            }}
          >
            Web
          </OptionsLinkWeb>
        </OptionsItem>
        <OptionsItem
          iconLight={fotosLight}
          iconBlack={fotosBlack}
          style={style}
          top='50%'
          left='-5px'
          onMouseOver={handleMouseOut}
        >
          <OptionsLinkImage
            to={locations.images}
            activeItem={activeItem}
            onClick={() => {
              searchImageData()
              setActiveMenuItem('images')
            }}
          >
            Images
          </OptionsLinkImage>
        </OptionsItem>
        <OptionsItem
          iconLight={videosLight}
          iconBlack={videosBlack}
          style={style}
          top='10px'
          left='-4px'
          onMouseOver={handleMouseOver}
        >
          <ResultVideoModal
            onModal={handleMouseOver}
            offModal={handleMouseOut}
            modal={videoModal}
            setActiveMenuItem={setActiveMenuItem}
          />
          <OptionsLinkVideos to={locations.videoMain} activeItem={activeItem}>
            Videos
          </OptionsLinkVideos>
        </OptionsItem>
        <OptionsItem
          iconLight={newsLight}
          iconBlack={newsBlack}
          style={style}
          top='50%'
          left='-5px'
          onMouseOver={handleMouseOut}
        >
          <OptionsLinkNews
            to={locations.news}
            activeItem={activeItem}
            onClick={() => {
              setActiveMenuItem('news')
              searchNewsData()
            }}
          >
            News
          </OptionsLinkNews>
        </OptionsItem>
        <OptionsItem
          iconLight={academicLight}
          iconBlack={academicBlack}
          style={style}
          top='12px'
          left='-5px'
        >
          <OptionsLink
            to='/results/academics'
            activeItem={activeItem}
            onClick={() => {
              setActiveMenuItem('web')
            }}
          >
            Academics
          </OptionsLink>
        </OptionsItem>
        <OptionsItem
          iconLight={mapsLight}
          iconBlack={mapsBlack}
          style={style}
          top='50%'
          left='-5px'
        >
          <OptionsLink
            to={locations.maps}
            onClick={() => {
              setActiveMenuItem('web')
            }}
          >
            Maps
          </OptionsLink>
        </OptionsItem>
        <OptionsItem
          iconLight={shoppingLight}
          iconBlack={shoppingBlack}
          style={style}
          top='50%'
          left='-5px'
        >
          <OptionsLink
            to={locations.shopping}
            onClick={() => {
              setActiveMenuItem('shopping')
            }}
          >
            Shopping
          </OptionsLink>
        </OptionsItem>
      </OptionsList>
    </ResultOptions>
  )
}
