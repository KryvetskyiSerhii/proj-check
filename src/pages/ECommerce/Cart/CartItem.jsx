import {
  CartItemImage,
  CartItemPrice,
  CartItemStyled,
  CartItemText,
  CartItemInput,
  CartItemArrow,
  CartArrowBlock,
  CartItemTotalPrice,
  CartItemDelete,
} from '../ECommerce.styled'
import arrowBottomBlack from 'assets/icons/arrowBottomBlack.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from 'redux/shoppingSlice'

export const CartItem = ({ image, title, price, amount, buttonId }) => {
  const [itemsNumber, setItemsNumber] = useState(amount)
  const dispatch = useDispatch()

  const deleteItem = e => {
    dispatch(deleteFromCart(e.target.id))
  }

  const handleNumberOfItems = e => {
    if (itemsNumber > 0) {
      e.target.id === 'up' ? setItemsNumber(itemsNumber + 1) : setItemsNumber(itemsNumber - 1)
    } else if (itemsNumber === 0)
      e.target.id === 'up' ? setItemsNumber(itemsNumber + 1) : setItemsNumber(0)
  }

  return (
    <CartItemStyled>
      <CartItemImage src={image} />
      <CartItemText>{title}</CartItemText>
      <CartItemInput value={itemsNumber} />
      <CartArrowBlock>
        <CartItemArrow
          src={arrowBottomBlack}
          rotate='180'
          bottom='0'
          top='2'
          onClick={handleNumberOfItems}
          id='up'
        />
        <CartItemArrow
          src={arrowBottomBlack}
          rotate='0'
          top='12'
          bottom='0'
          onClick={handleNumberOfItems}
          id='down'
        />
      </CartArrowBlock>

      <CartItemPrice>{price}$</CartItemPrice>
      <CartItemTotalPrice>Total: {(itemsNumber * price).toFixed(2)}$</CartItemTotalPrice>
      <CartItemDelete id={buttonId} onClick={deleteItem}>
        X
      </CartItemDelete>
    </CartItemStyled>
  )
}
