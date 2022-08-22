import left from 'assets/icons/arrows/left.svg'
import right from 'assets/icons/arrows/right.svg'
import { ImageStyled, SimpleBlock } from 'components/common/CommonStyled.styled'
import { SliderButton } from 'pages/Aboutus/Styles/slider/SliderStyled.styled'

export const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <SimpleBlock>
      <SliderButton direction={direction} type='button' onClick={moveSlide}>
        <ImageStyled src={direction === 'next' ? right : left} alt='direction' />
      </SliderButton>
    </SimpleBlock>
  )
}
