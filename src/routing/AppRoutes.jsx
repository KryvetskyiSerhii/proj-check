import { NotFoundPage } from 'components/modules/404Page/NotFoundPage'
import { AboutUsMain } from 'pages/Aboutus/AboutUsMain'
import { Blog } from 'pages/Blog/Blog'
import { ArticleItem } from 'pages/Blog/Components'
import { ECommerce } from 'pages/ECommerce/ECommerce'
import { Images } from 'pages/Images/Images'
import { Ads } from 'pages/JobAds/Ads'
import { AdItemFull } from 'pages/JobAds/Components'
import { SignUp } from 'pages/Login/Components'
import { Login } from 'pages/Login/Login'
import { Main } from 'pages/Main/Main'
import { MapMain } from 'pages/Map/MapMain'
import { ResultNews } from 'pages/News/ResultNews'
import { Result } from 'pages/Result/Result'
import { VimeoVideo } from 'pages/Video/Components/VimeoVideo'
import { VideoMain } from 'pages/Video/VideoMain'
import { Route, Routes } from 'react-router-dom'
import { locations } from './locations'
import { Cart } from 'pages/ECommerce/Cart/Cart'

export const AppRoutes = () => {
  const routes = [
    {
      id: 1,
      path: locations.main,
      exact: true,
      component: <Main />,
      name: 'Main',
    },
    {
      id: 2,
      path: locations.blog,
      exact: true,
      component: <Blog />,
      name: 'Blog',
      subPath: {
        path: locations.articleItem,
        component: <ArticleItem />,
      },
    },
    {
      id: 3,
      path: locations.login,
      exact: true,
      component: <Login />,
      name: 'Login',
    },
    {
      id: 4,
      path: locations.signUp,
      exact: true,
      component: <SignUp />,
      name: 'SignUp',
    },
    {
      id: 5,
      path: locations.ads,
      exact: true,
      component: <Ads />,
      name: 'Ads',
      subPath: {
        path: locations.adItemFull,
        component: <AdItemFull />,
      },
    },
    {
      id: 6,
      path: locations.results,
      exact: true,
      component: <Result />,
      name: 'Results',
    },
    {
      id: 7,
      path: locations.videoMain,
      exact: true,
      component: <VideoMain />,
      name: 'VideoMain',
    },
    {
      id: 8,
      path: locations.vimeoVideos,
      exact: true,
      component: <VimeoVideo />,
      name: 'VimeoVideo',
    },
    {
      id: 9,
      path: locations.maps,
      exact: true,
      component: <MapMain />,
      name: 'MapMain',
    },
    {
      id: 10,
      path: locations.aboutUs,
      exact: true,
      component: <AboutUsMain />,
      name: 'AboutUs',
    },
    {
      id: 11,
      path: locations.images,
      exact: true,
      component: <Images />,
      name: 'Images',
    },
    {
      id: 12,
      path: locations.news,
      exact: true,
      component: <ResultNews />,
      name: 'ResultNews',
    },
    {
      id: 13,
      path: '*',
      exact: true,
      component: <NotFoundPage />,
      name: 'NotFoundPage',
    },
    {
      id: 14,
      path: '/ecommerce',
      exact: true,
      component: <ECommerce />,
      name: 'ECommerce',
      subPath: {
        path: locations.cart,
        component: <Cart />,
      },
    },
  ]
  return (
    <>
      <Routes>
        {routes.map(elem => (
          <Route path={elem.path} element={elem.component} key={elem.id}>
            {elem.subPath && (
              <Route path={elem.subPath.path} element={elem.subPath.component}></Route>
            )}
          </Route>
        ))}
      </Routes>
    </>
  )
}
