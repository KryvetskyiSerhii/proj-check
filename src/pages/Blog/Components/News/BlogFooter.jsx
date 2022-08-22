import { BlogFooterBlock, BlogFooterStyled } from 'pages/Blog/Styles/news/NewsStyled.styled'
import facebookLight from 'assets/icons/white/small/facebookLight.svg'
import instagramLight from 'assets/icons/white/small/instagramLight.svg'
import twitterLight from 'assets/icons/white/small/twitterLight.svg'
import { FlexBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import { AboutFooterContact } from 'pages/Aboutus/Styles/footer/AboutUsFooterStyled.styled'
import { useSelector } from 'react-redux'
import { SOCIAL_NETWORKS } from 'constants/arraysConstants'

export const BlogFooter = () => {
  const style = useSelector(state => state.general)
  return (
    <BlogFooterStyled>
      <FlexBlock>
        <BlogFooterBlock>2022 All rights reserved.....</BlogFooterBlock>
        <AboutFooterContact>
          {SOCIAL_NETWORKS.map(elem => (
            <ImageStyled src={style.darkStyle ? elem.imgLight : elem.imgBlack} key={elem.name} />
          ))}
        </AboutFooterContact>
      </FlexBlock>
    </BlogFooterStyled>
  )
}
