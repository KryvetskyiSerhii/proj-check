import styled from 'styled-components'
import dark from 'assets/images/backgrounds/dark.jpg'

export const MapModalStyled = styled.div`
  position: absolute;
  top: 11vh;
  left: 45vw;
  width: ${({ modal }) => (modal ? '600px' : '0px')};
  height: ${({ modal }) => (modal ? '300px' : '0px')};
  z-index: 20;
  background: url(${dark}) no-repeat;
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.5s ease-in;
  color: #fff;
  border: ${({ modal }) => (modal ? '1px solid #fff' : 'none')};
  visibility: ${({ modal }) => (modal ? 'visible' : 'hidden')};
  opacity: ${({ modal }) => (modal ? '1' : '0')};
  box-shadow: 10px 10px 10px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MapModalTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  margin: 5px 0px 0px 0px;
  width: ${({ modal }) => (modal ? '300px' : '0px')};
  transition: all 0.5s ease-in;
`
export const MapModalInput = styled.input`
  width: ${({ modal }) => (modal ? '300px' : '0px')};
  height: 30px;
  padding-left: 10px;
  background: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease-in;
`
export const MapModalText = styled.p`
  font-size: 18px;
  margin-right: ${({ marginRight }) => marginRight};
`
export const MapModalButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0px 10px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgb(8, 97, 119);
  }
`
export const MapModalButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ modal }) => (modal ? '200px' : '0px')};
  transition: all 0.5s ease-in;
`
export const MapModalTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ modal }) => (modal ? '400px' : '0px')};
  margin: 10px 0px 0px 0px;
  transition: all 0.5s ease-in;
`
