import { SimpleBlock } from 'components/common/CommonStyled.styled'
import {
  OldNewsImage,
  OldNewsItemBlock,
  OldNewsItemContainer,
  OldNewsText,
  OldNewsTitle,
} from 'pages/Blog/Styles/news/NewsStyled.styled'
import { useDispatch, useSelector } from 'react-redux'
import { setOnExpand } from 'redux/articles'
import { ArticleItem } from 'pages/Blog/Components/News/ArticleItem'
export const OldNewsItem = ({ image, title, text, expandId }) => {
  const onExpand = useSelector(state => state.articles.onExpand)
  const dispatch = useDispatch()
  const handleOnExpand = () => {
    dispatch(setOnExpand(expandId))
  }
  return (
    <SimpleBlock>
      {onExpand === expandId ? (
        <ArticleItem id={expandId} />
      ) : (
        <OldNewsItemContainer id={expandId} onClick={handleOnExpand}>
          <OldNewsImage src={image} />
          <OldNewsItemBlock>
            <OldNewsTitle>{title}</OldNewsTitle>
            <OldNewsText>{text}</OldNewsText>
          </OldNewsItemBlock>
        </OldNewsItemContainer>
      )}
    </SimpleBlock>
  )
}
