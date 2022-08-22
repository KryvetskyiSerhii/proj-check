import { SimpleBlock } from 'components/common/CommonStyled.styled'
import { Footer } from 'components/modules/Footer/Footer'
import { ResultNewsHeader } from './components/ResultNewsHeader'
import { ResultNewsMainBlock } from './components/ResultNewsMainBlock'

export const ResultNews = () => {
  return (
    <SimpleBlock>
      <ResultNewsHeader />
      <ResultNewsMainBlock />
      <Footer />
    </SimpleBlock>
  )
}
