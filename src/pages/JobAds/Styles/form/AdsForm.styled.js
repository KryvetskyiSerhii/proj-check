import styled from '@emotion/styled'

export const AdsForm = styled.form`
  padding: 40px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color};
  width: 30vw;
  @media (min-width: 300px) and (max-width: 575px) {
    max-width: 300px;
  }
`
export const AdsFormInput = styled.input`
  width: 370px;
  height: 30px;
  padding-left: 10px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    width: 90vw;
  }
`
export const AdsFormItem = styled.li`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`
export const AdsFormTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
  color: ${props => props.theme.color};
`
export const AdsItemRadio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 300px) and (max-width: 575px) {
    width: 90vw;
  }
`
export const AdsSelect = styled.select`
  width: 350px;
  @media (min-width: 300px) and (max-width: 575px) {
    width: 90vw;
  }
`
export const AdsTextarea = styled.textarea`
  width: 370px;
  height: 150px;
  padding: 5px;
  &:focus {
    outline: none;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    width: 90vw;
  }
`
export const ErrorBlock = styled.div`
  color: red;
`
export const FormLabel = styled.label`
  margin-bottom: 10px;
`
