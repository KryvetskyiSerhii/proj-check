import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const ImageLink = styled(Link)`
  margin: -40px;
  img {
    width: 180px;
  }
`
export const JobsSearchInput = styled.input`
  margin-top: 10px;
  max-width: ${({ width }) => width};
  height: 30px;
  padding-left: 5px;
  border-radius: 10px;
  border: ${props => props.theme.jobsInputBorder};
  &:focus {
    outline: none;
  }
`
export const NavJobsMobileMenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 15px 0px;
  li:not(:last-child) {
    margin-right: 20px;
  }
`
export const NavJobsMobileStyled = styled.div`
  align-items: center;
  display: none;
  width: 80vw;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 10px;
  font-size: 10px;
  border-bottom: 1px solid #fff;
`
