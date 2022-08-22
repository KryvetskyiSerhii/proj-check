import styled from '@emotion/styled'

export const CheckIconSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const CheckButton = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  border: 0;
  background-color: ${({ complete }) => (complete ? 'blue' : '#fff')};
`
export const CircleProgressSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
`

export const CircleProgressBar = styled.circle``

export const CheckIconBlock = styled.div`
  position: fixed;
  top: 40vh;
  right: 30px;
`
