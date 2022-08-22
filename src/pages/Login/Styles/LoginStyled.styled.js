import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const LoginBottomBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  @media (min-width: 300px) and (max-width: 575px) {
    width: 300px;
    position: absolute;
    bottom: 20px;
  }
`
export const LoginBtnBlock = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 575px) {
    width: 200px;
  }
`
export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: ${props => props.theme.loginBorder};
  border-radius: 10px;
  background: transparent;
  color: ${props => props.theme.loginColor};
  cursor: pointer;
  font-size: 16px;
  padding: 0px 10px;
  height: 30px;
  &:hover {
    background-color: rgb(8, 97, 119);
    color: #fff;
  }
`
export const LoginContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  min-height: 84vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  min-height: 100vh;
`
export const LoginError = styled.div`
  color: red;
  margin: 0px 0px 10px 0px;
`
export const LoginForm = styled.form`
  width: 65vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;
`
export const LoginInput = styled.input`
  width: 30vw;
  height: 30px;
  padding-left: 5px;
  margin-bottom: 10px;
  border: ${props => props.theme.loginInputBorder};
  border-radius: 10px;
  &:focus {
    outline: none;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    width: 300px;
    margin-bottom: 30px;
  }
`
export const LoginInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const LoginLink = styled(Link)`
  text-decoration: none;
  color: rgb(21, 211, 249);
  &:hover {
    text-decoration: underline;
  }
`
