import { useSelector } from 'react-redux'
import { Article } from './Article'
import React from 'react'
import { SimpleBlock, Container } from 'components/common/CommonStyled.styled'
import { NewsBlocks } from 'pages/Blog/Styles/news/NewsStyled.styled'
import { MenuLink } from 'components/common/menu/MenuLink.styled'
import { ARTICLES } from 'constants/articlesList'

export const News = () => {
  const articles = useSelector(state => state.articles.articleItems)
  return (
    <SimpleBlock padding='20px'>
      <Container width='900px'>
        <NewsBlocks>
          {articles.map(element => (
            <MenuLink color='#000' to={element.link}>
              <Article
                id={element.id}
                title={element.title}
                text={element.shortText}
                img={element.img}
              />
            </MenuLink>
          ))}
        </NewsBlocks>
      </Container>
    </SimpleBlock>
  )
}
