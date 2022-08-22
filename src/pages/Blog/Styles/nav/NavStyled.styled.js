import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const NavStyled = styled.nav`
  grid-area: side;
  position: fixed;
  height: 100%;
  width: ${({ width }) => width};
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 10px 10px 10px 10px;
  box-sizing: border-box;
  text-align: left;
  border-right: ${props => props.theme.blogBorder};
  @media (min-width: 300px) and (max-width: 575px) {
    display: none;
  }
`

export const ImageBlockLink = styled(Link)`
  margin: ${({ margin }) => margin};
  img {
    width: 180px;
  }
`

export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  background: transparent;
  color: ${props => props.theme.color};
  cursor: pointer;
  font-size: ${({ size }) => size};
  &:hover {
    text-decoration: underline;
  }
`
export const NavMenuList = styled.ul`
  list-style: none;
`

export const NavMobileMenuList = styled.ul`
  list-style: none;
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  li:not(:last-child) {
    margin-right: 15px;
  }
`
export const NavMobileStyled = styled.div`
  margin: 0 auto;
  display: none;
  width: 98vw;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 10px;
  @media (min-width: 300px) and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  background-color: #fff;
  border: none;
  border-radius: 0px 10px 10px 0px;
  padding-right: 5px;
  cursor: pointer;
  img {
    width: 20px;
    opacity: 0.5;
  }
`

export const SearchForm = styled.form`
  margin: 15px 0px;
  display: flex;
  align-items: center;
`
