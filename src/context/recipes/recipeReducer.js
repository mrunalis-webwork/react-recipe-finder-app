import {
	SEARCH_RESULT,
	GET_RECIPE,
	CLEAR_SEARCH,
	SET_LOADING,
	GET_RECIPE_OWL,
} from '../../types';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_RESULT:
			return {
				...state,
				recipes: action.payload,
				loading: false,
			};
		case GET_RECIPE:
			return {
				...state,
				recipe: action.payload,
				loading: false,
			};
		case GET_RECIPE_OWL:
			return {
				...state,
				singlerecipe: action.payload,
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case CLEAR_SEARCH:
			return {
				...state,
				recipes: [],
				loading: false,
			};
		default:
			return state;
	}
};
