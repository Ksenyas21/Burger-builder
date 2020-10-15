import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
import layout from "../../Layout/Layout";
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},

];

const buildControls = (props) =>(
    <div  className='BuildControls'>
        <p>Current price:{props.price.toFixed(2)}</p>
        {controls.map(ctrl =>(
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                type={ctrl.type}
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}

            />
        ))}
        <button className='OrderButton'
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
    </div>
);
export default buildControls;

