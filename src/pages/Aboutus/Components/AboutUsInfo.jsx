import vecteez from 'assets/images/blog/vecteez.jpg'
import { AboutInfoStyled } from '../Styles/info/AboutInfoStyled.styled'
import {
  Container,
  StyledText,
  StyledTitle,
  ImageStyled,
} from 'components/common/CommonStyled.styled'
import i18n from 'assets/translation/i18n'

export const AboutUsInfo = () => {
  return (
    <AboutInfoStyled>
      <Container width='80vw'>
        <StyledTitle size='34px'>{i18n.t('AboutUsInfoTitle')} </StyledTitle>
        <StyledText margin='20px 0px'>{i18n.t('AboutUsInfoText')}</StyledText>
        <ImageStyled src={vecteez} alt='' />
      </Container>
    </AboutInfoStyled>
  )
}
