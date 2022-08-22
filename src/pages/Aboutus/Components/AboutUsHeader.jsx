import Header from 'components/modules/Header/Header'
import { AboutUsTitle } from './AboutUsTitle'
import { AboutUsHeaderStyled } from '../Styles/header/AboutUsHeaderStyled.styled'
import { AboutUsHeaderBirds } from './AboutUsHeaderBirds'

export const AboutUsHeader = () => {
  return (
    <AboutUsHeaderStyled>
      <Header />
      <AboutUsHeaderBirds />
      {/* <AboutUsTitle /> */}
    </AboutUsHeaderStyled>
  )
}
