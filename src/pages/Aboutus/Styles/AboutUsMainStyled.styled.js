import styled from '@emotion/styled'

export const AboutUsBlock = styled.div`
  background: none;
  background-color: rgb(231, 224, 224);
  color: #000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const AboutUsItem = styled.div`
  img {
    width: 450px;
    height: 250px;
  }
`

export const AboutUsLinkBlock = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

export const AboutUsTitleStyled = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin-top: 50px;
`
export const AboutUsHQBStyled = styled.div`
  width: 100vw;
  margin: 80px 0px 0px 0px;
  background: #fff;
  padding: 30px 0px;
`

export const AboutUsHQBlock = styled.div`
  width: 40vw;
  height: 40vh;
  margin: 0 auto;
  position: relative;
`

export const AboutUsHQMapImage = styled.img`
  width: 39vw;
  height: 39vh;
  position: absolute;
  top: 0;
  left: 0;
`
export const AboutUsHQPin = styled.img`
  position: absolute;
  top: 30%;
  left: 40%;
  width: 3vw;
  height: 5vh;
  cursor: pointer;
  transform: ${({ modal }) => (modal ? 'rotateY(180deg)' : 'none')};
  opacity: ${({ modal }) => (modal ? '0' : '1')};
  transition: all 0.5s ease-in;
  z-index: 20;
`

export const AboutUsAdressModalStyled = styled.div`
  width: 15vw;
  height: 37vh;
  background: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #000;
  position: absolute;
  top: -45%;
  left: 25%;
  opacity: ${({ modal }) => (modal ? '1' : '0')};
  transform: ${({ modal }) => (modal ? 'none' : 'rotateY(180deg)')};
  visibility: ${({ modal }) => (modal ? 'visible' : 'hidden')};
  transition: all 0.5s ease-in;
`
export const AboutUsModalImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  height: 50%;
`

export const AboutUsModalTitle = styled.h5`
  margin-top: 5px;
`

export const AboutUsModalText = styled.p`
  margin: 10px 0px;
  text-align: center;
`
export const AboutUsModalSocialBlock = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #000;
  padding: 5px 0px;
`
export const AboutUsModalSocialImage = styled.img`
  width: 17px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
export const AboutUsModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AboutUsModalCloseButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 2%;
  right: 3%;
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
`
