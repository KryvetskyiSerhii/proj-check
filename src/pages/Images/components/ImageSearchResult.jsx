import { StyledA, StyledTitle } from 'components/common/CommonStyled.styled'
import { useSelector } from 'react-redux'
import {
  ImageResultContainer,
  ImagesPicture,
  ImageResultItem,
  ImagesA,
} from '../styles/searchresult/ImageSearchStyled.styled'

export const ImageSearchResult = () => {
  const images = useSelector(state => state.imagesSlice.images)
  const onFlip = useSelector(state => state.general.flipMenu)
  const inputValue = useSelector(state => state.search.inputValue)
  return (
    <ImageResultContainer menu={onFlip}>
      {images.map(elem => (
        <ImageResultItem>
          <ImagesA href={elem.webpageUrl}>
            <ImagesPicture src={elem.url} />
            <StyledTitle>{elem.title}</StyledTitle>
            <StyledA href={elem.webpageUrl}>{elem.webpageUrl}</StyledA>
          </ImagesA>
        </ImageResultItem>
      ))}
    </ImageResultContainer>
  )
}
