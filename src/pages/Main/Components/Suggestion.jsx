import { changeValue } from 'redux/general'
import { clearSearchSuggestions } from 'redux/search'
import { SuggestionsContainer, SuggestionsList, SuggestionsListItem } from '../Styles/Search.styled'

export const Suggestion = ({ suggestions, searchValue, dispatch }) => {
  const addValue = e => {
    dispatch(changeValue(e.target.innerText))
    dispatch(clearSearchSuggestions())
  }

  return (
    <SuggestionsContainer>
      <SuggestionsList>
        {suggestions.slice(0, 5).map(item => (
          <SuggestionsListItem id={item.score} onClick={addValue}>
            {item.word}
          </SuggestionsListItem>
        ))}
      </SuggestionsList>
    </SuggestionsContainer>
  )
}
