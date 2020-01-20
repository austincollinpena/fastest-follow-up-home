////https://medium.com/swlh/mimic-redux-with-react-context-api-and-hooks-21fbec280205

import React, {useContext} from "react";
import "./FirstC.scss";
import {Store} from "../../context/GlobalState";

export const FirstC = () => {
    const {state, dispatch} = useContext(Store);

    const changeStuff = () => {
        dispatch({
            type: 'SIGNUPBETA'
        });
    };

    return(
        <div className='first-c' onClick={() => changeStuff()}>
            <p>Hello :) The value is {state.isActive}</p>
        </div>
    )
}