import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import logo from 'assets/images/logo.png'
import {
  fetchWebPageData,
  fetchWikiData,
  searchUni,
  setInputValue,
  onRightClickMenu,
  fetchSearxData,
} from 'redux/search'
import { closeModal } from 'redux/menu'
import { changeValue, deleteValue, switchDeleteButton } from 'redux/general'
import searchBlack from 'assets/icons/black/0.5x0.5cm/searchBlack.svg'
import closeLight from 'assets/icons/black/small/closeLight.svg'
import {
  Container,
  ImageBlock,
  StyledForm,
  SearchInput,
  StyledButton,
  ImageStyled,
} from 'components/common/CommonStyled.styled'
import { DeleteButtonBlock } from 'components/common/buttons/DeleteButtonBlock.styled'
import { DeleteButton } from 'components/common/buttons/DeleteButton.styled'
import { fetchLocationData, fetchSearxMapData } from 'redux/map'
import { setActiveItem } from 'redux/optionsSlice'
import { RightClickMenu } from './RightClickMenu'
import webBlack from 'assets/icons/new/black/small/webBlack.svg'
import fotosBlack from 'assets/icons/new/black/small/fotosBlack.svg'
import videosBlack from 'assets/icons/new/black/small/videosBlack.svg'
import newsBlack from 'assets/icons/new/black/small/newsBlack.svg'
import mapsBlack from 'assets/icons/new/black/small/mapsBlack.svg'
import academicBlack from 'assets/icons/new/black/small/academicBlack.svg'
import shoppingBlack from 'assets/icons/new/black/small/shoppingBlack.svg'
import { fetchImageData, fetchSearxImageData } from 'redux/imagesSlice'
import { fetchNewsData, fetchSearxNewsData } from 'redux/newsSlice'
import { fetchFakeShoppingData, fetchShoppingData } from 'redux/shoppingSlice'
import { fetchPopularVideo, fetchVideoData } from 'redux/videoSlice'

export const Search = () => {
  const inputValue = useRef()
  const dispatch = useDispatch()
  const deleteButton = useSelector(state => state.general.isDeleteButtonVisible)
  const searchValue = useSelector(state => state.general.inputValue)
  const modalVisible = useSelector(state => state.modal.isModalVisible)
  const showRightClickMenu = useSelector(state => state.search.rightClickMenu)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  const handleRightClickMenu = e => {
    e.preventDefault()
    dispatch(onRightClickMenu())
    setPosX(e.pageX)
    setPosY(e.pageY)
  }

  const setActiveMenuItem = () => {
    dispatch(setActiveItem('web'))
  }

  const startSearching = () => {
    const { value } = inputValue.current
    if (!value) dispatch(fetchPopularVideo())
    if (
      showRightClickMenu.web ||
      Object.values(showRightClickMenu).every(e => !e || e === '/results')
    ) {
      dispatch(fetchWikiData(inputValue.current.value))
      dispatch(setInputValue(value))
      dispatch(fetchLocationData(value))
      dispatch(fetchVideoData(value))
      dispatch(fetchWebPageData(value))
      setActiveMenuItem()
      dispatch(fetchFakeShoppingData())
    }
    if (showRightClickMenu.images) {
      dispatch(fetchImageData(value))
      dispatch(setActiveItem('images'))
    }
    if (showRightClickMenu.news) {
      dispatch(fetchNewsData(value))
      dispatch(setActiveItem('news'))
    }
    if (showRightClickMenu.videos) {
      dispatch(fetchVideoData(value))
      dispatch(setActiveItem('video'))
      // dispatch(fetchWebPageData(value))
    }
    if (showRightClickMenu.shopping) {
      dispatch(fetchFakeShoppingData())
    }
    // dispatch(fetchSearxData(value))
    // dispatch(fetchSearxImageData(value))
    // dispatch(fetchSearxNewsData(value))
    // dispatch(fetchSearxMapData(value))
    // dispatch(fetchShoppingData(value))

    if (modalVisible) {
      dispatch(closeModal())
    }
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

  return (
    <Container width='80vw'>
      <ImageBlock margin='0px 0px 30px 0px' align='center' mediaWidth='70vw'>
        <ImageStyled width='400px' src={logo} alt='logo' />
      </ImageBlock>
      <StyledForm onSubmit={startSearching} content='center'>
        <SearchInput
          width='500px'
          height='45px'
          radius='10px 0px 0px 10px'
          border='1px solid rgb(202, 198, 198)'
          size='18px'
          id='searchInput'
          name='searchInput'
          type='text'
          placeholder='Start your search'
          ref={inputValue}
          onChange={makeDeleteButtonVisible}
          value={searchValue}
          onContextMenu={handleRightClickMenu}
        />
        <DeleteButtonBlock>
          <DeleteButton deleteButton={deleteButton} type='button' onClick={deleteInputValue}>
            <ImageStyled src={closeLight} alt='close' />
          </DeleteButton>
        </DeleteButtonBlock>
        <Link to={showRightClickMenu.link}>
          <StyledButton
            type='submit'
            onClick={startSearching}
            border='1px solid rgb(202, 198, 198)'
            height='45px'
            radius='0px 10px 10px 0px'
            bg='#fff'
            bLeft='none'
          >
            {Object.values(showRightClickMenu).every(e => !e || e === '/results') && (
              <ImageStyled src={searchBlack} alt='searchButton' />
            )}
            {showRightClickMenu.web && <ImageStyled src={webBlack} alt='searchButton' />}
            {showRightClickMenu.images && <ImageStyled src={fotosBlack} alt='searchButton' />}
            {showRightClickMenu.videos && <ImageStyled src={videosBlack} alt='searchButton' />}
            {showRightClickMenu.news && <ImageStyled src={newsBlack} alt='searchButton' />}
            {showRightClickMenu.maps && <ImageStyled src={mapsBlack} alt='searchButton' />}
            {showRightClickMenu.academics && <ImageStyled src={academicBlack} alt='searchButton' />}
            {showRightClickMenu.shopping && <ImageStyled src={shoppingBlack} alt='searchButton' />}
          </StyledButton>
        </Link>
      </StyledForm>
      {showRightClickMenu.onShow && <RightClickMenu posX={posX} posY={posY} />}
    </Container>
  )
}
