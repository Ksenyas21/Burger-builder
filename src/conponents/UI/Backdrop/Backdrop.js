import React from 'react'
import './Backdrop.css'
const backtrop = (props)=>(
    props.show ? <div className='Backdrop' onClick={props.clicked}></div>: null
);
export default backtrop;
