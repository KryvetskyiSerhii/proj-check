import { VideoSearchBar } from './VideoSearchBar'
import {
  ResultHeaderStyled,
  ResultHeaderLeft,
  ResultHeaderImageBlock,
  ResultHeaderButton,
  ResultHeaderBlock,
} from 'pages/Result/Styles/header/ResultHeaderStyled.styled'
import { ImageStyled, Container, SimpleBlock } from 'components/common/CommonStyled.styled'
import { useDispatch, useSelector } from 'react-redux'
import ModalMenuBlack from 'components/modules/ModalMenu/ModalMenuBlack'
import { ResultNavOptions } from 'pages/Result/Components'
import menuBlack from 'assets/icons/black/small/menuBlack.svg'
import menuLight from 'assets/icons/white/small/menuLight.svg'
import logo from 'assets/images/logo.png'
import { toggleClass } from 'redux/menu'
import { Link } from 'react-router-dom'
import { onHoverModal, offHoverModal } from 'redux/videoSlice'
import { ResultNavVertical } from 'pages/Result/Components/ResultNavVertical'
import flipLight from 'assets/icons/second/white/small/flipLight.svg'
import flipBlack from 'assets/icons/second/black/small/flipBlack.svg'
import { switchMenu } from 'redux/general'
import { locations } from 'routing/locations'

export const VideoHeader = () => {
  const style = useSelector(state => state.general)
  const onFlip = useSelector(state => state.general.flipMenu)
  const dispatch = useDispatch()
  const changeClass = () => {
    dispatch(toggleClass())
  }
  const handleMouseOver = () => {
    dispatch(onHoverModal())
  }

  const handleMouseOut = () => {
    dispatch(offHoverModal())
  }
  const handleFlipTheMenu = () => {
    dispatch(switchMenu())
  }

  return (
    <ResultHeaderStyled>
      <ResultHeaderBlock>
        <ResultHeaderLeft>
          <ResultHeaderImageBlock>
            <Link to={locations.main}>
              <ImageStyled src={logo} alt='logo' />
            </Link>
          </ResultHeaderImageBlock>
          <VideoSearchBar handleMouseOut={handleMouseOut} />
        </ResultHeaderLeft>

        <SimpleBlock>
          <ResultHeaderButton type='button' onClick={handleFlipTheMenu}>
            <ImageStyled src={style.darkStyle ? flipLight : flipBlack} />
          </ResultHeaderButton>
          <ResultHeaderButton type='button' onClick={changeClass}>
            <ImageStyled src={style.darkStyle ? menuLight : menuBlack} alt='menu' />
          </ResultHeaderButton>
        </SimpleBlock>
      </ResultHeaderBlock>
      <ModalMenuBlack />

      <Container width='85vw'>
        {onFlip ? (
          <ResultNavVertical changeClass={changeClass} handleFlipTheMenu={handleFlipTheMenu} />
        ) : (
          <ResultNavOptions handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} />
        )}
      </Container>
    </ResultHeaderStyled>
  )
}
