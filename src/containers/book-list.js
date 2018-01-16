import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
	renderList() {
		//Always need a key because it is a list. 
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}
} 

//ACTs as the GLUE between react and redux
//Purpose of this function is to take the application
//state as an arguement.
function mapStateToProps(state) {
	//whatever is returned from here will show up as props
	//inside of BookList
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);