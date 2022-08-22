import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MapInputStyled = styled.input`
  width: 400px;
  height: 40px;
  background-color: #fff;
  padding-left: 10px;
  border: none;
  border-radius: 10px 0px 0px 10px;
  &:focus {
    outline: none;
  }
`
export const MapButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0px 5px;
  background: transparent;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  img {
    width: ${({ imgwidth }) => imgwidth};
  }
`

export const MapDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  padding: 0px 3px;
  background-color: #fff;
  border: none;
  border-right: 1px solid rgb(202, 198, 198);
  cursor: pointer;
  font-size: 20px;
  padding: 0px 10px;
  opacity: ${({ deleteBut }) => (deleteBut ? '0.9' : '0')}};
  background-color: #fff;
`
export const MapDeleteButtonBlock = styled.div`
  background-color: #fff;
  border-top: none;
  border-bottom: none;
  button {
    font-size: 18px;
    height: 40px;
  }
  button:hover {
    font-weight: 600;
  }
`

export const MapInputStyledBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  padding: 0px 0px 0px 20px;
`

export const MapLink = styled(Link)`
  img {
    width: 30px;
    margin-right: 10px;
  }
`
export const MapSearchButton = styled.button`
  height: 40px;
  background-color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  border: none;
  border-radius: 0px 10px 10px 0px;
  padding: 0px 5px;
  cursor: pointer;
  img {
    width: 17px;
  }
`
