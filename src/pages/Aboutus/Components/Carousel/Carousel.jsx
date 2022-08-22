import { useSelector } from 'react-redux'
import { useState, useEffect, Children, cloneElement } from 'react'
import left from 'assets/icons/arrows/left.svg'
import right from 'assets/icons/arrows/right.svg'
import { SimpleBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import {
  CarouselBlock,
  CarouselMilestoneText,
} from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import { CarouselContainer } from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import { CarouselWindow } from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import { CarouselItemContainer } from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import { CarouselArrowLeft } from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import { CarouselArrowRight } from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import { CarouselDots } from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import { CarouselDotItem } from 'pages/Aboutus/Styles/carousel/CarouselStyled.styled'
import ArrowKeysReact from 'arrow-keys-react/lib/ArrowKeysReact'

export const Carousel = ({ children }) => {
  const PAGE_WIDTH = 850
  const DOT_WIDTH = 103
  const [dotOffset, setDotOffset] = useState(309)
  const images = useSelector(state => state.slider.carouselData)
  const [slideIndex, setSlideIndex] = useState(1)
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setPages(
      Children.map(children, child =>
        cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      )
    )
  }, [])

  const handleLeftArrowClick = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
      setOffset(currentOffset => {
        const newOffset = currentOffset + PAGE_WIDTH
        return Math.min(newOffset, 0)
      })
      setDotOffset(currentOffset => {
        const newOffset = currentOffset + DOT_WIDTH
        return Math.min(newOffset, 0)
      })
    }
  }

  const handleRightArrowClick = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1)
      setOffset(currentOffset => {
        const newOffset = currentOffset - PAGE_WIDTH
        const maxOffest = -(PAGE_WIDTH * (pages.length - 1))
        return Math.max(newOffset, maxOffest)
      })
      setDotOffset(currentOffset => {
        const newOffset = currentOffset - DOT_WIDTH
        const maxOffset = -(DOT_WIDTH * (pages.length - 1))
        return Math.max(newOffset, maxOffset)
      })
    }
  }
  const moveDot = index => {
    if (index > slideIndex) {
      setSlideIndex(index)
      setOffset(currentOffset => {
        const newOffset = currentOffset - PAGE_WIDTH * (index - slideIndex)
        const maxOffest = -(PAGE_WIDTH * (pages.length - 1))
        return Math.max(newOffset, maxOffest)
      })
      setDotOffset(currentOffset => {
        const newOffset = currentOffset - DOT_WIDTH * (index - slideIndex)
        const maxOffset = -(DOT_WIDTH * (pages.length - 1))
        return Math.max(newOffset, maxOffset)
      })
    } else {
      setSlideIndex(index)
      setOffset(currentOffset => {
        const newOffset = currentOffset + PAGE_WIDTH * (slideIndex - index)
        return Math.min(newOffset, 0)
      })
      setDotOffset(currentOffset => {
        const newOffset = currentOffset + DOT_WIDTH * (slideIndex - index)
        return Math.min(newOffset, 0)
      })
    }
  }

  ArrowKeysReact.config({
    left: () => {
      handleLeftArrowClick()
    },
    right: () => {
      handleRightArrowClick()
    },
  })

  return (
    <SimpleBlock {...ArrowKeysReact.events} tabIndex='1'>
      <CarouselBlock>
        <CarouselArrowLeft
          index={slideIndex}
          tabIndex='0'
          role='button'
          onClick={handleLeftArrowClick}
        >
          <ImageStyled src={left} alt='left' />
        </CarouselArrowLeft>
        <CarouselContainer>
          <CarouselWindow>
            <CarouselItemContainer
              style={{
                transform: `translateX(${offset}px)`,
              }}
            >
              {pages}
            </CarouselItemContainer>
          </CarouselWindow>
        </CarouselContainer>
        <CarouselArrowRight
          index={slideIndex}
          images={images}
          onClick={handleRightArrowClick}
          role='button'
          tabIndex='0'
        >
          <ImageStyled src={right} alt='right' />
        </CarouselArrowRight>
      </CarouselBlock>

      <CarouselDots
        style={{
          transform: `translateX(${dotOffset}px)`,
        }}
      >
        {images.map((elem, index) => (
          <CarouselDotItem
            slideIndex={slideIndex}
            index={index}
            role='button'
            tabIndex='0'
            onClick={() => {
              moveDot(index + 1)
            }}
          >
            <CarouselMilestoneText slideIndex={slideIndex} index={index}>
              {elem.milestone}
            </CarouselMilestoneText>
          </CarouselDotItem>
        ))}
      </CarouselDots>
    </SimpleBlock>
  )
}
