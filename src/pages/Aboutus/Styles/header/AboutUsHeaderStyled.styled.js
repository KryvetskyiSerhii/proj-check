import styled, { keyframes } from 'styled-components'
import dark from 'assets/images/backgrounds/dark.jpg'
import bricks from 'assets/images/backgrounds/bricks.jpg'
import designBack from 'assets/images/backgrounds/designBack.svg'
import forest from 'assets/images/backgrounds/forest.jpg'
import bird from 'assets/images/backgrounds/bird.svg'

export const FlyCycle = keyframes`
100% {
  background-position: -900px 0;
}
`

export const FlyRightOne = keyframes`
0% {
  transform: scale(0.3) translateX(-10vw);
}

10% {
  transform: translateY(2vh) translateX(10vw) scale(0.4);
}

20% {
  transform: translateY(0vh) translateX(30vw) scale(0.5);
}

30% {
  transform: translateY(4vh) translateX(50vw) scale(0.6);
}

40% {
  transform: translateY(2vh) translateX(70vw) scale(0.6);
}

50% {
  transform: translateY(0vh) translateX(90vw) scale(0.6);
}

60% {
  transform: translateY(0vh) translateX(110vw) scale(0.6);
}

100% {
  transform: translateY(0vh) translateX(110vw) scale(0.6);
}
`
export const FlyRightTwo = keyframes`
0% {
  transform: translateY(-2vh) translateX(-10vw) scale(0.5);
}

10% {
  transform: translateY(0vh) translateX(10vw) scale(0.4);
}

20% {
  transform: translateY(-4vh) translateX(30vw) scale(0.6);
}

30% {
  transform: translateY(1vh) translateX(50vw) scale(0.45);
}

40% {
  transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
}

50% {
  transform: translateY(0vh) translateX(90vw) scale(0.45);
}

51% {
  transform: translateY(0vh) translateX(110vw) scale(0.45);
}

100% {
  transform: translateY(0vh) translateX(110vw) scale(0.45);
}
`

export const AboutUsHeaderStyled = styled.div`
  background: url(${dark});
  min-height: 750px;
  border-radius: 0px 0px 35% 35%;
`
export const AboutUsHeaderBirdsContainer = styled.div`
  z-index: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 45rem;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 168, 76, 0.6) 0%,
      rgba(255, 123, 13, 0.6) 100%
    ),
    url(${forest});
  background-blend-mode: soft-light;
  background-size: cover;
  background-position: center center;
  padding: 2rem;
`

export const AboutUsBirdBlock = styled.div`
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;
  animation-name: ${FlyRightOne};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${({ duration }) => duration};
  animation-delay: ${({ delay }) => delay};
`

export const AboutUsBird = styled.div`
  background-image: url(${bird});
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;
  animation-name: ${FlyCycle};
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;
  animation-duration: ${({ duration }) => duration};
  animation-delay: ${({ delay }) => delay};
`
