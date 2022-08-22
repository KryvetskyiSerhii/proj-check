import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showContacts } from 'redux/ads'
import {
  SimpleBlock,
  TextSwitchColor,
  StyledTitleSwitchColor,
} from 'components/common/CommonStyled.styled'
import { AdsButtonShow } from 'pages/JobAds/Styles/adsshow/AdsShowStyled.styled'
import { AdsTextBlock } from 'pages/JobAds/Styles/adsshow/AdsShowStyled.styled'

export const AdItem = ({ id, title, email, text, phone, visible, area, link }) => {
  const dispatch = useDispatch()
  const openContacts = () => {
    dispatch(showContacts(id))
  }

  return (
    <SimpleBlock>
      <StyledTitleSwitchColor>{title}</StyledTitleSwitchColor>
      <TextSwitchColor>{text}</TextSwitchColor>
      <TextSwitchColor>Country: {area}</TextSwitchColor>
      {!visible && (
        <AdsButtonShow type='button' onClick={openContacts}>
          Show contacts
        </AdsButtonShow>
      )}
      {visible && (
        <SimpleBlock>
          <AdsTextBlock>Phone: {phone}</AdsTextBlock>
          <AdsTextBlock>Email: {email}</AdsTextBlock>
        </SimpleBlock>
      )}

      <Link to={link}>Show more</Link>
    </SimpleBlock>
  )
}
