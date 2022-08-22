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
import { fetchVideoData, fetchVimeoVideoData, setVideoInputValue } from 'redux/videoSlice'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import { useRef } from 'react'
import { deleteValue, switchVideoDeleteButton } from 'redux/videoSlice'
import { useSelector } from 'react-redux'

export const VideoSearchBar = ({ handleMouseOut }) => {
  const inputValue = useRef()
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.videoSlice.videoInputValue)
  const deleteButton = useSelector(state => state.videoSlice.isVideoDeleteButtonVisible)

  const startSearching = () => {
    dispatch(fetchVideoData(inputValue.current.value))
    dispatch(fetchVimeoVideoData(inputValue.current.value))
  }

  const handleChangeValue = () => {
    dispatch(setVideoInputValue(inputValue.current.value))
    dispatch(switchVideoDeleteButton(inputValue.current.value))
  }

  const deleteInputValue = () => {
    dispatch(deleteValue())
    inputValue.current.value = ''
    dispatch(switchVideoDeleteButton(inputValue.current.value))
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
