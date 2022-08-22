import { useDispatch, useSelector } from 'react-redux'
import searchBlack from 'assets/icons/black/0.5x0.5cm/searchBlack.svg'
import {
  deleteMapValue,
  fetchLocationData,
  onModalVisible,
  setMapInputValue,
  switchMapDeleteButton,
} from 'redux/map'
import { useEffect } from 'react'
import { MapInputStyledBlock } from '../Styles/input/MapInputStyled.styled'
import { MapInputStyled } from '../Styles/input/MapInputStyled.styled'
import { MapSearchButton } from '../Styles/input/MapInputStyled.styled'
import { SimpleBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import arrowLeft from 'assets/icons/second/white/small/backLight.svg'
import { MapLink } from '../Styles/input/MapInputStyled.styled'
import closeLight from 'assets/icons/black/small/closeLight.svg'
import { MapDeleteButtonBlock } from '../Styles/input/MapInputStyled.styled'
import { MapDeleteButton } from '../Styles/input/MapInputStyled.styled'
import { useRef } from 'react'
import { MapButton } from '../Styles/input/MapInputStyled.styled'
import milestoneLight from 'assets/icons/second/white/small/milestoneLight.svg'

export const MapInput = ({ renderMap }) => {
  const inputValue = useRef()
  const dispatch = useDispatch()
  const deleteButton = useSelector(state => state.map.isDeleteButtonVisible)
  const mapValue = useSelector(state => state.map.inputValue)

  const makeDeleteButtonVisible = () => {
    dispatch(switchMapDeleteButton(inputValue.current.value))
    dispatch(setMapInputValue(inputValue.current.value))
  }
  const getAdressCoordinates = () => {
    dispatch(fetchLocationData(inputValue.current.value))
    renderMap()
  }
  const deleteValue = () => {
    dispatch(deleteMapValue())
    inputValue.current.value = ''
    dispatch(switchMapDeleteButton(inputValue.current.value))
  }

  const openModalWindow = () => {
    dispatch(onModalVisible())
  }

  useEffect(() => {
    dispatch(fetchLocationData(inputValue.current.value))
  }, [mapValue])

  return (
    <MapInputStyledBlock>
      <SimpleBlock>
        <MapLink to='/results' onClick={deleteValue}>
          <ImageStyled src={arrowLeft} alt='back' />
        </MapLink>
      </SimpleBlock>
      <MapInputStyled
        type='text'
        onChange={makeDeleteButtonVisible}
        name='adress'
        id='adress'
        value={mapValue}
        ref={inputValue}
      />
      <MapDeleteButtonBlock>
        <MapDeleteButton deleteBut={deleteButton} type='button' onClick={deleteValue}>
          <ImageStyled src={closeLight} alt='delete' />
        </MapDeleteButton>
      </MapDeleteButtonBlock>
      <MapSearchButton type='submit' onClick={getAdressCoordinates}>
        <ImageStyled src={searchBlack} alt='search' />
      </MapSearchButton>
      <SimpleBlock>
        <MapButton onClick={openModalWindow} imgwidth='30px'>
          <ImageStyled src={milestoneLight} alt='milestone' />
        </MapButton>
      </SimpleBlock>
    </MapInputStyledBlock>
  )
}
