import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => color};
`
