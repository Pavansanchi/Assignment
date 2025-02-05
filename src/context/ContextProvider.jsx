import React, { createContext, useContext, useState } from 'react';
import { use } from 'react';

const StateContext = createContext();



export const ContextProvider = ({ children }) => {

    const user = localStorage.getItem("userData")
  
  return (
    <StateContext.Provider value={{use
     }}>
      {children}
    </StateContext.Provider>
  );
};

export  const useStateContext = () => useContext(StateContext);

