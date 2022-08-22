import { SimpleBlock, Container, ImageStyled } from 'components/common/CommonStyled.styled'
import { ContentBlocks, ContentHiddenArrow } from '../Styles/content/ContentStyled.styled'
import { ContentBlock } from './ContentBlock'
import { CONTENT_BlOCK } from 'constants/arraysConstants'
import chevronDown from 'assets/icons/chevronDown.svg'
import { useEffect, useState } from 'react'

export const Content = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 300
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    setHeight(winScroll)
    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false)
    }
  }

  return (
    <SimpleBlock>
      <Container width='90vw'>
        {isVisible && (
          <ContentHiddenArrow>
            <ImageStyled src={chevronDown} width='70px' />
          </ContentHiddenArrow>
        )}
        <ContentBlocks>
          {CONTENT_BlOCK.map(elem => (
            <ContentBlock
              animation={elem.animation}
              title={elem.title}
              imageColor={elem.imgColor}
              imageMono={elem.imgMono}
              id={elem.id}
            />
          ))}
        </ContentBlocks>
      </Container>
    </SimpleBlock>
  )
}
