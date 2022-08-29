import { useSelector } from 'react-redux'

import React from 'react'
import { SimpleBlock, Container } from 'components/common/CommonStyled.styled'
import { NewsBlocks } from 'pages/Blog/Styles/news/NewsStyled.styled'

import { NewsBlockContainer } from 'pages/Blog/Styles/BlogStyled.styled'
import { OldNews } from './OldNews'
import { NewsSlider } from './NewsSlider'
export const News = () => {
  const articles = useSelector(state => state.articles.articleItems)
  return (
    <SimpleBlock padding='20px'>
      <Container width='80vw'>
        <NewsBlockContainer>
          <NewsBlocks>
            <NewsSlider />
          </NewsBlocks>
          <OldNews />
        </NewsBlockContainer>
      </Container>
    </SimpleBlock>
  )
}
