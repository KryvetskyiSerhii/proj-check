import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import {
  NewsSliderContainer,
  NewsSliderImageBlock,
  NewsSliderStyled,
  NewsSliderText,
  NewsSliderTextBlock,
  NewsSliderTitle,
} from 'pages/Blog/Styles/news/NewsStyled.styled'
import { setOnExpand } from 'redux/articles'

import { MenuLink } from 'components/common/menu/MenuLink.styled'

export const NewsSlider = () => {
  const articles = useSelector(state => state.articles.articleItems)
  const [slideIndex, setSlideIndex] = useState(1)
  const onExpand = useSelector(state => state.articles.onExpand)
  const dispatch = useDispatch()

  const handleOnExpand = () => {
    dispatch(setOnExpand('none'))
  }
  const nextSlide = () => {
    if (slideIndex !== articles.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === articles.length) {
      setSlideIndex(1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [slideIndex])

  return (
    <NewsSliderStyled>
      <NewsSliderContainer>
        {articles.map((elem, index) => (
          <MenuLink color='#fff' to={elem.link} id={elem.id} onClick={handleOnExpand}>
            <NewsSliderImageBlock key={elem.id} slideIndex={slideIndex} index={index}>
              <ImageStyled src={elem.img} alt='sliderImg' />
              <NewsSliderTextBlock>
                <NewsSliderTitle>{elem.title}</NewsSliderTitle>
                <NewsSliderText>{elem.shortText}</NewsSliderText>
              </NewsSliderTextBlock>
            </NewsSliderImageBlock>
          </MenuLink>
        ))}
      </NewsSliderContainer>
    </NewsSliderStyled>
  )
}
