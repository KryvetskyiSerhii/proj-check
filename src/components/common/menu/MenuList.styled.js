import styled from 'styled-components'

export const MenuList = styled.ul`
  list-style: none;
  margin: ${({ margin }) => margin};
  li:not(:last-child) {
    margin-bottom: ${({ marginLi }) => marginLi};
  }
`
