import { Content } from './Components/Content'
import { Header } from './Components/Header'
import { Info } from './Components/Info'
import { Search } from './Components/Search'
import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { Footer } from 'components/modules/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { offRightClickMenu } from 'redux/search'


export const Main = () => {
  const dispatch = useDispatch()

  const closeMenu = e => {
    if (e.target.id !== 'rightMenu') {
      dispatch(offRightClickMenu())
    }
  }

  return (
    <SimpleBlock onClick={closeMenu}>
      <Header />
      <Search />
      <Info />
      <Content />
      <Footer />
    </SimpleBlock>
  )
}
