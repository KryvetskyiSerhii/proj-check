import {
  BlogSideMenuContainer,
  BlogSideMenuItem,
  BlogSideMenuList,
  BlogSideMenuStyled,
} from 'pages/Blog/Styles/news/NewsStyled.styled'
import { NewsHeaderBtn } from 'pages/Blog/Styles/news/NewsStyled.styled'
import { LikeBtn } from 'pages/Blog/Styles/news/NewsStyled.styled'
import { SOCIAL_NETWORKS } from 'constants/arraysConstants'
import { ImageStyled } from 'components/common/CommonStyled.styled'
import { useSelector } from 'react-redux'

export const BlogSideMenu = ({ content, addLike }) => {
  const style = useSelector(state => state.general)
  return (
    <BlogSideMenuStyled>
      <BlogSideMenuContainer>
        <BlogSideMenuList>
          <BlogSideMenuItem>
            <NewsHeaderBtn type='button'>Share</NewsHeaderBtn>
          </BlogSideMenuItem>
          <BlogSideMenuItem>
            <LikeBtn onClick={addLike}>{content[0].likes} likes</LikeBtn>
          </BlogSideMenuItem>
          {SOCIAL_NETWORKS.map(elem => (
            <BlogSideMenuItem>
              <ImageStyled src={style.darkStyle ? elem.imgLight : elem.imgBlack} />
            </BlogSideMenuItem>
          ))}
        </BlogSideMenuList>
      </BlogSideMenuContainer>
    </BlogSideMenuStyled>
  )
}
