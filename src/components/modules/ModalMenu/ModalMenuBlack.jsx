import { useSelector, useDispatch } from 'react-redux'
import { closeModal, toggleClass } from 'redux/menu'
import close from 'assets/icons/white/small/close.svg'
import closeLight from 'assets/icons/black/small/closeLight.svg'
import {
  ModalMenuBlackBlock,
  ModalMenuList,
  ModalMenuItem,
  ModalMenuLink,
  ModalMenuClose,
} from './styles/ModalMenuBlock.styled'
import { SimpleBlock, ImageStyled, NavGeneralStyled } from 'components/common/CommonStyled.styled'
import {
  ModalArrowImage,
  ModalMenuBlock,
  ModalMenuBlockHidden,
  ModalMenuSettingsFlex,
  ModalSettingsImage,
  ModalSettingsText,
} from './styles/ModalMenuBlock.styled'
import { setFontFace, switchFontsMenu, switchSettingsMenu, switchStyles } from 'redux/general'
import switchThemeLight from 'assets/icons/second/white/small/switchThemeLight.svg'
import switchThemeBlack from 'assets/icons/second/black/small/switchThemeBlack.svg'
import arrowBottomLight from 'assets/icons/arrowBottomLight.svg'
import arrowBottomBlack from 'assets/icons/arrowBottomBlack.svg'
import { LanguageMenu } from './LanguageMenu'

const ModalMenuBlack = () => {
  const modal = useSelector(state => state.modal.menuItems)
  const isVisible = useSelector(state => state.modal.isModalVisible)
  const dispatch = useDispatch()
  const style = useSelector(state => state.general)
  const isSettingsVisible = useSelector(state => state.general.settingsMenu)
  const isFontsVisible = useSelector(state => state.general.fontsMenu)

  const changeClass = () => {
    dispatch(toggleClass())
  }

  const closeMenu = () => {
    dispatch(closeModal())
  }
  const handleSettingsMenu = () => {
    dispatch(switchSettingsMenu())
  }

  const handleStyle = () => {
    dispatch(switchStyles())
  }

  const handleFontFace = e => {
    dispatch(setFontFace(e.target.id))
  }

  const handleFontsMenu = () => {
    dispatch(switchFontsMenu())
  }
  return (
    <ModalMenuBlackBlock active={isVisible}>
      <NavGeneralStyled>
        <ModalMenuList>
          {modal.map(el => (
            <ModalMenuItem>
              <ModalMenuLink to={el.link} id={el.id} key={el.id} onClick={closeMenu}>
                <SimpleBlock>{el.name}</SimpleBlock>
              </ModalMenuLink>
            </ModalMenuItem>
          ))}
          <ModalMenuItem>
            <ModalMenuBlock onClick={handleSettingsMenu}>
              Settings
              <ModalArrowImage
                src={style.darkStyle ? arrowBottomLight : arrowBottomBlack}
                isSettingsVisible={isSettingsVisible}
              />
            </ModalMenuBlock>
            <ModalMenuBlockHidden isSettingsVisible={isSettingsVisible}>
              <ModalMenuSettingsFlex onClick={handleStyle}>
                <ModalSettingsImage
                  src={style.darkStyle ? switchThemeLight : switchThemeBlack}
                ></ModalSettingsImage>
                <ModalSettingsText>
                  {style.darkStyle ? 'to Light Style' : 'to Dark Style'}
                </ModalSettingsText>
              </ModalMenuSettingsFlex>
              <ModalMenuBlock onClick={handleFontsMenu}>
                Fonts
                <ModalArrowImage
                  src={style.darkStyle ? arrowBottomLight : arrowBottomBlack}
                  isSettingsVisible={isFontsVisible}
                />
              </ModalMenuBlock>
              <ModalMenuBlockHidden isSettingsVisible={isFontsVisible}>
                <ModalMenuBlock id='ABeeZeeRegular' onClick={handleFontFace} font='ABeeZeeRegular'>
                  ABeeZee
                </ModalMenuBlock>
                <ModalMenuBlock id='ArimoRegular' onClick={handleFontFace} font='ArimoRegular'>
                  Arimo
                </ModalMenuBlock>
                <ModalMenuBlock
                  id='MerriweatherRegular'
                  onClick={handleFontFace}
                  font='MerriweatherRegular'
                >
                  Merriweather
                </ModalMenuBlock>
              </ModalMenuBlockHidden>
              <LanguageMenu />
            </ModalMenuBlockHidden>
          </ModalMenuItem>
        </ModalMenuList>
      </NavGeneralStyled>
      <SimpleBlock>
        <ModalMenuClose bg='transparent' type='button' onClick={changeClass}>
          <ImageStyled src={style.darkStyle ? close : closeLight} alt='menu' />
        </ModalMenuClose>
      </SimpleBlock>
    </ModalMenuBlackBlock>
  )
}

export default ModalMenuBlack
