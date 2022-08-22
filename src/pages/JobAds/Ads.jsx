import { useSelector } from 'react-redux'
import { AdItemFull } from 'pages/JobAds/Components/AdsShow/AdItemFull'
import { AdsNav } from './Components/AdsNav/AdsNav'
import { AdsBlock } from 'pages/JobAds/Components/AdsShow/AdsBlock'
import { Route, Routes } from 'react-router-dom'
import { JobForm } from './Components/FormJobs/JobForm'
import { AdsNavMobile } from 'pages/JobAds/Components/AdsNav/AdsNavMobile'
import { AdsStyled } from './Styles/AdsStyled.styled'
import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { AdsContainer } from './Styles/AdsStyled.styled'
import { AdsCenterBlock } from './Styles/AdsStyled.styled'
import { AdsJobsBlock } from './Styles/AdsStyled.styled'

export const Ads = () => {
  const createLinks = useSelector(state => state.ads.adItems)

  return (
    <AdsStyled>
      <AdsNav />
      <SimpleBlock area='main'>
        <AdsContainer>
          <AdsCenterBlock>
            <AdsNavMobile />
            <AdsJobsBlock>
              <Routes>
                <Route path='' element={<AdsBlock />} />
                {createLinks.map(element => (
                  <Route
                    path={element.link}
                    element={<AdItemFull id={element.id} key={element.id} />}
                  />
                ))}
              </Routes>
            </AdsJobsBlock>
          </AdsCenterBlock>
          <SimpleBlock>
            <JobForm />
          </SimpleBlock>
        </AdsContainer>
      </SimpleBlock>
    </AdsStyled>
  )
}
