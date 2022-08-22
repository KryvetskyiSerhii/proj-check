import {
  ShoppingCardFoldCircle,
  ShoppingCardFoldImage,
  ShoppingCardFoldStyled,
} from '../ECommerce.styled'
import phone from 'assets/images/phone.png'
import { ShoppingCardFoldContent } from './ShoppingCardFoldContent'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ShoppingCardFold = ({ image, title, rate, price, description, buttonId }) => {
  const cart = useSelector(state => state.shoppingSlice.cart)
  console.log(cart)

  useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <ShoppingCardFoldStyled>
      <ShoppingCardFoldCircle />
      <ShoppingCardFoldImage src={image} />
      <ShoppingCardFoldContent
        price={price}
        title={title}
        rate={rate}
        description={description}
        buttonId={buttonId}
      />
    </ShoppingCardFoldStyled>
  )
}
