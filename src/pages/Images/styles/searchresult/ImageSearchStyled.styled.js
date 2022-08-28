import styled from 'styled-components'

export const ImageResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 95vw;
  min-height: 100vh;
  padding: ${({ menu }) => (menu ? '10vh 0px 0px 60px' : '13vh 0px 0px 20px')};
`

export const ImageResultItem = styled.div`
  display: relative;
  width: 300px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  font-size: 10px;
  color: #fff;
`
export const ImagesPicture = styled.img`
  width: 300px;
  height: 150px;
`
export const ImagesA = styled.a`
  color: #fff;
  text-decoration: none;
`
