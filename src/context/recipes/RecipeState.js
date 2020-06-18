import React, { useReducer } from 'react';
import axios from 'axios';
import RecipeContext from './recipeContext';
import RecipeReducer from './recipeReducer';
import {
	SEARCH_RESULT,
	GET_RECIPE,
	CLEAR_SEARCH,
	SET_LOADING,
	GET_RECIPE_OWL,
} from '../../types';

const RecipeState = (props) => {
	const initialState = {
		recipes: [],
		loading: false,
		recipe: [],
		singlerecipe: [],
	};
	const [state, dispatch] = useReducer(RecipeReducer, initialState);

	// search result
	const searchresult = async (text) => {
		setLoading();
		const res = await axios.get(
			`https://edamam-recipe-search.p.rapidapi.com/search?q=${text}`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
					'x-rapidapi-key':
						'3b976dec3cmshbdcfd9ee0e26999p1c3d69jsn6026be6e3da5',
				},
			}
		);
		/*.then((res) => {
				const recipes = res.data.hits;
				if (recipes.length > 0) {
					setLoading();
					setRecipes(recipes);
					setNoData(false);
				} else {
					setLoading(true);
					setRecipes(recipes);
					setNoData(true);
				}
			});*/

		dispatch({
			type: SEARCH_RESULT,
			payload: res.data.hits,
		});
	};

	//get single recipe
	const getrecipe = async (single) => {
		setLoading();
		const res = await axios.get(
			`https://edamam-recipe-search.p.rapidapi.com/search?q=${single}&to=1`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
					'x-rapidapi-key':
						'3b976dec3cmshbdcfd9ee0e26999p1c3d69jsn6026be6e3da5',
				},
			}
		);

		/*.then((res) => {
				const recipes = res.data.hits;
				if (recipes.length > 0) {
					setLoading();
					setRecipes(recipes);
					setNoData(false);
				} else {
					setLoading(true);
					setRecipes(recipes);
					setNoData(true);
				}
			});*/

		dispatch({
			type: GET_RECIPE,
			payload: res.data.hits,
		});
	};
	// clear search
	const clearSearch = () => {
		dispatch({ type: CLEAR_SEARCH });
		//console.log('ddfdf');
	};

	//set loading
	const setLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	//get chicken recipes
	const chickenData = async () => {
		const res = await axios(
			'https://edamam-recipe-search.p.rapidapi.com/search?q=chicken&to=20',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
					'x-rapidapi-key':
						'3b976dec3cmshbdcfd9ee0e26999p1c3d69jsn6026be6e3da5',
				},
			}
		);

		dispatch({
			type: GET_RECIPE_OWL,
			payload: res.data.hits,
		});
		console.log(res.data.hits);
	};

	//get cocktail recipes
	const cocktailData = async () => {
		const res = await axios(
			'https://edamam-recipe-search.p.rapidapi.com/search?q=cocktail&to=20',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
					'x-rapidapi-key':
						'3b976dec3cmshbdcfd9ee0e26999p1c3d69jsn6026be6e3da5',
				},
			}
		);

		dispatch({
			type: GET_RECIPE_OWL,
			payload: res.data.hits,
		});
		console.log(res.data.hits);
	};

	//get pizza recipes
	const pizzaData = async () => {
		const res = await axios(
			'https://edamam-recipe-search.p.rapidapi.com/search?q=pizza&to=20',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
					'x-rapidapi-key':
						'3b976dec3cmshbdcfd9ee0e26999p1c3d69jsn6026be6e3da5',
				},
			}
		);

		dispatch({
			type: GET_RECIPE_OWL,
			payload: res.data.hits,
		});
		console.log(res.data.hits);
	};

	//get seafood recipes
	const seafoodData = async () => {
		const res = await axios(
			'https://edamam-recipe-search.p.rapidapi.com/search?q=seafood&to=20',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
					'x-rapidapi-key':
						'3b976dec3cmshbdcfd9ee0e26999p1c3d69jsn6026be6e3da5',
				},
			}
		);

		dispatch({
			type: GET_RECIPE_OWL,
			payload: res.data.hits,
		});
		console.log(res.data.hits);
	};

	//get salad recipes
	const saladData = async () => {
		const res = await axios(
			'https://edamam-recipe-search.p.rapidapi.com/search?q=salad&to=20',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
					'x-rapidapi-key':
						'3b976dec3cmshbdcfd9ee0e26999p1c3d69jsn6026be6e3da5',
				},
			}
		);

		dispatch({
			type: GET_RECIPE_OWL,
			payload: res.data.hits,
		});
		console.log(res.data.hits);
	};

	return (
		<RecipeContext.Provider
			value={{
				recipes: state.recipes,
				loading: state.loading,
				recipe: state.recipe,
				singlerecipe: state.singlerecipe,
				searchresult,
				clearSearch,
				getrecipe,
				chickenData,
				cocktailData,
				pizzaData,
				saladData,
				seafoodData,
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
};

export default RecipeState;
