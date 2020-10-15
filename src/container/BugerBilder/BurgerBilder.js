import React, {Component} from "react";
import Auxiliary from '../../hoc/Auxiiliary'
import Burger from "../../conponents/Burger/Burger";
import BuildControls from "../../conponents/Burger/BuildControls/BuildControls";
import BuildControl from "../../conponents/Burger/BuildControls/BuildControl/BuildControl";
import App from "../../App";
import Modal from "../../conponents/UI/Modal/Modal";
import OrderSummary from "../../conponents/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 4,
        purchasable:false,
        purchasing:false

    }
    updatePurchaseState(){
        const ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el)=>{
                return sum + el
            },0);
        this.setState({purchasable: sum>0});
    }//updatePurchaseState end

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount +1
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceEdition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice+ priceEdition
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState()

    }//addIngredientHandler end

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return;
        }
        const updateCount = oldCount -1
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceEduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceEduction
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState()
    }// end removeIngredientHandler
    purchaseHandler =()=>{
        this.setState({purchasing: true})
    }
    purchaseCancelHandler =()=>{
        this.setState({purchasing: false})
    };
    purchaseContinueHandler = ()=>{
        alert("You continue!")
    }
    render() {
        const disabledInfo ={
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] =disabledInfo[key] <= 0
        }

        return(
            <Auxiliary>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        purchaseHandler={this.purchaseHandler}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemove={this.removeIngredientHandler}
                               disabled={disabledInfo}
                               purchasable={this.state.purchasable}
                               price={this.state.totalPrice}
                                ordered={this.purchaseHandler}/>
            </Auxiliary>

        );
    }
}
export default BurgerBuilder;
