import React, { useContext } from 'react';
import SingleDetails from './SingleDetails';
import Loader from '../../Layouts/Loader';
import RecipeContext from '../../context/recipes/recipeContext';
import { CardDeck, Container } from 'react-bootstrap';

const SeafoodRecipe = () => {
	const { loading, singlerecipe, seafoodData } = useContext(RecipeContext);

	React.useEffect(() => {
		seafoodData();
	}, []);

	if (loading) {
		return <Loader />;
	} else {
		return (
			<Container className='mt-4'>
				<h3 className='singlerecipes'>Seafood Recipes</h3>
				<CardDeck>
					{singlerecipe.map((resp) => (
						<SingleDetails details={resp.recipe} />
					))}
				</CardDeck>
			</Container>
		);
	}
};

export default SeafoodRecipe;
