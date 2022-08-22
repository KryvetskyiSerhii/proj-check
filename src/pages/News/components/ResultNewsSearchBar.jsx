import { ResultHeaderBlock } from 'pages/Result/Styles/header/ResultHeaderStyled.styled'
import {
  ResultsForm,
  ResultInput,
  ResultButtonBlock,
  ResultDeleteButton,
  ResultSearchButton,
} from 'pages/Result/Styles/form/ResultsFrom.styled'
import { Link } from 'react-router-dom'
import searchBlack from 'assets/icons/black/0.5x0.5cm/searchBlack.svg'
import closeLight from 'assets/icons/black/small/closeLight.svg'
import { useDispatch } from 'react-redux'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  deleteNewsInputValue,
  fetchNewsData,
  setNewsInputValue,
  switchNewsDeleteButton,
} from 'redux/newsSlice'

export const ResultNewsSearchBar = ({ handleMouseOut }) => {
  const inputValue = useRef()
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.newsSlice.newsInputValue)
  const deleteButton = useSelector(state => state.newsSlice.isNewsDeleteButtonVisible)

  const startSearching = () => {
    dispatch(fetchNewsData(inputValue.current.value))
  }

  const handleChangeValue = () => {
    dispatch(setNewsInputValue(inputValue.current.value))
    dispatch(switchNewsDeleteButton(inputValue.current.value))
  }

  const deleteInputValue = () => {
    dispatch(deleteNewsInputValue())
    inputValue.current.value = ''
    dispatch(switchNewsDeleteButton(inputValue.current.value))
  }
  return (
    <ResultHeaderBlock onMouseOver={handleMouseOut}>
      <ResultsForm onSubmit={startSearching}>
        <ResultInput
          id='searchInput'
          name='searchInput'
          type='text'
          placeholder='Start your search'
          ref={inputValue}
          value={searchValue}
          onChange={handleChangeValue}
        />
        <ResultButtonBlock>
          <ResultDeleteButton type='button' deleteBut={deleteButton} onClick={deleteInputValue}>
            <ImageStyled src={closeLight} />
          </ResultDeleteButton>
        </ResultButtonBlock>
        <Link to=''>
          <ResultSearchButton type='submit' onClick={startSearching}>
            <ImageStyled src={searchBlack} alt='searchButton' />
          </ResultSearchButton>
        </Link>
      </ResultsForm>
    </ResultHeaderBlock>
  )
}
