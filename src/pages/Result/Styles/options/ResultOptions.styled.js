import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const ResultOptions = styled.nav`
  margin-bottom: 10px;
  text-align: left;
  padding-left: 1vw;
  margin-left: 4.3vw;
  @media (min-width: 300px) and (max-width: 575px) {
    padding: 0px;
    width: 95vw;
  }
`
export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
`
export const OptionsItem = styled.li`
  position: relative;
  padding-left: 20px;
  display: flex;
  align-items: center;
  opacity: 0.8;
  &:not(:last-child) {
    margin-right: 20px;
  }
  img {
    margin-right: 3px;
  }
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  &::before {
    content: '';
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    width: 21px;
    height: 21px;
    background: url(${({ style, iconLight, iconBlack }) =>
        style.darkStyle ? iconLight : iconBlack})
      no-repeat;
    z-index: 4;
    display: block;
    transform: translateY(-50%);
  }
`
export const OptionsLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
`
export const OptionsLinkWeb = styled(Link)`
  text-decoration: ${({ activeItem }) => (activeItem === 'web' ? 'underline' : 'none')};
  color: ${props => props.theme.color};
  font-weight: ${({ activeItem }) => (activeItem === 'web' ? '600' : '400')};
`
export const OptionsLinkImage = styled(Link)`
  text-decoration: ${({ activeItem }) => (activeItem === 'images' ? 'underline' : 'none')};
  color: ${props => props.theme.color};
  font-weight: ${({ activeItem }) => (activeItem === 'images' ? '600' : '400')};
`
export const OptionsLinkVideos = styled(Link)`
  text-decoration: ${({ activeItem }) => (activeItem === 'video' ? 'underline' : 'none')};
  color: ${props => props.theme.color};
  font-weight: ${({ activeItem }) => (activeItem === 'video' ? '600' : '400')};
`
export const OptionsLinkNews = styled(Link)`
  text-decoration: ${({ activeItem }) => (activeItem === 'news' ? 'underline' : 'none')};
  color: ${props => props.theme.color};
  font-weight: ${({ activeItem }) => (activeItem === 'news' ? '600' : '400')};
`
export const OptionsLinkAcademics = styled(Link)`
  text-decoration: ${({ activeItem }) => (activeItem === 'academics' ? 'underline' : 'none')};
  color: ${props => props.theme.color};
  font-weight: ${({ activeItem }) => (activeItem === 'news' ? '600' : '400')};
`
export const OptionsLinkMaps = styled(Link)`
  text-decoration: ${({ activeItem }) => (activeItem === 'maps' ? 'underline' : 'none')};
  color: ${props => props.theme.color};
  font-weight: ${({ activeItem }) => (activeItem === 'news' ? '600' : '400')};
`

export const OptionsLinkShopping = styled(Link)`
  text-decoration: ${({ activeItem }) => (activeItem === 'shopping' ? 'underline' : 'none')};
  color: ${props => props.theme.color};
  font-weight: ${({ activeItem }) => (activeItem === 'shopping' ? '600' : '400')};
`

export const OptionsVerticalStyled = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: ${({ menu }) => (menu ? '170px' : '55px')};
  height: 85vh;
  background: ${props => props.theme.verticalBackground};
  border: ${props => props.theme.border};
  border-top: none;
  border-radius: 0px 0px 20px 20px;
  padding: 10px 0px 10px 5px;
  box-shadow: 5px 5px 5px #000;
  transition: all 0.4s ease-in;
`
export const OptionsVerticalExtendedStyled = styled.div`
  position: fixed;
  top: 10px;
  left: 5px;
  width: ${({ menu }) => (menu ? '170px' : '55px')};
  height: 95vh;
  background: ${props => props.theme.verticalBackground};
  border: ${props => props.theme.border};
  border-radius: 20px 20px;
  padding: 10px 0px 10px 5px;
  box-shadow: 5px 5px 5px #000;
  transition: all 0.4s ease-in;
`
export const OptionsVerticalLogo = styled.img`
  width: 50px;
  height: 40px;
  margin-top: 0px;
  cursor: pointer;
  transition: all 0.4s ease-in;
`
export const OptionsVerticalList = styled.ul`
  list-style: none;
`
export const OptionsVerticalListItem = styled.li`
  position: relative;
  color: #fff;
  padding: 5px 0px 5px 8px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:hover {
    background: ${props => props.theme.verticalBgHover};
    border-radius: 30px 0px 0px 30px;
    color: #000;
  }
  &:hover::before {
    content: '';
    position: absolute;
    top: -17px;
    right: 0;
    width: 17px;
    height: 17px;
    background: transparent;
    border-bottom-right-radius: 10px;
    box-shadow: ${props => props.theme.verticalBoxShadowBefore};
  }
  &:hover::after {
    content: '';
    position: absolute;
    bottom: -17px;
    right: 0;
    width: 17px;
    height: 17px;
    background: transparent;
    border-top-right-radius: 10px;
    box-shadow: ${props => props.theme.verticalBoxShadowAfter};
  }
`
export const OptionsVerticalLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  // color: ${props => props.theme.color};
  color: #fff;
  &:hover {
    color: ${props => props.theme.colorHover};
    font-weight: 600;
  }
`
export const OptionsVerticalButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  bottom: 20px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 13px;
    height: 3px;
    border-radius: 3px;
    background: #000;
    transform: ${({ menu }) => (menu ? 'translateY(0px) rotate(225deg)' : 'translateY(-3px)')};
    transition: 1s;
  }
  &::after {
    content: '';
    position: absolute;
    width: 13px;
    height: 3px;
    border-radius: 3px;
    background: #000;
    transform: ${({ menu }) => (menu ? 'translateY(0px) rotate(-405deg)' : 'translateY(3px)')};
    transition: all 1s ease-in;
  }
`
export const OptionsVerticalSimpleButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  bottom: ${({ bottom }) => bottom};
  right: 10px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const OptionsVerticalText = styled.span`
  font-size: 18px;
  position: absolute;
  opacity: ${({ menu }) => (menu ? '1' : '0')};
  left: 50px;
  display: block;
  text-align: start;
  white-space: nowrap;
  visibility: ${({ menu }) => (menu ? 'visible' : 'hidden')};
  transition: all 0.4s ease-in;
`
export const OptionsVerticalImage = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)' : 'none'};
`
export const OptionsVerticalImageWeb = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover === 'web'
      ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)'
      : 'none'};
`
export const OptionsVerticalImagePhotos = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover === 'images'
      ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)'
      : 'none'};
`
export const OptionsVerticalImageVideos = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover === 'videos'
      ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)'
      : 'none'};
`
export const OptionsVerticalImageNews = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover === 'news'
      ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)'
      : 'none'};
`

export const OptionsVerticalImageAcademics = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover === 'academics'
      ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)'
      : 'none'};
`

export const OptionsVerticalImageMaps = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover === 'maps'
      ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)'
      : 'none'};
`
export const OptionsVerticalImageShopping = styled.img`
  width: ${({ width }) => width};
  filter: ${({ onHover }) =>
    onHover === 'shopping'
      ? 'invert(0.4) sepia(1) saturate(20) hue-rotate(201.6deg) brightness(0.5)'
      : 'none'};
`
