import React, {Component} from 'react'
import classes from './BurgerIngridient.css'
import PropTypes from 'prop-types'
import BurgerBuilder from "../../../container/BugerBilder/BurgerBilder";
class BurgerIngredient extends Component{
    render() {
        let ingridient = null
        switch(this.props.type){
            case('bread-bottom'):
                ingridient = <div className="BreadBottom"> </div>;
                break;
            case('bread-top'):
                ingridient =(
                    <div className="BreadTop">
                        <div className="Seeds1"> </div>
                        <div className="Seeds2"> </div>
                    </div>
                );
                break;
            case('meat'):
                ingridient = <div className="Meat"> </div>;
                break;
            case('cheese'):
                ingridient = <div className="Cheese"> </div>;
                break;
            case('salad'):
                ingridient = <div className="Salad"> </div>;
                break;
            case('bacon'):
                ingridient = <div className="Bacon"> </div>;
                break;

        }
        return ingridient
}

}
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
