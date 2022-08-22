import styled from 'styled-components'

export const ResultsForm = styled.form`
  display: flex;
  align-items: center;
`
export const ResultButtonBlock = styled.div`
  background-color: #fff;
  border-top: 1px solid rgb(202, 198, 198);
  border-bottom: 1px solid rgb(202, 198, 198);
  button {
    font-size: 18px;
    height: 43px;
  }
  button:hover {
    font-weight: 600;
  }
`
export const ResultDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 45px;
  padding: 0px 3px;
  background-color: #fff;
  border: none;
  border-right: 1px solid rgb(202, 198, 198);
  cursor: pointer;
  font-size: 20px;
  padding: 0px 10px;
  opacity: ${({ deleteBut }) => (deleteBut ? '0.9' : '0')}};
  background-color: #fff;
`
export const ResultInput = styled.input`
  height: 45px;
  width: ${({ onFlip }) => (onFlip ? '400px' : '500px')};
  border-radius: 10px 0px 0px 10px;
  border: 1px solid rgb(202, 198, 198);
  border-right: none;
  padding-left: 10px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  @media (min-width: 300px) and (max-width: 575px) {
    max-width: 70vw;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 54vw;
  }
`
export const ResultSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 45px;
  padding: 0px 5px;
  background-color: #fff;
  border: 1px solid rgb(202, 198, 198);
  border-left: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
`
