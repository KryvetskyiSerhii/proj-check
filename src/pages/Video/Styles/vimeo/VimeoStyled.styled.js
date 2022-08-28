import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VimeoPlayer = styled(ReactPlayer)`
  margin: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 15px 5px 10px #000;
  overflow-y: auto;
  overflow-x: hidden;
`
export const VimeoItemsBlock = styled.div`
  padding: ${({ menu }) => (menu ? '10vh 0px 0px 60px' : '14vh 0px 0px 20px')};
  display: flex;
  justify-content: space-between;
  width: 80vw;
  flex-wrap: wrap;
  min-height: 100vh;
`
