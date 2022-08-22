import { useSelector, useDispatch } from 'react-redux'
import { searchBarIsVisible } from 'redux/menu'
import { scrollToTheElement } from 'redux/articles'
import { useFormik } from 'formik'
import maginfier from 'assets/icons/maginfier.svg'
import { useEffect } from 'react'
import { SimpleBlock, SearchInput, ImageStyled } from 'components/common/CommonStyled.styled'
import { NavButton } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { SearchForm } from 'pages/Blog/Styles/nav/NavStyled.styled'
import { SearchButton } from 'pages/Blog/Styles/nav/NavStyled.styled'

export const LocalSearch = props => {
  const { articleItems } = useSelector(state => state.articles)
  const isVisible = useSelector(state => state.modal.isSearchBarVisible)
  const dispatch = useDispatch()
  const style = useSelector(state => state.general)
  const searchVisible = () => {
    dispatch(searchBarIsVisible())
  }

  const initialValues = {
    text: '',
  }

  const findPost = () => {
    const findId = articleItems.filter(e => e.isFound === true)[0].id
    const element = document.getElementById(findId)
    element.scrollIntoView({ behavior: 'smooth' })
    formik.values.text = ''
  }

  useEffect(() => {
    articleItems.filter(e => e.isFound === true).length > 0 && findPost()
  }, [articleItems])

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      dispatch(scrollToTheElement(values.text))
    },
  })

  return (
    <SimpleBlock>
      <SimpleBlock>
        <NavButton size='18px' onClick={searchVisible}>
          Search
        </NavButton>
      </SimpleBlock>
      {isVisible && (
        <SearchForm onSubmit={formik.handleSubmit}>
          <SearchInput
            width='160px'
            height='30px'
            radius='10px 0px 0px 10px'
            border='none'
            id='searchInput'
            name='text'
            type='text'
            onChange={formik.handleChange}
            placeholder='Search Blog'
            value={formik.values.text}
          />
          <SearchButton type='submit'>
            <ImageStyled src={maginfier} alt='searchButton' />
          </SearchButton>
        </SearchForm>
      )}
    </SimpleBlock>
  )
}
