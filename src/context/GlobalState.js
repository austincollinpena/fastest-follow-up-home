// GlobalState.js

import React, { createContext, useReducer } from 'react'

const initialState = {
    isActive: "false",
};

export const Store = createContext(initialState);

export const GlobalStoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
};


const changeIsActive = (state) => {
    alert('hello');
    return {...state, isActive: "true"}
};

const resetChange = () => {
    return {isActive: "false"}
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SIGNUPBETA':
            return changeIsActive(state);
        case 'RESET':
            return resetChange();
        default:
            return state
    }
};


