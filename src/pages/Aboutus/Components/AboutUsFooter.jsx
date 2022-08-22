import facebookLight from 'assets/icons/white/small/facebookLight.svg'
import instagramLight from 'assets/icons/white/small/instagramLight.svg'
import twitterLight from 'assets/icons/white/small/twitterLight.svg'
import {
  AboutUsFooterBlock,
  AboutUsFooterStyled,
} from '../Styles/footer/AboutUsFooterStyled.styled'
import {
  Container,
  FlexBlock,
  SimpleBlock,
  ImageStyled,
} from 'components/common/CommonStyled.styled'
import { AboutFooterContact } from '../Styles/footer/AboutUsFooterStyled.styled'
import { useSelector } from 'react-redux'
import { SOCIAL_NETWORKS } from 'constants/arraysConstants'

export const AboutUsFooter = () => {
  const style = useSelector(state => state.general)

  return (
    <AboutUsFooterStyled style={style}>
      <Container width='80vw'>
        <FlexBlock>
          <AboutUsFooterBlock>2022 All rights reserved.....</AboutUsFooterBlock>
          <AboutFooterContact>
            {SOCIAL_NETWORKS.map(elem => (
              <ImageStyled src={style.darkStyle ? elem.imgLight : elem.imgBlack} key={elem.name} />
            ))}
          </AboutFooterContact>
        </FlexBlock>
      </Container>
    </AboutUsFooterStyled>
  )
}
