//reducers are only ever called when an action occurs
//State arg is not application state, only the state that the reducer is responsible for. 
//(So basically the state of the reducer before the action occured).
//state = null (if state is undefined, set to null) 
//because reducer args cannot be undefined i.e. this will be undefiner the first time app boots
export default function(state = null, action) {
	//The reducer will be called very frequently by various actions. 
	//we will want a base case so that we quickly ignore actions that we do not care about.
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload; 
	}
	return state; //never mutate this, always return a 'fresh' obj
}