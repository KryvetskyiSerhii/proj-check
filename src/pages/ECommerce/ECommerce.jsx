import { ResultNavVerticalExtended } from 'pages/Result/Components/ResultNavVerticalExtended'
import { useDispatch } from 'react-redux'
import { EcommerceStyled, ShoppingCategoryBlock } from './ECommerce.styled'
import { switchMenu } from 'redux/general'
import { toggleClass } from 'redux/menu'
import ModalMenuBlack from 'components/modules/ModalMenu/ModalMenuBlack'
import { ShoppingCategory } from './ShoppingCategory'
import { ECommerceMain } from './EcommerceMain'
import { Cart } from './Cart/Cart'
import { Route, Routes } from 'react-router-dom'

export const ECommerce = () => {
  const dispatch = useDispatch()
  const handleFlipTheMenu = () => {
    dispatch(switchMenu())
  }
  const changeClass = () => {
    dispatch(toggleClass())
    console.log('hi')
  }
  return (
    <EcommerceStyled>
      <ResultNavVerticalExtended handleFlipTheMenu={handleFlipTheMenu} changeClass={changeClass} />
      <ModalMenuBlack />
      <ShoppingCategory />
      <Routes>
        <Route path='' element={<ECommerceMain />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </EcommerceStyled>
  )
}
