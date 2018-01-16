//We need to make sure that the action that returns from this function runs through all of the reducers. 
export function selectBook(book) {
	//selectBook is an ActionCreator, it needs to return an action, an obj with type property.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
} 