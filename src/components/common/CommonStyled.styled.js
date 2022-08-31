import styled from '@emotion/styled'

export const StyledButton = styled.button`
  background: transparent;
  border: ${({ border }) => border};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${({ height }) => height};
  padding: 0px 3px;
  background-color: ${({ bg }) => bg};
  border-radius: ${({ radius }) => radius};
  border-left: ${({ bLeft }) => bLeft};
  z-index: 10;
`
export const Container = styled.div`
  max-width: ${({ width }) => width};
  padding: 0 10px;
  margin: 0 auto;
`
export const FlexBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => padding};
  width:${({ width }) => width}
  height:${({ height }) => height}
  margin:${({ margin }) => margin}
`
export const StyledForm = styled.form`
  display: flex;
  justify-content: ${({ content }) => content};
  position: relative;
`
export const H1TitleStyled = styled.h1``

export const ImageBlock = styled.div`
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  img {
    width: ${({ imgwidth }) => imgwidth};
    border-radius: ${({ imgradius }) => imgradius};
  }

  @media (min-width: 300px) and (max-width: 575px) {
    img {
      width: ${({ mediaWidth }) => mediaWidth};
    }
  }
`
export const ImageStyled = styled.img`
  width: ${({ width }) => width};
`
export const LabelStyled = styled.label``

export const NavGeneralStyled = styled.nav``

export const SearchInput = styled.input`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};
  border-right: none;
  padding-left: 10px;
  font-size: ${({ size }) => size};
  margin-top: ${({ marginTop }) => marginTop};
  &:focus {
    outline: none;
  }
`
export const SimpleBlock = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  grid-area: ${({ area }) => area};
  &:focus {
    outline: none;
  }
`
export const StyledA = styled.a``

export const StyledTitle = styled.h3`
  font-size: ${({ size }) => size};
  font-weight: 600;
  height: ${({ height }) => height};
`
export const StyledTitleSwitchColor = styled.h3`
  color: ${props => props.theme.color};
`
export const StyledText = styled.p`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  text-align: ${({ align }) => align};
`
export const TextSwitchColor = styled.p`
  color: ${props => props.theme.color};
`
export const ArticleTextRef = styled.span`
  color: purple;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
