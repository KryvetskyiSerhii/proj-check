import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
export const StyledHeader = styled.div`
  height: 50px;
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
  padding: 5px 10px;
  &:hover {
    text-decoration: underline;
  }
`
export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`
