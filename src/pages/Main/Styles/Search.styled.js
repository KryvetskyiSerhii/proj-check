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
export const SuggestionsContainer = styled.div`
  width: 20vw;
  position: absolute;
  top: 5vh;
  left: 26vw;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  color: #000;
`

export const SuggestionsList = styled.ul`
  list-style: none;
`
export const SuggestionsListItem = styled.li`
  cursor: pointer;
  padding: 0px 0px 0px 3px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    opacity: 0.7;
    background: rgba(211, 211, 211, 0.7);
  }
`
