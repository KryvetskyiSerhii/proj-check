import { useSelector } from 'react-redux'
import { Carousel } from './Components/Carousel/Carousel'
import { AboutUsHeader } from './Components/AboutUsHeader'
import { AboutUsContent } from './Components/AboutUsContent'
import { AboutUsInfo } from './Components/AboutUsInfo'
import { AboutUsFooter } from './Components/AboutUsFooter'
import { AboutUsBlock } from './Styles/AboutUsMainStyled.styled'
import { Container, StyledTitle, ImageStyled } from 'components/common/CommonStyled.styled'
import { AboutUsItem } from './Styles/AboutUsMainStyled.styled'
import CustomScroll from 'react-custom-scroll'
import { AboutUsHQ } from './Components/AboutUsHQ'
export const AboutUsMain = () => {
  const images = useSelector(state => state.slider.carouselData)

  return (
    // <CustomScroll>
    <AboutUsBlock>
      <AboutUsHeader />
      <AboutUsContent />
      <AboutUsInfo />
      <Container width='80vw'>
        <Carousel>
          {images.map(elem => (
            <AboutUsItem>
              <StyledTitle>{elem.title}</StyledTitle>
              <ImageStyled src={elem.img} alt='carouselImg' />
            </AboutUsItem>
          ))}
        </Carousel>
      </Container>
      <AboutUsHQ />
      <AboutUsFooter />
    </AboutUsBlock>
    // </CustomScroll>
  )
}
