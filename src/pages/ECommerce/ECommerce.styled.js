import styled from '@emotion/styled'
import dark from 'assets/images/backgrounds/dark.jpg'

export const EcommerceStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
`

export const ShoppingCategoryBlock = styled.div`
  position: fixed;
  height: 95vh;
  top: 10px;
  right: 5px;
  width: 60px;
  background: ${props => props.theme.verticalBackground};
  border: ${props => props.theme.border};
  border-radius: 20px 20px;
  padding: 10px 5px 10px 0px;
  box-shadow: 5px 5px 5px #000;
`

export const ShoppingCategoryList = styled.ul`
  list-style: none;
  margin-top: 50px;
`

export const ShoppingCategoryItem = styled.li`
  position: relative;
  color: #fff;
  padding: 5px 8px 5px 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover {
    background: ${props => props.theme.verticalBgHover};
    border-radius: 0px 30px 30px 0px;
    color: ${props => props.theme.colorHover};
  }
  &:hover::before {
    content: '';
    position: absolute;
    top: -17px;
    left: -1px;
    width: 17px;
    height: 17px;
    background: transparent;
    border-bottom-left-radius: 10px;
    box-shadow: ${props => props.theme.shoppingBoxHoverBefore};
  }
  &:hover::after {
    content: '';
    position: absolute;
    bottom: -17px;
    left: -1px;
    width: 17px;
    height: 17px;
    background: transparent;
    border-top-left-radius: 10px;
    box-shadow: ${props => props.theme.shoppingBoxHoverAfter};
  }
`
export const ShoppingMainStyled = styled.div`
  width: 88vw;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ShoppingCardStyled = styled.div`
  width: 20vw;
  height: 40vh;
  border: ${props => props.theme.border};
  border-radius: 20px;
  box-shadow: 5px 5px 10px #000;
  position: relative;
  overflow: hidden;
`
export const ShoppingCardBlock = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 5px 5px 10px #000;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    let: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.shoppingBefore};
    clip-path: circle(100px at 80% 20%);
    transition: 0.5s ease-in-out;
  }
  &:hover:before {
    clip-path: circle(150px at 80% -20%);
  }
  &:after {
    content: '${({ after }) => after}';
    // content: 'Phone';
    position: absolute;
    top: 30%;
    left: -10%;
    font-size: 8em;
    font-weight: 800;
    font-style: italic;
    color: ${props => props.theme.shoppingAfter};
  }
  &:hover {
    img {
      width: 85%;
      height: 85%;
      top: 1%;
      left: -17%;
      transition: 0.5s ease-in;
    }
    div {
      visibility: visible;
      transition: all 1s ease-in-out;
      bottom: 10%;
      right: 0;
      opacity: 1;
      button:hover {
        background: blue;
      }
    }
  }
`
export const ShoppingCardImage = styled.img`
  position: absolute;
  top: 10%;
  left: 0%;
  transform: translateY (-50%);
  z-index: 1000;
  width: 70%;
  height: 80%;
  transition: 0.5s;
`
export const ShoppingCardContentStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  transition: 0.5s ease-in;
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  color: ${props => props.theme.color};
  padding: 5px;
`
export const ShoppingCardTitle = styled.h3`
  font-size: 15px;
  // transition-delay: 0.1s;
`
export const ShoppingCardPrice = styled.p`
  font-style: italic;
  // transition-delay: 0.2s;
`
export const ShoppingCardRate = styled.p`
  // transition-delay: 0.3s;
`

export const ShoppingCardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  padding: 0px 15px;
  border: ${props => props.theme.border};
  background: transparent;
  color: ${props => props.theme.color};
  margin-top: 10px;
  cursor: pointer;
  border-radius: 10px;
  z-index: 20;
  // transition-delay: 0.4s;
