import { useSelector } from 'react-redux'
import logo from 'assets/images/logo.png'
import { SearchBar } from './SearchBar'
import { NavStyled } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { ImageLink } from 'pages/JobAds/Styles/nav/NavJobsStyled.styled'
import { MenuList } from 'components/common/menu/MenuList.styled.js'
import { MenuLink } from 'components/common/menu/MenuLink.styled'
import { NavButton } from 'pages/Blog/Styles/nav/NavStyled.styled.js'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import { MenuItemStyled } from 'components/common/menu/MenuItemStyled.styled'

export const AdsNav = () => {
  const ads = useSelector(state => state.ads.menu)

  return (
    <NavStyled width='210px'>
      <ImageLink to='/'>
        <ImageStyled src={logo} alt='logo' />
      </ImageLink>
      <MenuList margin='15px 0px' marginLi='15px'>
        <MenuItemStyled>
          <SearchBar />
        </MenuItemStyled>
        {ads.map(el => (
          <MenuItemStyled>
            <MenuLink to={el.link} id={el.id} key={el.id}>
              <NavButton size='18px' type='button'>
                {el.name}
              </NavButton>
            </MenuLink>
          </MenuItemStyled>
        ))}
      </MenuList>
    </NavStyled>
  )
}
