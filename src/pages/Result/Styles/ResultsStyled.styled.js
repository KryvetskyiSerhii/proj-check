import styled from '@emotion/styled'

export const ResultsStyled = styled.div`
  display: grid;
  grid-template-areas:
    'menu menu'
    'main main';
  gap: 2px;
  min-height: 100vh;
`
export const ResultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  padding: 0px 10px;
  cursor: pointer;
  color: ${props => props.theme.color};
  background: transparent;
  border: ${props => props.theme.border};
  border-radius: 10px;
  &:hover {
    background-color: rgb(89, 150, 236);
    color: #fff;
  }
`
export const ResultList = styled.ul`
  list-style: none;
  color: ${props => props.theme.color};
`
export const ResultMain = styled.div`
  margin: ${({ menu }) => (menu ? '7px 0px 0px 0px' : '120px 0px 0px 0px')};
  grid-area: main;
  min-height: 100vh;
  display: flex;
  @media (min-width: 300px) and (max-width: 575px) {
    margin: 180px 0px 0px 0px;
  }
`
export const ResultRightBlock = styled.div`
  width: 30vw;
  padding: 0px 0px 0px 30px;
  margin: ${({ menu }) => (menu ? '77px 0px 0px 0px' : '0px 0px 0px 0px')};
  @media (min-width: 300px) and (max-width: 575px) {
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 30vw;
  }
`
export const ResultBlock = styled.div`
  width: 50vw;
  border-bottom: ${props => props.theme.border};
  margin-bottom: 20px;
  padding: 10px;
  @media (min-width: 300px) and (max-width: 575px) {
    width: 70vw;
  }
`
export const ResultsLeftBlock = styled.div`
  width: 55vw;
  padding: 0px 10px 0px 0px;
  border-right: ${props => props.theme.resultBlockBorder};
  @media (min-width: 300px) and (max-width: 575px) {
    max-width: 500px;
    border: none;
  }
`
export const ResultText = styled.a`
  color: ${props => props.theme.color};
  margin-bottom: 10px;
  text-decoration: none;
`
export const ResultTextLink = styled.a`
  text-decoration: none;
  color: rgb(125, 37, 239);
`
export const ResultTitle = styled.a`
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
`
export const ResultUpButton = styled.button`
  position: fixed;
  bottom: ${({ rocket, bottom }) => (rocket ? '1000px' : bottom)};
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: ${({ rocketJump }) => (rocketJump ? 'top' : 'center')};
  text-align: center;
  height: 60px;
  padding: 0px 10px;
  cursor: pointer;
  color: #fff;
  background: transparent;
  border: none;
  transition: ${({ rocket }) => (rocket ? 'all 0.7s ease-in' : 'none')};
  &:hover {
    align-items: top;
  }
`
export const ResultWebPageImage = styled.img`
  width: 15px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 5px;
`
export const ResultFooterStyled = styled.div`
  width: 100vw;
  background: ${props => props.theme.transBackground};
  border-top: ${props => props.theme.border};
  padding: 10px 40px 10px 20px;
  margin-top: 50px;
  color: #fff;
`
export const ResultFooterBlock = styled.div`
  color: ${props => props.theme.color};
`
