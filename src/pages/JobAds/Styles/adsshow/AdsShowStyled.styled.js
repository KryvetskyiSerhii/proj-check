import styled from '@emotion/styled'

export const AdsButtonShow = styled.button`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: transparent;
  padding: 0px 10px;
  height: 30px;
  cursor: pointer;
  border-radius: 10px;
  color: ${props => props.theme.color};
  border: ${props => props.theme.border};
  &:hover {
    background-color: rgb(8, 97, 119);
    color: #fff;
  }
`
export const AdsItems = styled.div`
  margin-top: 30px;
`
export const AdsItemsPos = styled.li`
  padding-bottom: 5px;
  border-bottom: ${props => props.theme.adsBorder};
  color: ${props => props.theme.color};
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`
export const AdsTextBlock = styled.div`
  color: ${props => props.theme.color};
`
