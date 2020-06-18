import React, { useEffect, useContext, Fragment } from 'react';
import Recipeinfo from './Recipeinfo';
import RecipeContext from '../../context/recipes/recipeContext';

const Recipe = ({ match }) => {
	const { recipe, getrecipe } = useContext(RecipeContext);

	useEffect(() => {
		getrecipe(match.params.label);
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			{recipe.map((r) => (
				<Recipeinfo detail={r.recipe} />
			))}
		</Fragment>
	);
};
export default Recipe;

/*const Recipe = ({ recipe, getrecipe, match }) => {
	useEffect(() => {
		return () => {
			getrecipe(match.params.label);
		};
	}, []);
	return (
		<div>
			{recipe.map((r) => (
				<Recipeinfo detail={r.recipe} />
			))}
		</div>
	);
};*/

/*componentDidMount() {
		this.props.getrecipe(this.props.match.params.label);
	}
	render() {
		const { recipe } = this.props;
		return (
			<div>
				{recipe.map((r) => (
					<Recipeinfo detail={r.recipe} />
				))}
			</div>
		);
	}
}*/
