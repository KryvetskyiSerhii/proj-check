import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { Footer } from 'components/modules/Footer/Footer'
import { MapRender } from './Components/MapRender'
import { MapStyled } from './Styles/MapStyled.styled'

export const MapMain = () => {
  return (
    <SimpleBlock>
      <MapStyled>
        <MapRender />
      </MapStyled>
      <Footer />
    </SimpleBlock>
  )
}
