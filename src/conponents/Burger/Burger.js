import React from 'react'
import './Burger.css'
import BurgerIngredient from "./BurgerIngridient/BurgerIngridient";
const burger = (props)=>{
    let transformIngredints = Object.keys(props.ingredients)
        .map(igKey =>{
            return [...Array(props.ingredients[igKey])]
                .map((_,i) =>{
              return  <BurgerIngredient key={igKey +1} type={igKey}/>
            });
        }).reduce((arr,el)=>{
            return arr.concat(el)

        },[]);
    if(transformIngredints.length === 0){
        transformIngredints = <p> Please start  adding ingredients</p>
    }
    console.log(transformIngredints)

    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformIngredints}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
export default burger;
