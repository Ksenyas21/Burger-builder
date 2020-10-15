import React from 'react'
import Auxiliary from '../../../hoc/Auxiiliary'
import Button from "../../UI/Button/Button";
import '../../UI/Button/Button.css'
const orderSummary =(props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return <li><span >{igKey}</span> : {props.ingredients[igKey]}</li>

        })
return(
    <Auxiliary>
        <h3>Your order</h3>
        <p>Delicious burger with following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
            <p>ToTal Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
        <Button   clicked={props.purchaseCancelled}>Cancel</Button>
        <Button className="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Auxiliary>
);
};
export default orderSummary;
