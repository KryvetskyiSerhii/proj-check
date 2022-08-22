import { ResultFooterBlock, ResultFooterStyled } from '../Styles/ResultsStyled.styled'
import { FlexBlock, SimpleBlock, ImageStyled } from 'components/common/CommonStyled.styled'
import { AboutFooterContact } from 'pages/Aboutus/Styles/footer/AboutUsFooterStyled.styled'
import { useSelector } from 'react-redux'
import { SOCIAL_NETWORKS } from 'constants/arraysConstants'

export const ResultFooter = () => {
  const style = useSelector(state => state.general)
  return (
    <ResultFooterStyled>
      <FlexBlock>
        <ResultFooterBlock>2022 All rights reserved.....</ResultFooterBlock>
        <AboutFooterContact>
          {SOCIAL_NETWORKS.map(elem => (
            <ImageStyled src={style.darkStyle ? elem.imgLight : elem.imgBlack} key={elem.name} />
          ))}
        </AboutFooterContact>
      </FlexBlock>
    </ResultFooterStyled>
  )
}
