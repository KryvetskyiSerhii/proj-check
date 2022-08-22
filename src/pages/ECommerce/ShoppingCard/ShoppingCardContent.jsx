import {
  ShoppingCardButton,
  ShoppingCardContentStyled,
  ShoppingCardPrice,
  ShoppingCardRate,
  ShoppingCardTitle,
} from '../ECommerce.styled'

export const ShoppingCardContent = () => {
  return (
    <ShoppingCardContentStyled>
      <ShoppingCardTitle>Phone</ShoppingCardTitle>
      <ShoppingCardPrice>100$</ShoppingCardPrice>
      <ShoppingCardRate>4.4</ShoppingCardRate>
      <ShoppingCardButton>Buy</ShoppingCardButton>
    </ShoppingCardContentStyled>
  )
}
