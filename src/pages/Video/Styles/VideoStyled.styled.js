import styled from '@emotion/styled'

export const VideoStyled = styled.div`
  // margin-top: 110px;
  min-height: 100vh;
`

export const VideoButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0px 10px;
  height: 25px;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(43, 74, 74);
  }
`

export const VideoItem = styled.iframe`
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px 10px 0px 0px;
  border: none;
  width: ${({ filmScreen }) => (filmScreen ? '98vw' : '500px')};
  height: ${({ filmScreen }) => (filmScreen ? '85vh' : '200px')};
  position: relative;
`
export const VideoItemContainer = styled.div`
  position: ${({ filmScreen }) => (filmScreen ? 'fixed' : 'relative')};
  top: ${({ filmScreen }) => (filmScreen ? '0' : 'none')};
  left: ${({ filmScreen }) => (filmScreen ? '0' : 'none')};
  height: ${({ filmScreen }) => (filmScreen ? '98vh' : '300px')};
  z-index: ${({ filmScreen }) => (filmScreen ? '100' : '1')};
  margin: 10px;
  border-radius: 10px;
  box-shadow: 15px 5px 10px #000;
  overflow-y: auto;
  overflow-x: hidden;
  border: ${props => props.theme.border};
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const VideoItemFilmScreen = styled.img`
  position: absolute;
  top: ${({ filmScreen }) => (filmScreen ? '84%' : '64%')};
  left: ${({ filmScreen }) => (filmScreen ? '88%' : '37%')};
  width: 20px;
  cursor: pointer;
  z-index: 20;
`
export const VideoTextBlock = styled.div`
  display: flex;
  width: ${({ filmScreen }) => (filmScreen ? '95vw' : '500px')};
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`
export const VideoText = styled.p`
  margin: 5px 0px;
  color: #fff;
  padding: 3px 5px;
  overflow: hidden;
`

export const VideoSettingsStyled = styled.div`
  position: fixed;
  right: 0;
  top: ${({ onFlip }) => (onFlip ? '11vh' : '13.7vh')};
  padding-top: 1vh;
  border-left: ${props => props.theme.border};
  width: 15vw;
  height: ${({ height, onFlip }) => (onFlip ? parseInt(height) + 3.4 + 'vh' : height)};
  z-index: 10;
`
export const VideoList = styled.ul`
  list-style: none;
  color: ${props => props.theme.color};
`

export const VideoListItem = styled.li`
  padding: 5px 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
export const VideoSettingsButtonStyled = styled.div`
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
export const VideoSettingsSpan = styled.span`
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
export const SimpleVideoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.color};
  font-size: 1rem;
  &:hover {
    opacity: 0.5;
  }
`
export const VideoCategoryBlock = styled.div`
  display: ${({ isCategoryActive }) => (isCategoryActive ? 'block' : 'none')};
`
export const VideoCategoryArrow = styled.img`
  width: 15px;
  transform: ${({ isCategoryActive }) => (isCategoryActive ? 'rotate(180deg)' : 'none')};
  margin-left: 5px;
  transition: all 0.1s ease-in;
`
export const VideoFormBlock = styled.form`
  padding: 10px 0px 10px 15px;
`

export const VideoFormSelect = styled.select`
  width: 10vw;
  height: 4vh;
  border-radius: 3px;
  background: #4d5061;
  color: ${props => props.theme.color};
  margin: 0px 5px 10px 0px;
  cursor: pointer;
  box-shadow: 1px 1px 5px #000;
  &:focus {
    outline: none;
  }
`

export const VideoFormOption = styled.option`
  cursor: pointer;
`

export const VideoFormButton = styled.button`
  background: transparent;
  padding: 0px 5px;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.color};
  border: none;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`
