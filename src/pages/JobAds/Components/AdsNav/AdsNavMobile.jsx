import { useDispatch, useSelector } from 'react-redux'
import logo from 'assets/images/logo.png'
import { SearchBarMobile } from './SearchBarMobile'
import { makeSearchBarVisible } from 'redux/ads'
import { NavJobsMobileStyled } from 'pages/JobAds/Styles/nav/NavJobsStyled.styled'
import { ImageLink } from 'pages/JobAds/Styles/nav/NavJobsStyled.styled'
import { NavJobsMobileMenuList } from 'pages/JobAds/Styles/nav/NavJobsStyled.styled'
import { MenuLink } from 'components/common/menu/MenuLink.styled'
import { NavButton } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { SimpleBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import { MenuItemStyled } from 'components/common/menu/MenuItemStyled.styled'

export const AdsNavMobile = () => {
  const ads = useSelector(state => state.ads.menu)
  const dispatch = useDispatch()
  const searchVisible = () => {
    dispatch(makeSearchBarVisible())
  }

  return (
    <NavJobsMobileStyled>
      <ImageLink to='/'>
        <ImageStyled src={logo} alt='log' />
      </ImageLink>
      <NavJobsMobileMenuList>
        {ads.map(el => (
          <MenuItemStyled>
            <MenuLink to={el.link} id={el.id} key={el.id}>
              <NavButton size='14px' type='button'>
                {el.name}
              </NavButton>
            </MenuLink>
          </MenuItemStyled>
        ))}
        <MenuItemStyled>
          <SimpleBlock>
            <NavButton size='14px' onClick={searchVisible}>
              Explore Job Ads
            </NavButton>
          </SimpleBlock>
        </MenuItemStyled>
      </NavJobsMobileMenuList>
      <SearchBarMobile />
    </NavJobsMobileStyled>
  )
}
