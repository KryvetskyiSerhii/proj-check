import { AboutUsFooterStyled } from 'pages/Aboutus/Styles/footer/AboutUsFooterStyled.styled'
import {
  Container,
  FlexBlock,
  ImageStyled,
  SimpleBlock,
} from 'components/common/CommonStyled.styled'
import { AboutFooterContact } from 'pages/Aboutus/Styles/footer/AboutUsFooterStyled.styled'
import { useSelector } from 'react-redux'
import { SOCIAL_NETWORKS } from 'constants/arraysConstants'

export const Footer = () => {
  const style = useSelector(state => state.general)
  return (
    <AboutUsFooterStyled>
      <Container width='80vw'>
        <FlexBlock>
          <SimpleBlock>2022 All rights reserved.....</SimpleBlock>
          <AboutFooterContact>
            {SOCIAL_NETWORKS.map(elem => (
              <ImageStyled src={style.darkStyle ? elem.imgLight : elem.imgBlack} />
            ))}
          </AboutFooterContact>
        </FlexBlock>
      </Container>
    </AboutUsFooterStyled>
  )
}
