import { useDispatch, useSelector } from 'react-redux'
import { StyledAppBlack } from 'AppBlack.styled'
import dark from 'assets/images/backgrounds/dark.jpg'
import { GlobalStyles } from 'AppBlack.styled'
import { AppRoutes } from 'routing/AppRoutes'
import { FontsStyled } from 'GlobalStyle.styled'
import { ThemeProvider } from '@emotion/react'
import { themes } from 'themes/themes'
import { closeModal } from 'redux/menu'
const App = () => {
  const style = useSelector(state => state.general)
  const font = useSelector(state => state.general.fontFace)
  const modal = useSelector(state => state.modal.isModalVisible)
  const dispatch = useDispatch()
  const closeRightMenu = e => {
    if (modal && e.pageX < window.innerWidth - 210) dispatch(closeModal())
  }
  return (
    <>
      <GlobalStyles />
      <FontsStyled />
      <ThemeProvider theme={style.darkStyle ? themes.darkTheme : themes.lightTheme}>
        <StyledAppBlack font={font} onClick={closeRightMenu}>
          <AppRoutes />
        </StyledAppBlack>
      </ThemeProvider>
    </>
  )
}

export default App
