import { AnimationOnScroll } from 'react-animation-on-scroll'
import img1 from 'assets/images/blog/img1.JPG'
import img2 from 'assets/images/blog/img2.JPG'
import img3 from 'assets/images/blog/img3.JPG'
import { AboutUsContentBlock } from '../Styles/cotent/AboutUsContentStyled.styled'
import {
  Container,
  FlexBlock,
  ImageBlock,
  ImageStyled,
  StyledTitle,
  StyledText,
} from 'components/common/CommonStyled.styled'
import { AboutUsContentItem } from '../Styles/cotent/AboutUsContentStyled.styled'

export const AboutUsContent = () => {
  return (
    <AboutUsContentBlock>
      <Container width='80vw'>
        <FlexBlock>
          <AnimationOnScroll animateIn='animate__fadeInLeft'>
            <AboutUsContentItem>
              <ImageBlock imgradius='10px 10px 0px 0px'>
                <ImageStyled width='300px' src={img1} alt='globe' />
              </ImageBlock>
              <StyledTitle>Some title</StyledTitle>
              <StyledText>Some text</StyledText>
            </AboutUsContentItem>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInUp'>
            <AboutUsContentItem>
              <ImageBlock imgradius='10px 10px 0px 0px'>
                <ImageStyled width='300px' src={img2} alt='globe' />
              </ImageBlock>
              <StyledTitle>Some title</StyledTitle>
              <StyledText>Some text</StyledText>
            </AboutUsContentItem>
          </AnimationOnScroll>

          <AnimationOnScroll animateIn='animate__fadeInRight'>
            <AboutUsContentItem>
              <ImageBlock imgradius='10px 10px 0px 0px'>
                <ImageStyled width='300px' src={img3} alt='globe' />
              </ImageBlock>
              <StyledTitle>Some title</StyledTitle>
              <StyledText>Some text</StyledText>
            </AboutUsContentItem>
          </AnimationOnScroll>
        </FlexBlock>
      </Container>
    </AboutUsContentBlock>
  )
}
