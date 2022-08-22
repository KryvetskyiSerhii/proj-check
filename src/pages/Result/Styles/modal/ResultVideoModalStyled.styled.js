import styled from 'styled-components'
import dark from 'assets/images/backgrounds/dark.jpg'
import { Link } from 'react-router-dom'

export const ResultVideoModalStyled = styled.div`
  position: absolute;
  top: 25px;
  left: -40px;
  width: ${({ modal }) => (modal ? '150px' : '0px')};
  height: ${({ modal }) => (modal ? '50px' : '0px')};
  z-index: 20;
  background: url(${dark}) no-repeat;
  background-color: #fff;
  border-radius: 10px;
  // transition: all 0.5s ease-in;
  color: #fff;
  border: ${({ modal }) => (modal ? '1px solid #fff' : 'none')};
  visibility: ${({ modal }) => (modal ? 'visible' : 'hidden')};
  opacity: ${({ modal }) => (modal ? '1' : '0')};
  // box-shadow: 10px 10px 10px #000;
  padding: 10px;
`
export const ResultModalBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  &::before {
    content: '';
    position: absolute;
    background: url(${dark});
    top: -13px;
    left: -11px;
    width: 73px;
    height: 8px;
    border: none;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    border-radius: 0px 0px 15px 0px;
  }
  &::after {
    content: '';
    position: absolute;
    background: url(${dark});
    top: -13px;
    right: -11px;
    width: 75px;
    height: 8px;
    border: none;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #fff;
    border-radius: 0px 0px 0px 15px;
  }
`
export const ResultVideoLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: ${({ padding }) => padding};
  &:hover {
    text-decoration: underline;
  }
`
export const ResultVerticalModal = styled.div`
  position: absolute;
  top: -10px;
  left: ${({ menu }) => (menu ? '163px' : '49px')};
  width: ${({ modal }) => (modal ? '100px' : '0px')};
  height: ${({ modal }) => (modal ? '100px' : '0px')};
  z-index: 20;
  background: url(${dark}) no-repeat;
  background-color: #fff;
  border-radius: 10px;
  color: #fff;
  border: ${({ modal }) => (modal ? '1px solid #fff' : 'none')};
  visibility: ${({ modal }) => (modal ? 'visible' : 'hidden')};
  opacity: ${({ modal }) => (modal ? '1' : '0')};
  box-shadow: 10px 10px 10px #000;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
