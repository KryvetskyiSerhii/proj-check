import {
  AboutUsBird,
  AboutUsBirdBlock,
  AboutUsBirdFirstBlock,
  AboutUsBirdForthBlock,
  AboutUsBirdSecondBlock,
  AboutUsBirdThirdBlock,
  AboutUsFirstBird,
  AboutUsForthBird,
  AboutUsHeaderBirdsContainer,
  AboutUsSecondBird,
  AboutUsThirdBird,
} from '../Styles/header/AboutUsHeaderStyled.styled'
import { AboutUsTitle } from './AboutUsTitle'

export const AboutUsHeaderBirds = () => {
  return (
    <AboutUsHeaderBirdsContainer>
      {/* <AboutUsTitle /> */}
      <AboutUsBirdBlock duration='15s' delay='0'>
        <AboutUsBird duration='1s' delay='-0.5s' />
      </AboutUsBirdBlock>
      <AboutUsBirdBlock duration='16s' delay='1s'>
        <AboutUsBird duration='0.9s' delay='-0.75s' />
      </AboutUsBirdBlock>
      <AboutUsBirdBlock duration='14.6s' delay='9.5s'>
        <AboutUsBird duration='1.25s' delay='-0.25s' />
      </AboutUsBirdBlock>
      <AboutUsBirdBlock duration='16s' delay='10.25s'>
        <AboutUsBird duration='1.1s' delay='-0.5s' />
      </AboutUsBirdBlock>
    </AboutUsHeaderBirdsContainer>
  )
}
