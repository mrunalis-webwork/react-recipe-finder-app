import React, { useContext } from 'react';
import RecipesDetails from './RecipesDetails';
import Loader from '../../Layouts/Loader';
import RecipeContext from '../../context/recipes/recipeContext';
import { CardDeck } from 'react-bootstrap';
const Recipes = () => {
	const { loading, recipes } = useContext(RecipeContext);

	if (loading) {
		return <Loader />;
	} else {
		return (
			<CardDeck className='mt-4'>
				{recipes.map((r) => (
					<RecipesDetails details={r.recipe} />
				))}
			</CardDeck>
		);
	}
};

export default Recipes;
