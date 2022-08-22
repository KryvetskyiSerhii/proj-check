import styled from '@emotion/styled'

export const AboutUsFooterStyled = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  border-top: ${props => props.theme.border};
  z-index: 1000000;
  min-height: 80px;
  padding: 10px 0px;
  img {
    cursor: pointer;
  }
`

export const AboutFooterContact = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
`
export const AboutUsFooterBlock = styled.div`
  color: ${props => props.theme.color};
`
