import styled from 'styled-components'

export const BlogMainPage = styled.div`
  grid-area: main;
  box-sizing: border-box;
  min-height: 100vh;
`

export const BlogBlock = styled.div`
  display: grid;
  grid-template-areas: 'side main';
  grid-template-columns: 1fr 9fr;
  gap: 2px;
  width: 99vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
`
export const NewsBlockContainer = styled.div`
  min-height: 81vh;
`
