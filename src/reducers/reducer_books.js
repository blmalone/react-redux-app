//this is out reduce that provides application state.
//we must export it to use it in the rest of the application.

export default function() {
	return [
		{title: 'JavaScript: The Good Parts'},
		{title: 'Harry Potter'},
		{title: 'The Dark Tower'},
		{title: 'Eloquent Ruby'}
	];
}
//This reducer still needs to be 'wired' up to the rest of our
//application.