import { useSelector } from 'react-redux'
import { ShoppingMainStyled } from './ECommerce.styled'
import { ShoppingCard } from './ShoppingCard/ShoppingCard'
import { ShoppingCardFold } from './ShoppingCard/ShoppingCardFold'
import { Link } from 'react-router-dom'

export const ECommerceMain = () => {
  const shoppingList = useSelector(state => state.shoppingSlice.shopping)

  return (
    <ShoppingMainStyled>
      {shoppingList &&
        shoppingList.map(e => (
          <ShoppingCardFold
            price={e.price}
            title={e.title}
            rate={e.rating.rate}
            image={e.image}
            description={e.description}
            buttonId={e.id}
          />
        ))}
      <ShoppingCardFold />
      <Link to='/ecommerce/cart'>Cart</Link>
    </ShoppingMainStyled>
  )
}
