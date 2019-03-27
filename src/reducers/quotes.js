import uuid from 'uuid';

export default (state = [], action) => {
  let index;
  let quote;
  let updatedQuote;

  switch (action.type) {
    case 'ADD_QUOTE':  
      return [
        ...state,
        action.quote
      ];

    case 'REMOVE_QUOTE':
      return filteredQuotes = state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      updatedQuote = {...quote, votes: quote.votes += 1};

      return [
        ...state.slice(0, index), 
        updatedQuote,
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      updatedQuote = quote.votes > 0 ? {...quote, votes: quote.votes -= 1} : quote;

      return [
        ...state.slice(0, index), 
        updatedQuote,
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}
