import logo from 'assets/images/logo.png'
import { Link } from 'react-router-dom'
import { ResultSearchBar } from './ResultSearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { toggleClass } from 'redux/menu'
import { ResultNavOptions } from './ResultNavOptions'
import menuBlack from 'assets/icons/black/small/menuBlack.svg'
import menuLight from 'assets/icons/white/small/menuLight.svg'
import { ResultHeaderStyled } from '../Styles/header/ResultHeaderStyled.styled'
import { SimpleBlock, Container, ImageStyled } from 'components/common/CommonStyled.styled'
import { ResultHeaderButton } from '../Styles/header/ResultHeaderStyled.styled'
import ModalMenuBlack from 'components/modules/ModalMenu/ModalMenuBlack'
import { ResultHeaderLeft } from '../Styles/header/ResultHeaderStyled.styled'
import { ResultHeaderBlock } from '../Styles/header/ResultHeaderStyled.styled'
import { ResultHeaderImageBlock } from '../Styles/header/ResultHeaderStyled.styled'
import { onHoverModal, offHoverModal } from 'redux/videoSlice'
import flipLight from 'assets/icons/second/white/small/flipLight.svg'
import flipBlack from 'assets/icons/second/black/small/flipBlack.svg'
import { switchMenu } from 'redux/general'
import { ResultNavVerticalExtended } from './ResultNavVerticalExtended'

export const ResultHeader = () => {
  const dispatch = useDispatch()
  const style = useSelector(state => state.general)
  const onFlip = useSelector(state => state.general.flipMenu)

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
            <Link to='/'>
              <ImageStyled src={logo} alt='logo' />
            </Link>
          </ResultHeaderImageBlock>
          <ResultSearchBar handleMouseOut={handleMouseOut} />
        </ResultHeaderLeft>

        {!onFlip && (
          <SimpleBlock>
            <ResultHeaderButton type='button' onClick={handleFlipTheMenu}>
              <ImageStyled src={style.darkStyle ? flipLight : flipBlack} alt='flip' />
            </ResultHeaderButton>
            <ResultHeaderButton type='button' onClick={changeClass}>
              <ImageStyled src={style.darkStyle ? menuLight : menuBlack} alt='menu' />
            </ResultHeaderButton>
          </SimpleBlock>
        )}
      </ResultHeaderBlock>
      <ModalMenuBlack />

      <Container width='85vw'>
        {onFlip ? (
          <ResultNavVerticalExtended
            changeClass={changeClass}
            handleFlipTheMenu={handleFlipTheMenu}
            flipButton={true}
          />
        ) : (
          <ResultNavOptions handleMouseOut={handleMouseOut} handleMouseOver={handleMouseOver} />
        )}
      </Container>
    </ResultHeaderStyled>
  )
}
