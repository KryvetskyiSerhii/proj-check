import { useSelector } from 'react-redux'
import { CartStyled } from '../ECommerce.styled'
import { CartItem } from './CartItem'

export const Cart = () => {
  const cartList = useSelector(state => state.shoppingSlice.cart)
  console.log(cartList)
  return (
    <CartStyled>
      {cartList.length > 0 &&
        cartList.map(e => (
          <CartItem
            title={e.title}
            price={e.price}
            amount={e.amount}
            image={e.image}
            buttonId={e.id}
          />
        ))}
    </CartStyled>
  )
}
