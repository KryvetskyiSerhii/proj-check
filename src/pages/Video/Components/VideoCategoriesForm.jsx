import { useFormik } from 'formik'
import {
  VideoFormBlock,
  VideoFormButton,
  VideoFormOption,
  VideoFormSelect,
} from '../Styles/VideoStyled.styled'
import { VIDEO_CATEGORIES_SEARCH, VIDEO_SORT_OPTIONS } from 'constants/arraysConstants'
import { useDispatch } from 'react-redux'
import { fetchVideoData } from 'redux/videoSlice'

export const VideoCategoriesForm = () => {
  const dispatch = useDispatch()
  const initialValues = {
    category: '',
    sort: '',
  }

  const searchCategoryVideo = values => {
    dispatch(fetchVideoData({ category: values.category, sort: values.sort }))
  }
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async value => {
      await searchCategoryVideo(value)
    },
  })

  return (
    <VideoFormBlock onSubmit={formik.handleSubmit}>
      <VideoFormSelect name='category' id='category' onChange={formik.handleChange}>
        <VideoFormOption value='---'>-----------</VideoFormOption>
        {VIDEO_CATEGORIES_SEARCH.map(el => (
          <VideoFormOption value={el.value}>{el.name}</VideoFormOption>
        ))}
      </VideoFormSelect>
      <VideoFormSelect name='sort' id='sort' onChange={formik.handleChange}>
        <VideoFormOption value=''>----------</VideoFormOption>
        {VIDEO_SORT_OPTIONS.map(el => (
          <VideoFormOption value={el.value}>{el.name}</VideoFormOption>
        ))}
      </VideoFormSelect>
      <VideoFormButton type='submit'>OK</VideoFormButton>
    </VideoFormBlock>
  )
}
