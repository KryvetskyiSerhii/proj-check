import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const SettingsForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 200px;
    margin-left: 20px;
    cursor: pointer;
  }
  input {
    visibility: hidden;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    flex-direction: column;
  }
`
export const SettingsFormBlock = styled.div`
  width: 50vw;
  margin: 0px auto 0px auto;
  padding-top: 150px;
  color: ${({ style }) => (style.darkStyle ? '#fff' : '#000')};
`
export const SettingsItem = styled.div`
  display: flex;
  flex-direction: column;
`
export const SettingsLink = styled(Link)`
  margin-top: 20px;
  color: ${({ style }) => (style.darkStyle ? '#fff' : '#000')};
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    border: ${({ style }) => (style.darkStyle ? '1px solid #fff' : '1px solid #000')};
    border-radius: 10px;
    font-weight: 600;
    height: 40px;
  }
`

export const SettingsLinkBlock = styled.div`
  text-align: center;
`
export const SettingsTitle = styled.h3`
  color: ${({ style }) => (style.darkStyle ? '#fff' : '#000')};
  margin-bottom: 20px;
  text-align: center;
`
