import styled from 'styled-components'

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 45px;
  padding: 0px 5px;
  background-color: #fff;
  border: none;
  border-right: 1px solid rgba(177, 171, 171, 0.5);
  color: #000;
  cursor: pointer;
  font-size: 20px;
  opacity: ${({ deleteButton }) => (deleteButton ? '0.9' : '0')};
`
