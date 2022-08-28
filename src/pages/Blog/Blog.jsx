import { Nav } from 'pages/Blog/Components/BlogNav/Nav'
import { News } from 'pages/Blog/Components/News/News'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ArticleItem } from 'pages/Blog/Components/News/ArticleItem'
import { NavMobile } from 'pages/Blog/Components/BlogNav/NavMobile'
import { BlogBlock } from './Styles/BlogStyled.styled'
import { BlogMainPage } from './Styles/BlogStyled.styled'
import { BlogFooter } from './Components/News/BlogFooter'

export const Blog = props => {
  const createLinks = useSelector(state => state.articles.articleItems)
  return (
    <BlogBlock>
      <Nav store={props.store} />
      <BlogMainPage>
        <NavMobile />
        <Routes>
          <Route path='' element={<News />} />
          {createLinks.map(element => (
            <Route path={element.link} element={<ArticleItem id={element.id} />} />
          ))}
        </Routes>
        <BlogFooter />
      </BlogMainPage>
    </BlogBlock>
  )
}
