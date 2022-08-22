import { ShoppingCardBlock, ShoppingCardImage, ShoppingCardStyled } from '../ECommerce.styled'
import phone from 'assets/images/phone.png'
import { ShoppingCardContent } from './ShoppingCardContent'

export const ShoppingCard = () => {
  return (
    <ShoppingCardStyled>
      <ShoppingCardBlock after='Phone'>
        <ShoppingCardImage src={phone} />
        <ShoppingCardContent />
      </ShoppingCardBlock>
    </ShoppingCardStyled>
  )
}
