import logo from 'assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { searchBarIsVisible } from 'redux/menu'
import { LocalSearchMobile } from './LocalSearchMobile'
import { NavMobileStyled } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { ImageBlockLink } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { NavMobileMenuList } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { MenuLink } from 'components/common/menu/MenuLink.styled'
import { NavButton } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import { MenuItemStyled } from 'components/common/menu/MenuItemStyled.styled'

export const NavMobile = props => {
  const menu = useSelector(state => state.modal.menuItems)
  const style = useSelector(state => state.general)
  const dispatch = useDispatch()

  const searchVisible = () => {
    dispatch(searchBarIsVisible())
  }

  return (
    <NavMobileStyled>
      <ImageBlockLink to='/' margin='-20px 0px'>
        <ImageStyled src={logo} alt='logo' />
      </ImageBlockLink>

      <NavMobileMenuList>
        {menu.map(el => (
          <MenuItemStyled>
            <MenuLink to={el.link2} id={el.id} key={el.id}>
              <NavButton size='14px' type='button'>
                {el.name}
              </NavButton>
            </MenuLink>
          </MenuItemStyled>
        ))}
        <MenuItemStyled>
          <NavButton onClick={searchVisible} size='14px'>
            Search
          </NavButton>
        </MenuItemStyled>
      </NavMobileMenuList>
      <LocalSearchMobile />
    </NavMobileStyled>
  )
}
