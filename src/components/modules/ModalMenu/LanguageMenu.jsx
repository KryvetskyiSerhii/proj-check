import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from 'redux/general'
import { ListLanguage, ListLanguageItem } from './styles/ModalMenuBlock.styled'
import i18n from 'assets/translation/i18n'

export const LanguageMenu = () => {
  const language = useSelector(state => state.general.language)
  const dispatch = useDispatch()

  const handlePageLanguage = lng => {
    i18n.changeLanguage(lng)
    dispatch(changeLanguage(lng))
  }

  return (
    <ListLanguage>
      <ListLanguageItem
        id='en'
        onClick={() => {
          handlePageLanguage('en')
        }}
      >
        English
      </ListLanguageItem>
      <ListLanguageItem
        id='de'
        onClick={() => {
          handlePageLanguage('de')
        }}
      >
        Deutsch
      </ListLanguageItem>
    </ListLanguage>
  )
}
