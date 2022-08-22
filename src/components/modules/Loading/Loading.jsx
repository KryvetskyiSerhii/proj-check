import { LoadingImage, LoadingImageBlock, LoadingStyled } from './Loading.styled'
import trans from 'assets/gif/trans.gif'
import orange from 'assets/gif/orange.gif'

export const Loading = () => {
  return (
    <LoadingStyled>
      <LoadingImageBlock>
        <LoadingImage src={trans} />
      </LoadingImageBlock>
    </LoadingStyled>
  )
}
