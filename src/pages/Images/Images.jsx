import { Footer } from 'components/modules/Footer/Footer'
import { ImageHeader } from './components/ImageHeader'
import { ImageSearchResult } from './components/ImageSearchResult'
import { ImagesStyled } from './ImagesStyled.styled'

export const Images = () => {
  return (
    <ImagesStyled>
      <ImageHeader />
      <ImageSearchResult />
      <Footer />
    </ImagesStyled>
  )
}
