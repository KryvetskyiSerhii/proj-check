import styled from '@emotion/styled'

export const ResultHeaderStyled = styled.div`
  box-sizing: border-box;
  grid-area: menu;
  padding: 0px 15px 0px 1px;
  width: 99vw;
  position: fixed;
  z-index: 30;
  background: ${props => props.theme.background};
  border-bottom: ${props => props.theme.resultHeaderBorder};
  @media (min-width: 300px) and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 10px;
  }
`
export const ResultHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1vw;
  @media (min-width: 300px) and (max-width: 575px) {
    margin-bottom: 10px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    width: 99vw;
  }
`
export const ResultHeaderButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 30px;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    position: absolute;
    right: 10px;
    top: 20px;
  }
`
export const ResultHeaderImageBlock = styled.div`
  display: block;
  img {
    width: 10vw;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    img {
      width: 150px;
    }
  }
`
export const ResultHeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 300px) and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const ResultHeaderFlipStyled = styled.div`
  right: 0vw;
  grid-area: menu;
  padding: 20px 15px 0px 15px;
  position: fixed;
  background: ${props => props.theme.background};
`
