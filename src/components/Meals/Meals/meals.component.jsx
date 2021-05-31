import MealsSummary from '../MealsSummary/mealsSummary.component';
import AvailableMeals from '../AvailableMeals/availableMeals.component';
import { Fragment } from 'react';

const Meals = () =>
{
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/> 
    </Fragment>
}

export default Meals;