import { JobsSearchInput } from 'pages/JobAds/Styles/nav/NavJobsStyled.styled'
import { useSelector, useDispatch } from 'react-redux'
import { findTheJob, makeSearchBarVisible } from 'redux/ads'
import { SimpleBlock } from 'components/common/CommonStyled.styled'

export const SearchBarMobile = props => {
  const isVisible = useSelector(state => state.ads.isVisibleSearchBar)
  const dispatch = useDispatch()

  const searchJobs = e => {
    dispatch(findTheJob(e.target.value))
  }

  return (
    <SimpleBlock>
      {isVisible && (
        <JobsSearchInput
          width='300px'
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
