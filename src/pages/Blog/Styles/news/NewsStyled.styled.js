import styled from '@emotion/styled'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export const AnimationContent = styled(AnimationOnScroll)`
  grid-area: ${({ area }) => area};
`
export const LikeBtn = styled.div`
  color: ${props => props.theme.color};
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
`
export const NewsArticleBlock = styled.article`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  padding: 5px;
  height: 220px;
  border: 1px solid #000;
  border-radius: 15px;
  color: ${props => props.theme.color};
  margin: 10px;
  img {
    width: 100px;
  }
`
export const NewsArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0px 0px;
`
export const NewsArticleItem = styled.div`
  margin: 50px auto;
  text-align: center;
  color: ${props => props.theme.color};
  display: grid;
  grid-template-areas:
    'content content'
    'content2 picture'
    'content3 content3';
  grid-template-columns: 550px 300px;
  line-height: 29px;
  p {
    text-align: left;
  }
`
export const NewsArticleRight = styled.div`
  max-width: 300px;
  padding: 20px;
  grid-area: picture;
`
export const NewsBlocks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const NewsHeaderBtn = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0px 30px;
  color: ${props => props.theme.color};
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 7px;
    width: 21px;
    height: 21px;
    background: ${props => props.theme.share};
    z-index: 1;
    display: block;
    transform: translateY(-50%);
  }
`

export const NewsTextBlock = styled.div`
  overflow: hidden;
  margin: 15px 0px;
  padding: 6px 5px;
`
export const NewsText = styled.p`
  height: ${({ height }) => height};
  // padding: 0px 5px;
  text-align: center;
  color: ${props => props.theme.color};
`
export const BlogFooterStyled = styled.div`
  width: 100%;
  background: ${props => props.theme.transBackground};
  border-top: ${props => props.theme.border};
  padding: 10px 20px;
  margin-top: 50px;
  color: #fff;
  height: 10vh;
`

export const BlogFooterBlock = styled.div`
  color: ${props => props.theme.color};
`

export const BlogSideMenuStyled = styled.div`
  position: fixed;
  right: 1vw;
  top: 3vh;
  height: ${({ height }) => (height > 900 ? '23vh' : '35vh')};
  width: 6vw;
  background: transparent;
  border: ${props => props.theme.border};
  border-radius: 5px;
  color: #fff;
  padding: 20px 5px;
  overflow: hidden;
  text-align: center;
  box-shadow: ${props => props.theme.blogMenuShadow};
`
export const BlogSideMenuContainer = styled.div`
  position: relative;
  height: 100%;
`
export const BlogSideMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const BlogSideMenuItem = styled.li`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
export const OldNewsStyled = styled.div`
  width: 80vw;
`

export const OldNewsItemContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color};
  padding: 1rem;
  border-bottom: ${props => props.theme.blogBorder};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    img {
      width: 12vw;
    }
  }
`

export const OldNewsImage = styled.img`
  width: 10vw;
`

export const OldNewsItemBlock = styled.div`
  margin-left: 50px;
`

export const OldNewsTitle = styled.h3``

export const OldNewsText = styled.p`
  margin-top: 20px;
`
export const NewsSliderStyled = styled.div`
  poistion: relative;
`
export const NewsSliderContainer = styled.div`
  width: 70vw;
  margin: 30px auto 0;
  position: relative;
  overflow: hidden;
  height: 25vh;
  // border-radius: 10px;
  // box-shadow: 10px 10px 10px #000;
  transition: all 0.4s ease-in;

  z-index: 20;
`
export const NewsSliderImageBlock = styled.div`
  width: 20vw;

  height: 100%;
  position: absolute;
  opacity: ${({ slideIndex, index }) => (slideIndex === index + 1 ? '1' : '0')};
  transition: all 0.8s ease-in;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const NewsSliderTextBlock = styled.div`
  width: 30vw;
  position: absolute;
  top: 0;
  right: -30vw;
  color: ${props => props.theme.color};
  padding: 10px;
  z-index: 20;
`
export const NewsSliderTitle = styled.h3``
export const NewsSliderText = styled.p``
