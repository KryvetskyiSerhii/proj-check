import { ImageStyled } from 'components/common/CommonStyled.styled'
import {
  OptionsVerticalButton,
  OptionsVerticalExtendedStyled,
  OptionsVerticalImageAcademics,
  OptionsVerticalImageMaps,
  OptionsVerticalImageNews,
  OptionsVerticalImagePhotos,
  OptionsVerticalImageVideos,
  OptionsVerticalImageWeb,
  OptionsVerticalLink,
  OptionsVerticalList,
  OptionsVerticalListItem,
  OptionsVerticalLogo,
  OptionsVerticalSimpleButton,
  OptionsVerticalText,
  OptionsVerticalImageShopping,
} from '../Styles/options/ResultOptions.styled'
import webLight from 'assets/icons/new/white/small/webLight.svg'
import fotosLight from 'assets/icons/new/white/small/fotosLight.svg'
import videosLight from 'assets/icons/new/white/small/videosLight.svg'
import newsLight from 'assets/icons/new/white/small/newsLight.svg'
import academicLight from 'assets/icons/new/white/small/academicLight.svg'
import mapsLight from 'assets/icons/new/white/small/mapsLight.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveItem } from 'redux/optionsSlice'
import { hoverVerticalNMenuIcons, switchMenuWidth, unHoverVerticalMenuIcon } from 'redux/general'
import { onVerticalHoverModal, offVerticalHoverModal } from 'redux/videoSlice'
import { ResultVerticalVideoModal } from './ResultVerticalVideoModal'
import { fetchImageData } from 'redux/imagesSlice'
import { fetchNewsData } from 'redux/newsSlice'
import shoppingLight from 'assets/icons/white/small/shoppingLight.svg'
import flipLight from 'assets/icons/second/white/small/flipLight.svg'
import menuLight from 'assets/icons/white/small/menuLight.svg'
import logo from 'assets/images/logo.png'
import { MenuLink } from 'components/common/menu/MenuLink.styled'
import { locations } from 'routing/locations'

