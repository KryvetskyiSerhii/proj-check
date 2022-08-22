import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { MapInput } from './MapInput'
import { MapWrapBlock } from '../Styles/render/MapWrapBlock.styled'
import { MapWindow } from '../Styles/render/MapWindow.styled'
import { Container } from 'components/common/CommonStyled.styled'
import { MapModal } from './MapModal'

export const MapRender = () => {
  const coordinates = useSelector(state => state.map)
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [zoom] = useState(10)
  const [API_KEY] = useState('ciIcRLdEWxdk5UYhs2Uk')

  const renderCurrentMap = () => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [coordinates.lng, coordinates.lat],
      zoom,
    })
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right')
    new maplibregl.Marker({ color: '#FF0000' })
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map.current)
  }

  useEffect(() => {
    if (map.current) return
    renderCurrentMap()
  })

  return (
    <Container width='98vw'>
      <MapInput renderMap={renderCurrentMap} />
      <MapModal renderMap={renderCurrentMap} />
      <MapWrapBlock>
        {coordinates.lat !== 0 && coordinates.lng !== 0 && <MapWindow ref={mapContainer} />}
      </MapWrapBlock>
    </Container>
  )
}
