import {
  AboutUsAdressModalStyled,
  AboutUsModalCloseButton,
  AboutUsModalContainer,
  AboutUsModalImage,
  AboutUsModalSocialBlock,
  AboutUsModalSocialImage,
  AboutUsModalText,
  AboutUsModalTitle,
} from '../Styles/AboutUsMainStyled.styled'
import company from 'assets/images/company.jpg'
import facebookBlack from 'assets/icons/black/small/facebookBlack.svg'
import instagramBlack from 'assets/icons/black/small/instagramBlack.svg'
import paperPlaneBlack from 'assets/icons/black/small/paperPlaneBlack.svg'
import twitterBlack from 'assets/icons/black/small/twitterBlack.svg'

export const AboutUsAdressModal = ({ modal, handleModal }) => {
  return (
    <AboutUsAdressModalStyled modal={modal}>
      <AboutUsModalContainer>
        <AboutUsModalCloseButton onClick={handleModal}>X</AboutUsModalCloseButton>
        <AboutUsModalImage src={company} />
        <AboutUsModalTitle>Inventor’s Finest AG</AboutUsModalTitle>
        <AboutUsModalText>Kleinwilhöhe 8, 6048 Horw/Switzerland</AboutUsModalText>
        <AboutUsModalSocialBlock>
          <AboutUsModalSocialImage src={facebookBlack} />
          <AboutUsModalSocialImage src={instagramBlack} />
          <AboutUsModalSocialImage src={twitterBlack} />
          <AboutUsModalSocialImage src={paperPlaneBlack} />
        </AboutUsModalSocialBlock>
      </AboutUsModalContainer>
    </AboutUsAdressModalStyled>
  )
}
