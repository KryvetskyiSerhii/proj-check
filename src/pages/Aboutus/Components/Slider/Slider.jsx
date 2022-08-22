import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { BtnSlider } from './BtnSlider'
import { SliderStyled } from 'pages/Aboutus/Styles/slider/SliderStyled.styled'
import { SliderContainer } from 'pages/Aboutus/Styles/slider/SliderStyled.styled'
import { SliderImageBlock } from 'pages/Aboutus/Styles/slider/SliderStyled.styled'
import { SliderTitle } from 'pages/Aboutus/Styles/slider/SliderStyled.styled'
import { SldierText } from 'pages/Aboutus/Styles/slider/SliderStyled.styled'
import { ImageStyled } from 'components/common/CommonStyled.styled'

export const Slider = () => {
  const images = useSelector(state => state.slider.sliderData)
  const [slideIndex, setSlideIndex] = useState(1)
  const [load, setLoad] = useState(false)
  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === images.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(images.length)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [slideIndex])

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 100)
  }, [])

  return (
    <SliderStyled>
      {/* <BtnSlider moveSlide={prevSlide} direction='prev' /> */}
      <SliderContainer load={load}>
        {images.map((elem, index) => (
          <SliderImageBlock key={elem.id} slideIndex={slideIndex} index={index}>
            <ImageStyled src={elem.img} alt='sliderImg' />
            <SliderTitle>{elem.title}</SliderTitle>
            <SldierText>{elem.text}</SldierText>
          </SliderImageBlock>
        ))}
      </SliderContainer>
      {/* <BtnSlider moveSlide={nextSlide} direction='next' /> */}
    </SliderStyled>
  )
}
