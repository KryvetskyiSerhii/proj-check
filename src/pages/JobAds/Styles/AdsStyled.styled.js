import styled from 'styled-components'

export const AdsStyled = styled.div`
  display: grid;
  grid-template-areas: 'side main';
  grid-template-columns: 3fr 12fr;
  gap: 2px;
  max-width: 90vw;
  min-height: 100vh;
`
export const AdsCenterBlock = styled.div`
  margin: 10px 0px;
  padding-right: 10px;
  width: 40vw;
  z-index: 2;
  @media (min-width: 300px) and (max-width: 575px) {
    width: 85vw;
  }
`
export const AdsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90vw;
  @media (min-width: 300px) and (max-width: 575px) {
    display: flex;
    flex-direction: column;
  }
`
export const AdsJobsBlock = styled.div`
  overflow: auto;
  max-height: 600px;
`
