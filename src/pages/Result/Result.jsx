import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { letRocketFly, letRocketJump, stopRocketJump } from 'redux/result'
import { ResultHeader } from './Components/ResultHeader'
import { ResultWiki } from './Components/ResultWiki'
import rocketBlack from 'assets/icons/black/0.7x0.7cm/rocketBlack.svg'
import rocketLight from 'assets/icons/white/0.7x0.7cm/rocketLight.svg'
import { closeModal } from 'redux/menu'
import { fetchSearchData } from 'redux/search'
import { fetchVideoData, fetchVimeoVideoData } from 'redux/videoSlice'
import { ResultsStyled, ResultWebPageImage } from './Styles/ResultsStyled.styled'
import { Container, SimpleBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import { ResultMain } from './Styles/ResultsStyled.styled'
import { ResultsLeftBlock } from './Styles/ResultsStyled.styled'
import { ResultText } from './Styles/ResultsStyled.styled'
import { ResultBlock } from './Styles/ResultsStyled.styled'
import { ResultTextLink } from './Styles/ResultsStyled.styled'
import { ResultTitle } from './Styles/ResultsStyled.styled'
import { ResultButton } from './Styles/ResultsStyled.styled'
import { ResultRightBlock } from './Styles/ResultsStyled.styled'
import { ResultList } from './Styles/ResultsStyled.styled'
import { ResultUpButton } from './Styles/ResultsStyled.styled'
import { ResultHeaderFlip } from './Components/ResultHeaderFlip'
import { ResultFooter } from './Components/ResultFooter'
import { Loading } from 'components/modules/Loading/Loading'

export const Result = () => {
  const dispatch = useDispatch()
  const webPages = useSelector(state => state.search.webPages)
  const url = useSelector(state => state.search.url)
  const wiki = useSelector(state => state.search.wikiSearch)
  const [resultsVisible, setResultsVisible] = useState(15)
  const [resultWikiVisible, setResultWikiVisible] = useState(14)
  const style = useSelector(state => state.general)
  const rocket = useSelector(state => state.result.isRocketFly)
  const videoName = useSelector(state => state.search.inputValue)
  const onFlip = useSelector(state => state.general.flipMenu)
  const rocketJump = useSelector(state => state.result.isRocketJump)
  const [bottom, setBottom] = useState('10px')
  const modal = useSelector(state => state.modal.isModalVisible)
  const isLoading = useSelector(state => state.search.isLoading)
  const showMoreResults = () => {
    setResultsVisible(prevValue => prevValue + 15)
    setResultWikiVisible(prevValue => prevValue + 14)
  }

  const closeMenu = () => {
    dispatch(closeModal())
  }
  const setVideoData = async () => {
    dispatch(fetchVideoData(videoName))
    dispatch(fetchVimeoVideoData(videoName))
  }

  useEffect(() => {
    setVideoData()
  }, [videoName])

  const setAPIData = async () => {
    dispatch(fetchSearchData(url))
  }

  useEffect(() => {
    setAPIData()
    scrollToTheTop()
  }, [url])

  const topDiv = useRef()

  const scrollToTheTop = () => {
    dispatch(letRocketFly())
    topDiv.current.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      dispatch(letRocketFly())
    }, 1200)
  }

  const handleRocketJump = () => {
    dispatch(letRocketJump())
  }
  const handleStopRocketJump = () => {
    dispatch(stopRocketJump())
  }

  const listenToScroll = () => {
    const winScroll = window.innerHeight + window.scrollY
    winScroll >= document.body.scrollHeight ? setBottom('60px') : setBottom('10px')
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])

  const closeRightMenu = e => {
    if (modal && e.pageX < window.innerWidth - 200) dispatch(closeModal())
  }
  return (
    <ResultsStyled ref={topDiv} onClick={closeRightMenu}>
      {onFlip ? <ResultHeaderFlip /> : <ResultHeader />}
      {isLoading ? (
        <Loading />
      ) : (
        <SimpleBlock>
          <Routes>
            <Route
              path=''
              element={
                <Container width='85vw'>
                  <ResultMain onClick={closeMenu} menu={onFlip}>
                    <ResultsLeftBlock>
                      <SimpleBlock />
                      {webPages.slice(0, resultsVisible).map(elem => (
                        <ResultText href={elem.url}>
                          <ResultBlock>
                            <SimpleBlock margin='0px 0px 10px 0px'>
                              {elem.image.url && <ResultWebPageImage src={elem.image.url} />}
                              <ResultTextLink href={elem.url} target='_blank' rel='noreferrer'>
                                {elem.url}
                              </ResultTextLink>
                            </SimpleBlock>
                            <SimpleBlock margin='0px 0px 10px 0px'>
                              <ResultTitle href={elem.url} target='_blank' rel='noreferrer'>
                                {elem.title}
                              </ResultTitle>
                            </SimpleBlock>
                            <ResultText>{elem.description}</ResultText>
                          </ResultBlock>
                        </ResultText>
                      ))}
                      <ResultButton type='button' onClick={showMoreResults}>
                        Show more results
                      </ResultButton>
                    </ResultsLeftBlock>
                    <ResultRightBlock menu={onFlip}>
                      <ResultList style={style}>
                        {wiki.slice(0, resultWikiVisible).map(elem => {
                          const url = `https://en.wikipedia.org/?curid=${elem.pageid}`
                          return <ResultWiki title={elem.title} snippet={elem.snippet} url={url} />
                        })}
                      </ResultList>
                      <ResultUpButton
                        rocket={rocket}
                        type='button'
                        bottom={bottom}
                        rocketJump={rocketJump}
                      >
                        <ImageStyled
                          src={style.darkStyle ? rocketLight : rocketBlack}
                          alt='arrowicon'
                          onClick={scrollToTheTop}
                          onMouseOver={handleRocketJump}
                          onMouseOut={handleStopRocketJump}
                        />
                      </ResultUpButton>
                    </ResultRightBlock>
                  </ResultMain>
                </Container>
              }
            />
          </Routes>
          <ResultFooter />
        </SimpleBlock>
      )}
    </ResultsStyled>
  )
}
