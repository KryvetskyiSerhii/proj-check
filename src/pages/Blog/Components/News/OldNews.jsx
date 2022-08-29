import { OldNewsStyled } from 'pages/Blog/Styles/news/NewsStyled.styled'
import { ARTICLES } from 'constants/articlesList'
import { OldNewsItem } from './OldNewsItem'
import { useSelector } from 'react-redux'

export const OldNews = () => {
  const articles = useSelector(state => state.articles.articleItems)
  return (
    <OldNewsStyled>
      {ARTICLES.map(el => (
        <OldNewsItem
          key={el.id}
          image={el.img}
          title={el.title}
          text={el.shortText}
          expandId={el.id}
        />
      ))}
    </OldNewsStyled>
  )
}
