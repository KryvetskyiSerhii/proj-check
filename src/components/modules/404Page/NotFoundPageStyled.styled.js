import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const NotFoundPageBlockStyled = styled.div`
  height: 100vh;
  color: #fff;
`
export const NotFoundPageImage = styled.img`
  width: 100vw;
  height: 100vh;
`
export const NotFoundPageLinkBlock = styled.div`
  width: 20vw;
  margin: 20px auto;
  position: absolute;
  bottom: 5vh;
  left: 40vw;
  border: 1px solid #fff;
  border-radius: 15px;
  text-align: center;
  padding: 5px 0px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: blue;
    font-weight: 600;
  }
`

export const NotFoundPageLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
`