export const ResultNavVerticalExtended = ({ handleFlipTheMenu, changeClass, flipButton }) => {
  const style = useSelector(state => state.general)
  const dispatch = useDispatch()
  const onMenuWide = useSelector(state => state.general.onVerticalMenuActive)
  const onHover = useSelector(state => state.general.onVerticalMenuHover)
  const searchValue = useSelector(state => state.general.inputValue)

  const searchImageData = () => {
    dispatch(fetchImageData(searchValue))
  }

  const searchNewsData = () => {
    dispatch(fetchNewsData(searchValue))
  }

  const setActiveMenuItem = item => {
    dispatch(setActiveItem(item))
  }

  const setMenuWidth = () => {
    dispatch(switchMenuWidth())
  }

  const handleOnHoverMenu = item => {
    dispatch(hoverVerticalNMenuIcons(item))
  }

  const handleOffHoverMenu = () => {
    dispatch(unHoverVerticalMenuIcon())
  }

  const handleMouseOn = () => {
    dispatch(onVerticalHoverModal())
  }

  const handleMouseOut = () => {
    dispatch(offVerticalHoverModal())
  }
  return (
    <OptionsVerticalExtendedStyled menu={onMenuWide}>
      <MenuLink to={locations.main}>
        <OptionsVerticalLogo src={logo} onMenuWide={onMenuWide} />
      </MenuLink>

      <OptionsVerticalList>
        <OptionsVerticalListItem
          onMouseOver={() => {
            handleOnHoverMenu('web')
          }}
          onMouseOut={handleOffHoverMenu}
        >
          <OptionsVerticalLink
            to={locations.results}
            onClick={() => {
              setActiveMenuItem('web')
            }}
          >
            <OptionsVerticalImageWeb
              src={style.darkStyle ? webLight : webLight}
              width='25px'
              onHover={onHover}
            />
            <OptionsVerticalText menu={onMenuWide}>Web</OptionsVerticalText>
          </OptionsVerticalLink>
        </OptionsVerticalListItem>
        <OptionsVerticalListItem
          onMouseOver={() => {
            handleOnHoverMenu('images')
          }}
          onMouseOut={handleOffHoverMenu}
        >
          <OptionsVerticalLink
            to={locations.images}
            onClick={() => {
              setActiveMenuItem('images')
              searchImageData()
            }}
          >
            <OptionsVerticalImagePhotos
              src={style.darkStyle ? fotosLight : fotosLight}
              width='25px'
              onHover={onHover}
            />
            <OptionsVerticalText menu={onMenuWide}>Images</OptionsVerticalText>
          </OptionsVerticalLink>
        </OptionsVerticalListItem>
        <OptionsVerticalListItem
          onMouseOver={() => {
            handleOnHoverMenu('videos')
            handleMouseOn()
          }}
          onMouseOut={() => {
            handleOffHoverMenu()
            handleMouseOut()
          }}
        >
          <ResultVerticalVideoModal menu={onMenuWide} setActiveMenuItem={setActiveMenuItem} />
          <OptionsVerticalLink to={locations.videoMain}>
            <OptionsVerticalImageVideos
              src={style.darkStyle ? videosLight : videosLight}
              width='25px'
              onHover={onHover}
            />
            <OptionsVerticalText menu={onMenuWide}>Videos</OptionsVerticalText>
          </OptionsVerticalLink>
        </OptionsVerticalListItem>
        <OptionsVerticalListItem
          onMouseOver={() => {
            handleOnHoverMenu('news')
          }}
          onMouseOut={handleOffHoverMenu}
        >
          <OptionsVerticalLink
            to={locations.news}
            onClick={() => {
              setActiveMenuItem('news')
              searchNewsData()
            }}
          >
            <OptionsVerticalImageNews
              src={style.darkStyle ? newsLight : newsLight}
              width='25px'
              onHover={onHover}
            />
            <OptionsVerticalText menu={onMenuWide}>News</OptionsVerticalText>
          </OptionsVerticalLink>
        </OptionsVerticalListItem>
        <OptionsVerticalListItem
          onMouseOver={() => {
            handleOnHoverMenu('academics')
          }}
          onMouseOut={handleOffHoverMenu}
        >
          <OptionsVerticalLink to={locations.academics}>
            <OptionsVerticalImageAcademics
              src={style.darkStyle ? academicLight : academicLight}
              width='25px'
              onHover={onHover}
            />
            <OptionsVerticalText menu={onMenuWide}>Academics</OptionsVerticalText>
          </OptionsVerticalLink>
        </OptionsVerticalListItem>
        <OptionsVerticalListItem
          onMouseOver={() => {
            handleOnHoverMenu('maps')
          }}
          onMouseOut={handleOffHoverMenu}
        >
          <OptionsVerticalLink to={locations.maps}>
            <OptionsVerticalImageMaps
              src={style.darkStyle ? mapsLight : mapsLight}
              width='25px'
              onHover={onHover}
            />
            <OptionsVerticalText menu={onMenuWide}>Maps</OptionsVerticalText>
          </OptionsVerticalLink>
        </OptionsVerticalListItem>
        <OptionsVerticalListItem
          onMouseOver={() => {
            handleOnHoverMenu('shopping')
          }}
          onMouseOut={handleOffHoverMenu}
        >
          <OptionsVerticalLink to={locations.shopping}>
            <OptionsVerticalImageShopping
              src={style.darkStyle ? shoppingLight : shoppingLight}
              width='25px'
              onHover={onHover}
            />
            <OptionsVerticalText menu={onMenuWide}>Shopping</OptionsVerticalText>
          </OptionsVerticalLink>
        </OptionsVerticalListItem>
      </OptionsVerticalList>

      {flipButton && (
        <OptionsVerticalSimpleButton type='button' bottom='100px' onClick={handleFlipTheMenu}>
          <ImageStyled src={flipLight} alt='flip' />
        </OptionsVerticalSimpleButton>
      )}
      <OptionsVerticalSimpleButton type='button' bottom='60px' onClick={changeClass}>
        <ImageStyled src={menuLight} alt='flip' />
      </OptionsVerticalSimpleButton>
      <OptionsVerticalButton
        type='button'
        onClick={setMenuWidth}
        menu={onMenuWide}
      ></OptionsVerticalButton>
    </OptionsVerticalExtendedStyled>
  )
}
