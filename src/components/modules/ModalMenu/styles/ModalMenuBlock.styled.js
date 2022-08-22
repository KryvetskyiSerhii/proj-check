import styled from '@emotion/styled'
import dark from 'assets/images/backgrounds/dark.jpg'
import { Link } from 'react-router-dom'

export const ModalMenuBlock = styled.div`
  color: ${props => props.theme.color};
  font-family: ${({ font }) => font};
  cursor: pointer;
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &:hover {
    opacity: 0.5;
  }
`
export const ModalMenuBlockHidden = styled.div`
  display: ${({ isSettingsVisible }) => (isSettingsVisible ? 'block' : 'none')};
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  padding-left: 10px;
`
export const ModalSettingsImage = styled.img`
  width: 20px;
  transform: ${props => props.theme.icon};
  transition: all 0.7s ease-in;
  margin-right: 10px;
`
export const ModalSettingsText = styled.p`
  color: ${props => props.theme.color};
`

export const ModalMenuSettingsFlex = styled.div`
  display: flex;
  align-itmes: center;
  margin-bottom: 20px;
`
export const ModalArrowImage = styled.img`
  width: 15px;
  transform: ${({ isSettingsVisible }) => (isSettingsVisible ? 'rotate(180deg)' : 'none')};
  margin-left: 5px;
  transition: all 0.1s ease-in;
`
export const ListLanguage = styled.ul`
  list-style: none;
`
export const ListLanguageItem = styled.li`
  padding: 5px;
  color: ${props => props.theme.color};
`
export const ModalMenuBlackActive = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  width: 200px;
  padding: 8px 20px;
  display: flex;
  opacity: 1;
  justify-content: space-between;
  color: rgb(109, 105, 105);
  backface-visibility: hidden;
  z-index: 60;
  transition: all 0.5s ease-in-out;
  border-left: 1px solid rgb(109, 105, 105);
  background-image: url(${dark});
`
export const ModalMenuBlackBlock = styled.div`
  height: 100vh;
  top: 0;
  right: 0;
  width: 200px;
  margin-right: ${({ active }) => (active ? '0px' : '-200px')};
  display: flex;
  padding: 8px 20px;
  opacity: 1;
  justify-content: space-between;
  color: rgb(109, 105, 105);
  transition: all 0.5s ease-in-out;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  background: ${props => props.theme.modalBackground};
  z-index: ${({ active }) => (active ? '20' : '-20')};
  position: fixed;
  border-left: 1px solid rgb(109, 105, 105);
  @media (min-width: 300px) and (max-width: 575px) {
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    width: 200px;
    margin-left: ${({ active }) => (active ? '0px' : '-200px')};
    padding: 0px 20px;
    display: flex;
    opacity: 1;
    justify-content: space-between;
    color: rgb(109, 105, 105);
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    background: ${props => props.theme.modalBackground};
    z-index: ${({ active }) => (active ? '20' : '-20')};
  }
`
export const ModalMenuClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${({ bg }) => bg};
  border: none;
  cursor: pointer;
  padding-top: 10px;
`
export const ModalMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
export const ModalMenuLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
  &:hover {
    text-decoration: underline;
  }
`
export const ModalMenuList = styled.ul`
  list-style: none;
  padding: 25px 0px;
`
