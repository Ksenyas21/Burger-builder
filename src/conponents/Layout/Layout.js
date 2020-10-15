import React from 'react'
import Auxiliary from '../../hoc/Auxiiliary'
import './Layout.css'
const layout =(props)=>{
    return(
        <Auxiliary>
        <div >
            Toolbar, scroolbar, BackDrop
        </div>
            <main className="Content">{props.children}</main>
        </Auxiliary>
    );
}
export default layout;
