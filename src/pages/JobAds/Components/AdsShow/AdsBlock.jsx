import { AdItem } from './AdItem'
import { useSelector } from 'react-redux'
import { AdsItems } from 'pages/JobAds/Styles/adsshow/AdsShowStyled.styled'
import { MenuList } from 'components/common/menu/MenuList.styled'
import { AdsItemsPos } from 'pages/JobAds/Styles/adsshow/AdsShowStyled.styled'

export const AdsBlock = () => {
  const adsItems = useSelector(state => state.ads.adItems)

  return (
    <AdsItems>
      <MenuList>
        {adsItems.map(el => (
          <AdsItemsPos>
            <AdItem
              title={el.title}
              text={el.text}
              id={el.id}
              area={el.area}
              phone={el.phone}
              email={el.email}
              key={el.id}
              link={el.link}
              visible={el.isVisible}
            />
          </AdsItemsPos>
        ))}
      </MenuList>
    </AdsItems>
  )
}
