import { useSelector, useDispatch } from 'react-redux'
import { closeModal, toggleClass } from 'redux/menu'
import menuBlack from 'assets/icons/black/small/menuBlack.svg'
import menuLight from 'assets/icons/white/small/menuLight.svg'
import {
  Container,
  FlexBlock,
  StyledButton,
  SimpleBlock,
  ImageStyled,
} from 'components/common/CommonStyled.styled'
import { StyledHeader } from 'pages/Main/Styles/header/Header.styled'
import { HeaderLinks } from 'pages/Main/Styles/header/Header.styled'
import ModalMenuBlack from 'components/modules/ModalMenu/ModalMenuBlack'
import { HeaderLink } from '../Styles/header/Header.styled'

export const Header = () => {
  const dispatch = useDispatch()
  const style = useSelector(state => state.general)

  const changeClass = () => {
    dispatch(toggleClass())
  }

  const closeMenu = () => {
    dispatch(closeModal())
  }

  return (
    <StyledHeader>
      <Container width='99vw'>
        <FlexBlock padding='10px'>
          <HeaderLinks>
            <HeaderLink to='/blog' onClick={closeMenu}>
              <SimpleBlock>Blog</SimpleBlock>
            </HeaderLink>
            <HeaderLink to='/login' onClick={closeMenu}>
              <SimpleBlock>Private Job Ads</SimpleBlock>
            </HeaderLink>
          </HeaderLinks>
          <SimpleBlock>
            <StyledButton type='button' onClick={changeClass} border='none'>
              <ImageStyled src={style.darkStyle ? menuLight : menuBlack} alt='menu' />
            </StyledButton>
          </SimpleBlock>
        </FlexBlock>
        <ModalMenuBlack />
      </Container>
    </StyledHeader>
  )
}
