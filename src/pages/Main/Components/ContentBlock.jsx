import {
  ContentBlockStyled,
  ContentTitle,
  ContentTitleBlock,
} from '../Styles/content/ContentStyled.styled'
import { ImageBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useDispatch, useSelector } from 'react-redux'
import { switchImageColor, switchImageMono } from 'redux/menu'

export const ContentBlock = ({ animation, imageColor, imageMono, title, id }) => {
  const dispatch = useDispatch()
  const isColor = useSelector(state => state.modal.isColor)

  const handleMouseIn = e => {
    dispatch(switchImageColor(e.target.id))
  }

  const handleMouseOut = () => {
    dispatch(switchImageMono())
  }

  return (
    <AnimationOnScroll animateIn={animation}>
      <ContentBlockStyled onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
        <ContentTitleBlock>
          <ContentTitle>{title}</ContentTitle>
        </ContentTitleBlock>
        <ImageBlock mediaWidth='150px'>
          <ImageStyled width='100px' src={isColor === id ? imageColor : imageMono} id={id} />
        </ImageBlock>
      </ContentBlockStyled>
    </AnimationOnScroll>
  )
}
