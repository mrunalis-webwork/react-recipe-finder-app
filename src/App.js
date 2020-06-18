import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './Layouts/Navbar';
import Recipes from './Components/Recipes/Recipes';
import Recipe from './Components/Recipes/Recipe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeState from './context/recipes/RecipeState';
import AlertState from './context/alert/AlertState';
import Footer from './Layouts/Footer';
import ChickenRecipe from './Components/Recipes/ChickenRecipe';
import CocktailRecipe from './Components/Recipes/CocktailRecipe';
import PizzaRecipe from './Components/Recipes/PizzaRecipe';
import SaladRecipe from './Components/Recipes/SaladRecipe';
import SeafoodRecipe from './Components/Recipes/SeafoodRecipe';
const App = () => {
	return (
		<RecipeState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navigation />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/recipes' component={Recipes} />
							<Route exact path='/chicken' component={ChickenRecipe} />
							<Route exact path='/cocktails' component={CocktailRecipe} />
							<Route exact path='/pizza' component={PizzaRecipe} />
							<Route exact path='/salad' component={SaladRecipe} />
							<Route exact path='/seafood' component={SeafoodRecipe} />
							<Route exact path='/recipes/:label' component={Recipe} />
						</Switch>
						<Footer />
					</div>
				</Router>
			</AlertState>
		</RecipeState>
	);
};

export default App;
