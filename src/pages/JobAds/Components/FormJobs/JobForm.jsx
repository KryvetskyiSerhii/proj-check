import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { switchPhone, switchEmail, addJob, switchBoth } from 'redux/ads'
import * as Yup from 'yup'
import { useState } from 'react'
import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { AdsForm } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { AdsFormTitle } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { MenuList } from 'components/common/menu/MenuList.styled'
import { AdsFormItem } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { FormLabel } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { AdsFormInput } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { ErrorBlock } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { AdsTextarea } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { AdsSelect } from 'pages/JobAds/Styles/form/AdsForm.styled'
import { AdsButtonShow } from 'pages/JobAds/Styles/adsshow/AdsShowStyled.styled'
import { AdsItemRadio } from 'pages/JobAds/Styles/form/AdsForm.styled'

export const JobForm = () => {
  const countries = useSelector(state => state.ads.countries)
  const isPhoneVisible = useSelector(state => state.ads.isPhone)
  const isEmailVisible = useSelector(state => state.ads.isEmail)
  const dispatch = useDispatch()
  const style = useSelector(state => state.general)
  const [touchedTitle, setTouchedTitle] = useState(false)
  const [touchedText, setTouchedText] = useState(false)

  const makePhoneInput = () => {
    dispatch(switchPhone())
  }

  const makeEmailInput = () => {
    dispatch(switchEmail())
  }

  const makeBoth = () => {
    dispatch(switchBoth())
  }

  const addNewJob = values => {
    dispatch(
      addJob({
        title: values.newJobTitle,
        text: values.newJobText,
        countries: values.newJobCountries,
        phone: values.phone,
        email: values.email,
      })
    )
  }

  const initialValues = {
    newJobTitle: '',
    newJobText: '',
    newJobCountries: '',
    phones: '',
    email: '',
  }

  const validationSchema = Yup.object({
    newJobText: Yup.string()
      .max(100, 'Must be no more than 100 characters')
      .required('This field is required'),
    newJobTitle: Yup.string().required('This field is required'),
  })

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async value => {
      await addNewJob(value)
      await setTouchedText(true)
      await setTouchedTitle(true)
    },
    validationSchema: validationSchema,
  })

  return (
    <SimpleBlock>
      <AdsFormTitle>Post your job</AdsFormTitle>
      <AdsForm onSubmit={formik.handleSubmit}>
        <MenuList>
          <AdsFormItem>
            <FormLabel>Vacancy title</FormLabel>
            <AdsFormInput
              type='text'
              name='newJobTitle'
              id='newJobTitle'
              onChange={formik.handleChange}
              onBlur={() => setTouchedTitle(true)}
            />
            {touchedTitle && formik.errors.newJobTitle && (
              <ErrorBlock>{formik.errors.newJobTitle}</ErrorBlock>
            )}
          </AdsFormItem>
          <AdsFormItem>
            <FormLabel>Vacancy description</FormLabel>
            <AdsTextarea
              type='textarea'
              name='newJobText'
              id='newJobText'
              onChange={formik.handleChange}
              onBlur={() => setTouchedText(true)}
            />
            {touchedText && formik.errors.newJobText && (
              <ErrorBlock>{formik.errors.newJobText}</ErrorBlock>
            )}
          </AdsFormItem>
          <AdsFormItem>
            <FormLabel>Select your country</FormLabel>
            <AdsSelect name='newJobCountries' id='newJobCountries' onChange={formik.handleChange}>
              <option value='---'>------------</option>
              {countries.map(el => (
                <option value={el}>{el}</option>
              ))}
            </AdsSelect>
          </AdsFormItem>
          <AdsItemRadio>
            <SimpleBlock>
              <input
                type='radio'
                name='contact'
                value='phone'
                id='phone'
                onChange={makePhoneInput}
              />
              <FormLabel for='phone'>Phone</FormLabel>
            </SimpleBlock>
            <SimpleBlock>
              <input
                type='radio'
                name='contact'
                value='email'
                id='email'
                onChange={makeEmailInput}
              />
              <FormLabel for='email'>Email</FormLabel>
            </SimpleBlock>
            <SimpleBlock>
              <input type='radio' name='contact' value='both' id='both' onChange={makeBoth} />
              <FormLabel for='both'>Both</FormLabel>
            </SimpleBlock>
          </AdsItemRadio>
          <li>
            {isPhoneVisible && (
              <AdsFormInput
                type='phone'
                name='phone'
                id='phone'
                placeholder='Enter your phone'
                onChange={formik.handleChange}
              />
            )}
            {isEmailVisible && (
              <AdsFormInput
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                onChange={formik.handleChange}
              />
            )}
          </li>
          <li>
            <AdsButtonShow type='submit'>Post Job</AdsButtonShow>
          </li>
        </MenuList>
      </AdsForm>
    </SimpleBlock>
  )
}
