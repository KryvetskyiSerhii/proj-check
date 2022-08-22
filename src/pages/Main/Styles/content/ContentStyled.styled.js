import styled from '@emotion/styled'

export const ContentBlockStyled = styled.div`
  width: 20vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(246, 249, 249);
  margin-bottom: 100px;
  box-shadow: 5px 10px 10px #000;
  &:not(:last-child) {
    margin-right: 10px;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`
export const ContentBlocks = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
export const ContentTitle = styled.h3`
  margin: 5px 0px;
  text-align: center;
`
export const ContentTitleBlock = styled.div`
  height: 10vh;
  margin-bottom: 10px;
`
export const ContentHiddenArrow = styled.div`
  margin: 0 auto 80px auto;
  width: 100px;
`
