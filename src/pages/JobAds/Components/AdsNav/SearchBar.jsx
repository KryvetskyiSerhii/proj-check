import { NavButton } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { JobsSearchInput } from 'pages/JobAds/Styles/nav/NavJobsStyled.styled'
import { useSelector, useDispatch } from 'react-redux'
import { findTheJob, makeSearchBarVisible } from 'redux/ads'
import { SimpleBlock } from 'components/common/CommonStyled.styled'

export const SearchBar = props => {
  const isVisible = useSelector(state => state.ads.isVisibleSearchBar)
  const dispatch = useDispatch()

  const searchVisible = () => {
    dispatch(makeSearchBarVisible())
  }

  const searchJobs = e => {
    dispatch(findTheJob(e.target.value))
  }

  return (
    <SimpleBlock>
      <SimpleBlock>
        <NavButton size='18px' onClick={searchVisible}>
          Explore Job Ads
        </NavButton>
      </SimpleBlock>
      {isVisible && (
        <JobsSearchInput
          width='170px'
          id='searchInput'
          name='text'
          type='text'
          onChange={searchJobs}
          placeholder='Start your search'
        />
      )}
    </SimpleBlock>
  )
}
