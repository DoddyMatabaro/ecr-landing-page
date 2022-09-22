import React, { useState, useContext, useReducer} from 'react';
import { data } from '../data';

const AppContext = React.createContext();

export function AppProvider({ initialState, reducer, children}){

    return(
        <AppContext.provider 
                value={
                    useReducer(reducer, initialState)
                }
        >
            {children}
        </AppContext.provider>
    )

};

export const globalContext =()=>{
    return useContext(AppContext);
}