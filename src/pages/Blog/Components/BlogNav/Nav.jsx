import logo from 'assets/images/logo.png'
import { LocalSearch } from './LocalSearch'
import { useSelector } from 'react-redux'
import { NavStyled } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { ImageBlockLink } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { MenuList } from 'components/common/menu/MenuList.styled'
import { MenuLink } from 'components/common/menu/MenuLink.styled'
import { NavButton } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import { MenuItemStyled } from 'components/common/menu/MenuItemStyled.styled'

export const Nav = props => {
  const menu = useSelector(state => state.modal.menuItems)
  const articles = useSelector(state => state.articles.articleItems)
  const style = useSelector(state => state.general)
  return (
    <NavStyled width='200px'>
      <ImageBlockLink to='/' margin='-40px'>
        <ImageStyled src={logo} alt='logo' />
      </ImageBlockLink>

      <MenuList margin='15px 0px' marginLi='15px' padding='0px'>
        <MenuItemStyled>
          <LocalSearch articles={articles} />
        </MenuItemStyled>
        {menu.map(el => (
          <MenuItemStyled>
            <MenuLink to={el.link2} id={el.id} key={el.id}>
              <NavButton type='button' size='18px'>
                {el.name}
              </NavButton>
            </MenuLink>
          </MenuItemStyled>
        ))}
      </MenuList>
    </NavStyled>
  )
}
