import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//This will make sure the action created by the action creator flows through all the reducers.
import { bindActionCreators } from 'redux';

//We have promoted this component to become a redux container.
//It will be able to access state data from a redux reducer.
//Container is a normal react component that gets bonded to the state
//When the state changes, the container will rerender as well. 
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
				<li 
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">{book.title}</li>
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

//Anything returned from this function will end up as props on the BookList Container.
function mapDispatchToProps(dispatch) {
	//Whenever selectBook (is an Action creator) is called, the result should be passed to all of our reducers
	//The dispatch function will receive these actions and spit them out to reducers. 
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Whenever the application state changed the props will update.
//Promote BookList from component to container - it needs to know about this new dispatch method,
//selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);