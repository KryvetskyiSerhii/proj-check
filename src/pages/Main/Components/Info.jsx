import { useDispatch, useSelector } from 'react-redux'
import timer from 'assets/icons/timer.svg'
import { closeModal } from 'redux/menu'
import {
  SimpleBlock,
  Container,
  FlexBlock,
  StyledText,
  H1TitleStyled,
  ImageStyled,
} from 'components/common/CommonStyled.styled'
import { InfoBlockContent } from '../Styles/info/InfoStyled.styled'
import { InfoBlockButton } from '../Styles/info/InfoStyled.styled'
import { InfoImageBlock } from '../Styles/info/InfoStyled.styled'

export const Info = () => {
  const dispatch = useDispatch()
  const closeMenu = () => {
    dispatch(closeModal())
  }

  return (
    <SimpleBlock margin='50px 0px' onClick={closeMenu}>
      <Container width='60vw'>
        <FlexBlock width='50vw'>
          <InfoBlockContent>
            <H1TitleStyled>We will give you the exact result you need</H1TitleStyled>
            <StyledText margin='30px 0px'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, odit
            </StyledText>
            <InfoBlockButton type='button'>Learn more</InfoBlockButton>
          </InfoBlockContent>
          <InfoImageBlock>
            <ImageStyled src={timer} alt='timer' />
          </InfoImageBlock>
        </FlexBlock>
      </Container>
    </SimpleBlock>
  )
}
