import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { useDispatch, useSelector } from 'react-redux'
import { ResultSearchBar } from '.'
import { ResultHeaderFlipStyled } from '../Styles/header/ResultHeaderStyled.styled'
import { toggleClass } from 'redux/menu'
import { switchMenu } from 'redux/general'
import ModalMenuBlack from 'components/modules/ModalMenu/ModalMenuBlack'
import { ResultNavVerticalExtended } from './ResultNavVerticalExtended'

export const ResultHeaderFlip = () => {
  const dispatch = useDispatch()
  const style = useSelector(state => state.general)
  const changeClass = () => {
    dispatch(toggleClass())
  }

  const handleFlipTheMenu = () => {
    dispatch(switchMenu())
  }
  return (
    <ResultHeaderFlipStyled>
      <SimpleBlock />
      <ResultSearchBar />
      <ResultNavVerticalExtended
        changeClass={changeClass}
        handleFlipTheMenu={handleFlipTheMenu}
        flipButton={true}
      />
      <ModalMenuBlack />
    </ResultHeaderFlipStyled>
  )
}
