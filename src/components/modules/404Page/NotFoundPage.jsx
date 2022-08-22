import {
  NotFoundPageBlockStyled,
  NotFoundPageImage,
  NotFoundPageLink,
  NotFoundPageLinkBlock,
} from './NotFoundPageStyled.styled'
import error from 'assets/images/error.jpg'

export const NotFoundPage = () => {
  return (
    <NotFoundPageBlockStyled>
      <NotFoundPageImage src={error} />

      <NotFoundPageLink to='/'>
        <NotFoundPageLinkBlock>Back to the main page</NotFoundPageLinkBlock>
      </NotFoundPageLink>
    </NotFoundPageBlockStyled>
  )
}
