import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import { Slider } from './Slider/Slider'
import { SimpleBlock, ImageBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import { AboutUsLinkBlock } from '../Styles/AboutUsMainStyled.styled'
import { AboutUsTitleStyled } from '../Styles/AboutUsMainStyled.styled'
import { useDispatch } from 'react-redux'
import { switchAboutUsHeader } from 'redux/general'

export const AboutUsTitle = () => {
  return (
    <SimpleBlock>
      <AboutUsLinkBlock>
        <Link to='/'>
          <ImageBlock width='400px' align='center' margin='-50px auto'>
            <ImageStyled width='400px' src={logo} alt='logo' />
          </ImageBlock>
        </Link>
      </AboutUsLinkBlock>

      <Slider />
      <AboutUsTitleStyled>Explore more about us</AboutUsTitleStyled>
    </SimpleBlock>
  )
}
