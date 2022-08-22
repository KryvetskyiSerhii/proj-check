import { switchLightStyle, switchDarkStyle } from 'redux/general'
import { useDispatch, useSelector } from 'react-redux'
import lightstyle from 'assets/images/stylebackgrounds/lightstyle.png'
import darkstyle from 'assets/images/stylebackgrounds/darkstyle.png'
import { SimpleBlock } from 'components/common/SimpleBlock.styled'
import { Container } from 'components/common/Container.styled'
import { SettingsFormBlock } from './Styles/SettingsStyled.styled'
import { SettingsTitle } from './Styles/SettingsStyled.styled'
import { SettingsForm } from './Styles/SettingsStyled.styled'
import { SettingsItem } from './Styles/SettingsStyled.styled'
import { SettingsLinkBlock } from './Styles/SettingsStyled.styled'
import { SettingsLink } from './Styles/SettingsStyled.styled'
import { LabelStyled } from 'components/common/LabelStyled.styled'
import { ImageStyled } from 'components/common/ImageStyled.styled'
import { SearchInput } from 'components/common/SearchInput.styled'

export const Settings = () => {
  const style = useSelector(state => state.general)

  const dispatch = useDispatch()
  const changeToTheDarkStyle = () => {
    dispatch(switchDarkStyle())
  }

  const changeToTheLightStyle = () => {
    dispatch(switchLightStyle())
  }

  return (
    <SimpleBlock>
      <Container width='80vw'>
        <SettingsFormBlock style={style}>
          <SettingsTitle style={style}>Choose your style</SettingsTitle>
          <SettingsForm>
            <SettingsItem>
              <SearchInput
                type='radio'
                value='dark'
                name='style'
                id='dark'
                onChange={changeToTheDarkStyle}
              />
              <LabelStyled for='dark'>
                Dark Style <ImageStyled src={darkstyle} alt='darkStyle' />
              </LabelStyled>
            </SettingsItem>
            <SettingsItem>
              <SearchInput
                type='radio'
                value='light'
                name='style'
                id='light'
                onChange={changeToTheLightStyle}
              />
              <LabelStyled for='light'>
                Light Style <ImageStyled src={lightstyle} alt='lightStyle' />
              </LabelStyled>
            </SettingsItem>
          </SettingsForm>
          <SettingsLinkBlock>
            <SettingsLink to='/' style={style}>
              Save & Exit
            </SettingsLink>
          </SettingsLinkBlock>
        </SettingsFormBlock>
      </Container>
    </SimpleBlock>
  )
}
