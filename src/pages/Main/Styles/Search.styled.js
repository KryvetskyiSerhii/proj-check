import styled from '@emotion/styled'

export const RightClickMenuStyled = styled.div`
  width: 10vw;
  height: 38vh;
  background: ${props => props.theme.background};
  position: absolute;
  top: ${({ posY }) => `${posY}px`};
  left: ${({ posX }) => `${posX}px`};
  padding: 10px;
  border-radius: 10px;
  border: ${props => props.theme.border};
  box-shadow: 10px 10px 10px #000;
  color: ${props => props.theme.color};
`

export const RightClickMenuList = styled.ul`
  list-style: none;
`
export const RightClickMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`
