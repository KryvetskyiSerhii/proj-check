import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { onAddLikes } from 'redux/articles'
import { BlogMainPage } from 'pages/Blog/Styles/BlogStyled.styled'
import {
  Container,
  SimpleBlock,
  StyledTitle,
  StyledText,
  ImageStyled,
} from 'components/common/CommonStyled.styled'
import { NewsArticleItem } from 'pages/Blog/Styles/news/NewsStyled.styled'
import { NewsArticleRight } from 'pages/Blog/Styles/news/NewsStyled.styled'
import { AnimationContent } from 'pages/Blog/Styles/news/NewsStyled.styled'
import { BlogSideMenu } from './BlogSideMenu'
import { CheckIcon } from 'components/modules/CheckIcon/CheckIcon'
import { useRef } from 'react'
import { ARTICLES } from 'constants/articlesList'
import { useEffect } from 'react'

export const ArticleItem = ({ id }) => {
  const idNumber = useParams()
  const article = useRef()
  const content = useSelector(state => state.articles.articleItems).filter(e => e.link === id)
  const [scrollPos, setScrollPos] = useState(0)
  const dispatch = useDispatch()
  const [divHeight, setDivHeight] = useState(0)

  useEffect(() => {
    setDivHeight(article.current.clientHeight)
  }, [])

  const addLike = () => {
    dispatch(onAddLikes(id))
  }

  const handleScollDown = e => {
    if (e.target.id === 'ref') {
      setScrollPos(e.target.offsetTop)

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }
  }

  const handleScrollBack = e => {
    window.scrollTo({
      top: scrollPos - 100,
      behavior: 'smooth',
    })
  }
  return (
    <BlogMainPage>
      <Container width='900px'>
        <NewsArticleItem ref={article} onClick={handleScollDown}>
          <SimpleBlock area='content'>
            <StyledTitle>{content[0].title}</StyledTitle>
            <StyledText>{content[0].text1}</StyledText>
          </SimpleBlock>
          <SimpleBlock area='content2'>
            <StyledText>{content[0].text2}</StyledText>
          </SimpleBlock>
          <NewsArticleRight>
            <ImageStyled width='300px' src={content[0].img} alt='content' />
          </NewsArticleRight>
          <AnimationContent area='content3' animateIn='animate__fadeIn'>
            <SimpleBlock>
              <StyledText>{content[0].text3}</StyledText>
            </SimpleBlock>
          </AnimationContent>
        </NewsArticleItem>
        <BlogSideMenu addLike={addLike} content={content} />
      </Container>
      <CheckIcon article={article} divHeight={divHeight} />
      <button onClick={handleScrollBack}>Get back</button>
    </BlogMainPage>
  )
}
