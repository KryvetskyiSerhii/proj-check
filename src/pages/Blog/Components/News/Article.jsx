import { useSelector } from 'react-redux'
import { NewsArticleBlock, NewsText } from 'pages/Blog/Styles/news/NewsStyled.styled'
import {
  StyledTitle,
  StyledText,
  ImageBlock,
  ImageStyled,
} from 'components/common/CommonStyled.styled'
import { NewsTextBlock } from 'pages/Blog/Styles/news/NewsStyled.styled'

export const Article = props => {
  return (
    <NewsArticleBlock id={props.id}>
      <StyledTitle>{props.title}</StyledTitle>
      <NewsTextBlock>
        <NewsText height='30%' padding='0px 5px' align='center'>
          {props.text}
        </NewsText>
      </NewsTextBlock>

      <ImageBlock height='50%'>
        <ImageStyled src={props.img} alt='news' />
      </ImageBlock>
    </NewsArticleBlock>
  )
}
