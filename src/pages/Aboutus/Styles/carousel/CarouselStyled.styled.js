import styled from '@emotion/styled'

export const CarouselArrowLeft = styled.div`
  opacity: ${({ index }) => (index === 1 ? '0' : '1')};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const CarouselArrowRight = styled.div`
  opacity: ${({ index, images }) => (index === images.length ? '0' : '1')};
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
export const CarouselBlock = styled.div`
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`

export const CarouselContainer = styled.div`
  margin: 100px auto 0px auto;
  height: 350px;
  width: 850px;
  &:focus {
    outline: none;
  }
`

export const CarouselDotItem = styled.div`
  width: 15px;
  height: 15px;
  margin: 0 5px;
  cursor: pointer;
  background: #000;
  border-radius: 50%;
  border: ${({ slideIndex, index }) =>
    slideIndex === index + 1 ? '2px solid #fff' : '5px solid #fff'};
  &:not(:last-child) {
    margin-right: 170px;
  }
  &:focus {
    outline: none;
  }
`
export const CarouselMilestoneText = styled.p`
  margin: 10px 0px 0px -30px;
  color: #000;
  width: 150px;
  font-size: ${({ slideIndex, index }) => (slideIndex === index + 1 ? '18px' : '16px')};
  font-weight: ${({ slideIndex, index }) => (slideIndex === index + 1 ? '600' : '400')};
  &:focus {
    outline: none;
  }
`
export const CarouselDots = styled.div`
  margin: 30px auto 0px auto;
  display: flex;
  align-items: center;
  width: 150vw;
  background: grey;
  border-radius: 20px;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  &:focus {
    outline: none;
  }
`

export const CarouselItemContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  &:focus {
    outline: none;
  }
`
export const CarouselWindow = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`
