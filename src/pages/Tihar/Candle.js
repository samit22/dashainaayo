import React from 'react';

import './candle.scss'

const Candle = () =>{

    return(
        <div class="candle">
            <div class="flame">
                <div class="shadows"></div>
                <div class="top"></div>
                <div class="middle"></div>
                <div class="bottom"></div>
            </div>
        <div class="wick"></div>
        <div class="wax"></div>
    </div>
    )
}

export default Candle;