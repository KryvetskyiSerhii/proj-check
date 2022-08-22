import { useDispatch, useSelector } from 'react-redux'
import {
  ResultNewsBlockA,
  ResultNewsBlockStyled,
  ResultNewsText,
  ResultNewsTitle,
  ResultNewsItem,
  ResultNewsImage,
  ResultNewsA,
  ResultNewsImageBlock,
} from '../ResultNewsStyled.styled'
import { useEffect, useState } from 'react'
import { ResultButton } from 'pages/Result/Styles/ResultsStyled.styled'
import { fetchNewsData } from 'redux/newsSlice'

export const ResultNewsMainBlock = () => {
  const newsList = useSelector(state => state.newsSlice.newsList)
  const [resultsVisible, setResultsVisible] = useState(15)
  const inputValue = useSelector(state => state.newsSlice.newsInputValue)
  const dispatch = useDispatch()

  const searchNewsData = () => {
    dispatch(fetchNewsData(inputValue))
  }
  useEffect(() => {
    searchNewsData()
  }, [inputValue])

  const showMoreResults = () => {
    setResultsVisible(prevValue => prevValue + 15)
  }
  return (
    <ResultNewsBlockStyled>
      {newsList?.slice(0, resultsVisible).map(elem => (
        <ResultNewsItem>
          <ResultNewsBlockA href={elem.url}>
            <ResultNewsImageBlock>
              <ResultNewsImage src={elem.image.url} />
              <ResultNewsTitle>{elem.title}</ResultNewsTitle>
            </ResultNewsImageBlock>
            <ResultNewsText>{elem.description}</ResultNewsText>
            <ResultNewsA href={elem.url}>{elem.url}</ResultNewsA>
          </ResultNewsBlockA>
        </ResultNewsItem>
      ))}
      <ResultButton type='button' onClick={showMoreResults}>
        Show more results
      </ResultButton>
    </ResultNewsBlockStyled>
  )
}
