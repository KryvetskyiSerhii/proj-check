import { StyledA, StyledTitle, StyledText } from 'components/common/CommonStyled.styled'
import { WikiBlock } from '../Styles/wiki/WikiBlock.styled'

export const ResultWiki = props => {
  return (
    <WikiBlock>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledText dangerouslySetInnerHTML={{ __html: props.snippet }}></StyledText>
      <StyledA href={props.url} target='_blank' rel='noreferrer'>
        View more
      </StyledA>
    </WikiBlock>
  )
}
