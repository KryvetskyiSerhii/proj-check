import {
  CheckButton,
  CheckIconBlock,
  CheckIconSvg,
  CircleProgressBar,
  CircleProgressSvg,
} from './CheckIconStyled.styled'
import { useState, useLayoutEffect } from 'react'

export const CheckIcon = ({ article }) => {
  const DIAMETER = 50
  const STROKE_WIDTH = 6
  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2
  const CIRCUMFERENCE = Math.PI * RADIUS * 2
  const [progress, setProgress] = useState(0)
  const position = Math.max(1 - progress, 0)
  const complete = position === 0
  const notMoved = position === 1

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (!article.current) return
      const { height } = article.current.getBoundingClientRect()
      setProgress(window.scrollY / (height - window.innerHeight))
    }
    updateHeight()
    window.addEventListener('scroll', updateHeight)
    return () => {
      window.removeEventListener('scroll', updateHeight)
    }
  }, [])

  return (
    <CheckIconBlock>
      <CheckButton complete={complete}>
        <CheckIconSvg viewBox='0 0 20 20' width='20px' height='20px'>
          <g fill='#FFF'>
            <rect y={10} width={2} height={2} />
            <rect x={2} y={12} width={2} height={2} />
            <rect x={4} y={14} width={2} height={2} />
            <rect x={6} y={16} width={2} height={2} />
            <rect x={8} y={14} width={2} height={2} />
            <rect x={10} y={12} width={2} height={2} />
            <rect x={12} y={10} width={2} height={2} />
            <rect x={14} y={8} width={2} height={2} />
            <rect x={16} y={6} width={2} height={2} />
            <rect x={18} y={4} width={2} height={2} />
          </g>
        </CheckIconSvg>
        {!notMoved && (
          <CircleProgressSvg viewBox='0 0 50 50' width='30px' height='30px'>
            <CircleProgressBar
              cx={DIAMETER / 2}
              cy={DIAMETER / 2}
              r={RADIUS}
              stroke='blue'
              fill='transparent'
              strokeWidth={STROKE_WIDTH}
              style={{
                strokeDasharray: CIRCUMFERENCE,
                strokeDashoffset: CIRCUMFERENCE * position,
              }}
            />
          </CircleProgressSvg>
        )}
      </CheckButton>
    </CheckIconBlock>
  )
}