`
export const ShoppingCardFoldStyled = styled.div`
  margin: 10px 0px;
  position: relative;
  width: 80vw;
  height: 60vh;
  background: url(${dark});
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  padding: 0px 5px;
  border: ${props => props.theme.border};
  box-shadow: 10px 10px 10px #000;
  &:hover {
    background: url(${dark});
    img {
      left: 58%;
      height: 70vh;
      width: 40%;
      top: -10%;
    }
    section {
      left: 0;
      opacity: 1;
      visibility: visible;
      transition: 0.5s;
      color: #fff;
    }
    div:hover:before {
      clip-path: circle(100% at center);
    }
  }
  @media (max-width: 991px) {
    width: auto;
    max-width: 350px;
    align-items: flex-start;
    &:hover {
      height: 600px;
      img {
        left: 10%;
        height: 30vh;
        width: 80%;
        top: 30%;
      }
      section {
        width: 100%;
        left: 0;
        padding: 40px;
      }
    }
  }
`
export const ShoppingCardFoldCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${dark});
    clip-path: circle(30% at center);
    transition: 0.5s;
  }
`
export const ShoppingCardFoldImage = styled.img`
  position: absolute;
  top: 10%;
  left: 25%;
  transform: translate (-50%, -50%);
  width: 50%;
  height: 80%;
  pointer-events: none;
  transition: 0.5s;
  z-index: 1000;
`
export const ShoppingCardFoldContentStyled = styled.section`
  position: relative;
  width: 50%;
  left: 40%;
  padding: 20px 20px 20px 40px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
`

export const ShoppingCardDescription = styled.p`
  margin: 10px 0px;
`

export const ShoppingCardFoldButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  padding: 0px 15px;
  // border-radius: 10px;
  background: transparent;
  color: #2196f3;
  margin-top: 10px;
  cursor: pointer;

  z-index: 20;
  position: relative;
  transition: 0.2s;
  transition-delay: 1s;
  overflow: hidden;
  &:hover {
    color: #fff;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;

    span:nth-child(1) {
      left: 100%;
      transition: 1s;
    }
    span:nth-child(3) {
      right: 100%;
      transition: 1s;
      transition-delay: 0.5s;
    }
    span:nth-child(2) {
      top: 100%;
      transition: 1s;
      transition-delay: 0.25s;
    }
    span:nth-child(4) {
      bottom: 100%;
      transition: 1s;
      transition-delay: 0.75s;
    }
  }
`
export const ShoppingCardButtonSpan = styled.span`
  position: absolute;
  display: block;
  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #2196f3);
  }
  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #2196f3);
  }
  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #2196f3);
  }
  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #2196f3);
  }
`
export const CartStyled = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 10px;
`

export const CartItemStyled = styled.div`
  width: 90%;
  display: flex;
  height: 20vh;
  border: ${props => props.theme.border};
  padding: 5px;
  position: relative;
`

export const CartItemImage = styled.img`
  width: 10vw;
  border: 1px solid #fff;
`
export const CartItemText = styled.p`
  padding: 0px 5px;
  color: #fff;
  &:not(:last-child) {
    margin-right: 20px;
  }
`

export const CartItemPrice = styled.p`
  font-style: italic;
  font-weight: 600;
  color: #fff;
  margin-left: 10px;
`
export const CartItemInput = styled.input`
  width: 2vw;
  height: 4vh;
  &:focus {
    outline: none;
  }
`
export const CartArrowBlock = styled.div`
  position: relative;
  height: 4vh;
`
export const CartItemArrow = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: ${({ bottom }) => bottom}px;
  top: ${({ top }) => top}px;
  right: 0;
  transform: rotate(${({ rotate }) => rotate}deg);
  cursor: pointer;
`
export const CartItemTotalPrice = styled.div`
  width: 150px;
  height: 4vh;
  margin-left: 50px;
  color: #fff;
`
export const CartItemDelete = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0.5rem;
  right: 0.7rem;
  cursor: pointer;
  background: transparent;
  color: #fff;
  border: none;
`
export const EcommerceHeaderStyled = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
`
