//this is out reduce that provides application state.
//we must export it to use it in the rest of the application.

export default function() {
	return [
		{title: 'JavaScript: The Good Parts', pages: 101},
		{title: 'Harry Potter', pages: 234},
		{title: 'The Dark Tower', pages: 89},
		{title: 'Eloquent Ruby', pages: 10}
	];
}
//This reducer still needs to be 'wired' up to the rest of our
//application.