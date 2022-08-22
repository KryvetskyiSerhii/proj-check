import styled from '@emotion/styled'

export const InfoBlockButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  padding: 0px 10px;
  background: none;
  border: 1px solid rgb(202, 198, 198);
  border-radius: 10px;
  cursor: pointer;
  color: ${props => props.theme.color};
  &:hover {
    background-color: rgb(49, 152, 249);
  }
`

export const InfoBlockContent = styled.div`
  width: 400px;
  padding: 20px 30px;
  color: ${props => props.theme.color};
`
export const InfoImageBlock = styled.div`
  img {
    width: 200px;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    img {
      width: 150px;
    }
  }
`
