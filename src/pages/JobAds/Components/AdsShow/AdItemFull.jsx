import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  StyledTitleSwitchColor,
  TextSwitchColor,
  SimpleBlock,
} from 'components/common/CommonStyled.styled'
import { AdsTextBlock } from 'pages/JobAds/Styles/adsshow/AdsShowStyled.styled'

export const AdItemFull = () => {
  const idNumber = useParams()
  const content = useSelector(state => state.ads.adItems).filter(e => e.link == idNumber.id)

  return (
    <SimpleBlock>
      <StyledTitleSwitchColor>{content[0].title}</StyledTitleSwitchColor>
      <TextSwitchColor>{content[0].text}</TextSwitchColor>
      <TextSwitchColor> Country: {content[0].area}</TextSwitchColor>
      <SimpleBlock>
        <AdsTextBlock>Phone: {content[0].phone}</AdsTextBlock>
        <AdsTextBlock>Email: {content[0].email}</AdsTextBlock>
      </SimpleBlock>
    </SimpleBlock>
  )
}
