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
`

export const BlogFooterBlock = styled.div`
  color: ${props => props.theme.color};
`

export const BlogSideMenuStyled = styled.div`
  position: fixed;
  right: 1vw;
  top: 3vh;
  height: 35vh;
  width: 6vw;
  background: transparent;
  border: ${props => props.theme.border};
  border-radius: 5px;
  color: #fff;
  padding: 20px 0px;
  text-align: center;
  box-shadow: ${props => props.theme.blogMenuShadow};
`
export const BlogSideMenuContainer = styled.div`
  position: relative;
  height: 100%;
`
export const BlogSideMenuList = styled.ul`
  list-style: none;
`
export const BlogSideMenuItem = styled.li`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
