import React, { Component } from 'react';
import { connect } from 'react-redux';

//We need to connect this to the redux store so it gets told about changes to the active book piece of state
class BookDetail extends Component {
	render() {
		if(!this.props.book) {
			return <div>Select a book to get started.</div>
		}
		return (
			<div>
				<h3> Details for: </h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

//Specifically references 'state.activeBook' because our ActiveBookReducer creates activeBook: key. 
function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
