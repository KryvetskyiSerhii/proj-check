import { useDispatch, useSelector } from 'react-redux'
import { onModalVisible, setRouteFromValue, setRouteToValue } from 'redux/map'
import { MapButton } from '../Styles/input/MapInputStyled.styled'
import {
  MapModalButton,
  MapModalButtonBlock,
  MapModalInput,
  MapModalStyled,
  MapModalText,
  MapModalTitle,
  MapModalTitleBlock,
} from '../Styles/modal/MapModalStyled.styled'
import locationLight from 'assets/icons/second/white/small/locationLight.svg'
import close from 'assets/icons/white/small/close.svg'
import { fetchMapIp } from 'redux/map'
import { useEffect, useRef } from 'react'
import { ImageStyled, FlexBlock } from 'components/common/CommonStyled.styled'

export const MapModal = ({ renderMap }) => {
  const modal = useSelector(state => state.map.isMapModalVisible)
  const dispatch = useDispatch()
  const lat = useSelector(state => state.map.ip.lat)
  const fromValue = useRef()
  const toValue = useRef()

  const fromValueRedux = useSelector(state => state.map.routeCoordinates.from)
  const toValueRedux = useSelector(state => state.map.routeCoordinates.to)

  const onFromValueChange = () => {
    dispatch(setRouteFromValue(fromValue.current.value))
  }

  const onToValueChange = () => {
    dispatch(setRouteToValue(toValue.current.value))
  }

  const closeModalWindow = () => {
    dispatch(onModalVisible())
  }
  const getLocation = () => {
    dispatch(fetchMapIp())
  }
  useEffect(() => {
    renderMap()
  }, [lat])

  return (
    <MapModalStyled modal={modal}>
      <MapModalTitleBlock modal={modal}>
        <MapModalTitle modal={modal}>Choose the route</MapModalTitle>
        <MapButton>
          <ImageStyled width='20px' src={locationLight} alt='locationIP' onClick={getLocation} />
        </MapButton>
        <MapButton>
          <ImageStyled width='20px' src={close} alt='close' onClick={closeModalWindow} />
        </MapButton>
      </MapModalTitleBlock>

      <FlexBlock padding='20px 0px 0px 0px'>
        <MapModalText marginRight='10px'>From</MapModalText>
        <MapModalInput
          modal={modal}
          type='text'
          ref={fromValue}
          onChange={onFromValueChange}
          value={fromValueRedux}
        />
      </FlexBlock>
      <FlexBlock padding='40px 0px'>
        <MapModalText marginRight='28px'>To</MapModalText>
        <MapModalInput
          modal={modal}
          type='text'
          ref={toValue}
          onChange={onToValueChange}
          value={toValueRedux}
        />
      </FlexBlock>
      <MapModalButtonBlock modal={modal}>
        <MapModalButton>Search</MapModalButton>
        <MapModalButton>Cancel</MapModalButton>
      </MapModalButtonBlock>
    </MapModalStyled>
  )
}
