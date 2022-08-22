import {
  AboutUsHQBlock,
  AboutUsHQBStyled,
  AboutUsHQMapImage,
  AboutUsHQPin,
} from '../Styles/AboutUsMainStyled.styled'
import switzerland from 'assets/images/switzerland.jpg'
import locPointer from 'assets/icons/locPointer.svg'
import { AboutUsAdressModal } from './AboutUsAdressModal'
import { useDispatch, useSelector } from 'react-redux'
import { switchAboutUsModal } from 'redux/general'

export const AboutUsHQ = () => {
  const modal = useSelector(state => state.general.aboutUsModal)
  const dispatch = useDispatch()
  const handleModal = () => {
    dispatch(switchAboutUsModal())
  }

  return (
    <AboutUsHQBStyled>
      <AboutUsHQBlock>
        <AboutUsHQMapImage src={switzerland}></AboutUsHQMapImage>
        <AboutUsHQPin src={locPointer} modal={modal} onClick={handleModal}></AboutUsHQPin>
        <AboutUsAdressModal modal={modal} handleModal={handleModal} />
      </AboutUsHQBlock>
    </AboutUsHQBStyled>
  )
}
