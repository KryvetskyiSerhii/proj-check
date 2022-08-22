import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Ads } from 'pages/JobAds/Ads'
import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { LoginContainer } from './Styles/LoginStyled.styled'
import { LoginForm } from './Styles/LoginStyled.styled'
import { LoginInput } from './Styles/LoginStyled.styled'
import { LoginError } from './Styles/LoginStyled.styled'
import { LoginBtnBlock } from './Styles/LoginStyled.styled'
import { LoginButton } from './Styles/LoginStyled.styled'
import { LoginBottomBlock } from './Styles/LoginStyled.styled'
import { LoginLink } from './Styles/LoginStyled.styled'
import { Footer } from 'components/modules/Footer/Footer'

export const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const [login, setLogin] = useState('')
  const [invalidData, setInvalidData] = useState(false)

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

  const getJsonData = async e => {
    e.preventDefault()
    const request = await fetch('http://localhost:3004/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    })
    const responseData = await request.json()
    if (responseData.user) {
      setLogin(responseData.user.email)
    } else {
      setInvalidData(true)
    }
  }

  const style = useSelector(state => state.general)
  useEffect(() => {
    getJsonData()
  }, [])

  return (
    <SimpleBlock>
      {login !== '' && <Ads />}
      {login === '' && (
        <LoginContainer>
          <LoginForm onSubmit={getJsonData}>
            <LoginInput
              type='email'
              placeholder='Enter your email'
              id='email'
              name='email'
              onChange={e => dataChange(e)}
              value={userData.email}
            />
            <LoginInput
              type='password'
              placeholder='Enter your password'
              id='password'
              name='password'
              onChange={e => dataChange(e)}
              value={userData.password}
            />
            {invalidData && <LoginError>Invalid email or password. Try one more time</LoginError>}
            <LoginBtnBlock>
              <LoginButton type='submit'>Sign in</LoginButton>
              <LoginButton type='button' onClick={deleteData}>
                Cancel
              </LoginButton>
            </LoginBtnBlock>
          </LoginForm>
          <LoginBottomBlock>
            <LoginLink to='/signup'>Sign up</LoginLink>
            <SimpleBlock>
              <LoginLink to='/'>Back to the main page</LoginLink>
            </SimpleBlock>
          </LoginBottomBlock>
        </LoginContainer>
      )}
      <Footer />
    </SimpleBlock>
  )
}
