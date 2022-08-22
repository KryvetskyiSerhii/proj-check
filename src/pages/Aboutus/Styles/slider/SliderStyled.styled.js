import styled from 'styled-components'

export const SliderStyled = styled.div`
  margin-top: -130px;
  position: relative;
`
export const SliderButton = styled.button`
  width: 40px;
  height: 40px;
  box-shadow: 10px 10px 10px #000;
  border-radius: 50%;
  background: #fff;
  border: 1px solid rgba(194, 188, 188, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 50%;
  left: ${({ direction }) => (direction === 'next' ? 'none' : '10%')};
  right: ${({ direction }) => (direction === 'next' ? '10%' : 'none')};
  transform: translateY(-60%);
  img {
    width: 55px;
    height: 55px;
    pointer-events: none;
  }
`

export const SliderContainer = styled.div`
  width: ${({ load }) => (load ? '60vw' : '59vw')};
  margin: 100px auto 0;
  position: relative;
  overflow: hidden;
  height: ${({ load }) => (load ? '25vw' : '24vw')};
  border-radius: 10px;
  box-shadow: 10px 10px 10px #000;
  transition: all 0.4s ease-in;
  opacity: ${({ load }) => (load ? '1' : '0.9')};
  z-index: 20;
`

export const SliderImageBlock = styled.div`
  min-width: 100%;
  max-width: 100%;
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

export const SldierText = styled.p`
  position: absolute;
  top: 100px;
  left: 250px;
  z-index: 10;
  color: #fff;
  font-size: 25px;
`
export const SliderTitle = styled.h3`
  position: absolute;
  top: 20px;
  left: 35%;
  z-index: 10;
  font-size: 40px;
  color: #fff;
`
