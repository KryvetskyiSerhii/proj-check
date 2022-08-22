import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/shoppingSlice'
import {
  ShoppingCardButtonSpan,
  ShoppingCardDescription,
  ShoppingCardFoldButton,
  ShoppingCardFoldContentStyled,
  ShoppingCardTitle,
} from '../ECommerce.styled'

export const ShoppingCardFoldContent = ({ title, price, rate, description, buttonId }) => {
  const dispatch = useDispatch()
  const handleAddItemToCart = e => {
    dispatch(addToCart(e.target.id))
  }
  return (
    <ShoppingCardFoldContentStyled>
      <ShoppingCardTitle>{title}</ShoppingCardTitle>
      <ShoppingCardDescription>Price: {price}$</ShoppingCardDescription>
      <ShoppingCardDescription>Rating: {rate}</ShoppingCardDescription>
      <ShoppingCardDescription>{description}</ShoppingCardDescription>

      <ShoppingCardFoldButton id={buttonId} onClick={handleAddItemToCart}>
        <ShoppingCardButtonSpan></ShoppingCardButtonSpan>
        <ShoppingCardButtonSpan></ShoppingCardButtonSpan>
        <ShoppingCardButtonSpan></ShoppingCardButtonSpan>
        <ShoppingCardButtonSpan></ShoppingCardButtonSpan>
        Buy
      </ShoppingCardFoldButton>
    </ShoppingCardFoldContentStyled>
  )
}
