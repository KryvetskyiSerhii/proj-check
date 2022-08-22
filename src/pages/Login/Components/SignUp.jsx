import { LabelStyled } from 'components/common/CommonStyled.styled'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { LoginContainer } from '../Styles/LoginStyled.styled'
import { LoginForm } from '../Styles/LoginStyled.styled'
import { LoginInputBlock } from '../Styles/LoginStyled.styled'
import { LoginInput } from '../Styles/LoginStyled.styled'
import { LoginBtnBlock } from '../Styles/LoginStyled.styled'
import { LoginButton } from '../Styles/LoginStyled.styled'
import { LoginBottomBlock } from '../Styles/LoginStyled.styled'
import { LoginLink } from '../Styles/LoginStyled.styled'

export const SignUp = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const dataChange = e => {
    const newData = { ...userData }
    newData[e.target.id] = e.target.value
    setUserData(newData)
  }

  const deleteData = () => {
    const newData = { ...userData }
    newData.email = ''
    newData.password = ''
    setUserData(newData)
  }

  const signUpTheNewUser = async e => {
    e.preventDefault()
    const createUser = await fetch('http://localhost:3004/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    })
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={signUpTheNewUser}>
        <LoginInputBlock>
          <LabelStyled for='email'>Email</LabelStyled>
          <LoginInput
            type='email'
            name='email'
            id='email'
            onChange={e => dataChange(e)}
            value={userData.email}
            placeholder='Enter your email'
          />
        </LoginInputBlock>
        <LoginInputBlock>
          <LabelStyled for='password'>Password</LabelStyled>
          <LoginInput
            type='password'
            name='password'
            id='password'
            onChange={e => dataChange(e)}
            value={userData.password}
            placeholder='Enter the password'
          />
        </LoginInputBlock>

        <LoginBtnBlock>
          <LoginButton type='submit'>Sign up</LoginButton>
          <LoginButton type='button' onClick={deleteData}>
            Cancel
          </LoginButton>
        </LoginBtnBlock>
      </LoginForm>
      <LoginBottomBlock>
        <LoginLink to='/'>Back to the main page</LoginLink>
      </LoginBottomBlock>
    </LoginContainer>
  )
}
