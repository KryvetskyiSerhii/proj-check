import {
  RightClickMenuItem,
  RightClickMenuList,
  RightClickMenuStyled,
} from '../Styles/Search.styled'
import { RIGHT_CLICK_MENU } from 'constants/arraysConstants'
import { useDispatch } from 'react-redux'
import { offRightClickMenu, switchSearchingOptions } from 'redux/search'

export const RightClickMenu = ({ posX, posY }) => {
  const dispatch = useDispatch()
  const switchSearch = e => {
    dispatch(switchSearchingOptions(e.target.id))
    dispatch(offRightClickMenu())
  }

  return (
    <RightClickMenuStyled posX={posX} posY={posY} id='rightMenu'>
      <RightClickMenuList>
        {RIGHT_CLICK_MENU.map(elem => (
          <RightClickMenuItem id={elem.id} onClick={switchSearch}>
            {elem.title}
          </RightClickMenuItem>
        ))}
      </RightClickMenuList>
    </RightClickMenuStyled>
  )
}
