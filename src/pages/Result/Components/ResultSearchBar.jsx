import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchWebPageData, fetchWikiData, setInputValue } from 'redux/search'
import { changeValue, deleteValue, switchDeleteButton } from 'redux/general'
import searchBlack from 'assets/icons/black/0.5x0.5cm/searchBlack.svg'
import closeLight from 'assets/icons/black/small/closeLight.svg'
import { fetchSearchData } from 'redux/search'
import { ResultsForm } from '../Styles/form/ResultsFrom.styled'
import { ResultInput } from '../Styles/form/ResultsFrom.styled'
import { ResultButtonBlock } from '../Styles/form/ResultsFrom.styled'
import { ResultDeleteButton } from '../Styles/form/ResultsFrom.styled'
import { ResultSearchButton } from '../Styles/form/ResultsFrom.styled'
import { ResultHeaderBlock } from '../Styles/header/ResultHeaderStyled.styled'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import { fetchLocationData } from 'redux/map'

export const ResultSearchBar = ({ handleMouseOut }) => {
  const inputValue = useRef()
  const dispatch = useDispatch()
  const url = useSelector(state => state.search.url)
  const deleteButton = useSelector(state => state.general.isDeleteButtonVisible)
  const searchValue = useSelector(state => state.general.inputValue)
  const onFlip = useSelector(state => state.general.flipMenu)

  const setAPIData = async () => {
    dispatch(fetchSearchData(url))
  }

  const setWikiData = async () => {
    dispatch(fetchWikiData(inputValue.current.value))
  }

  const startSearching = () => {
    const { value } = inputValue.current
    dispatch(setInputValue(value))
    dispatch(fetchWebPageData(value))
    dispatch(fetchLocationData(value))
    setAPIData()
    setWikiData()
  }

  const makeDeleteButtonVisible = () => {
    dispatch(changeValue(inputValue.current.value))
    dispatch(switchDeleteButton(inputValue.current.value))
  }
  const deleteInputValue = () => {
    dispatch(deleteValue())
    inputValue.current.value = ''
    dispatch(switchDeleteButton(inputValue.current.value))
  }

  useEffect(() => {
    setAPIData()
  }, [url])

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
          onChange={makeDeleteButtonVisible}
          onFlip={onFlip}
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
