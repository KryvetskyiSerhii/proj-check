import styled from '@emotion/styled'
import { createGlobalStyle } from 'styled-components'

export const StyledAppBlack = styled.div`
  background: ${props => props.theme.background};
  background-size: cover;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${({ font }) => font};
`
export const GlobalStyles = createGlobalStyle`
   *{ margin:0;
        padding: 0;
        box-sizing: border-box;}
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
       
`
