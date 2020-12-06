import React, { useState,createContext,useReducer } from "react";

export const LoginContext = createContext(null);

const reducer=(state, action)=> {
    switch (action.type) {
      case 'logged':
        return {login: 1};
      case 'unlogged':
        return {login: 0};
      default:
        throw new Error();
    }
  }
const LoginContextProvider=(props)=>{
    const[state, dispatch] = useReducer(reducer, {login: 0});
    const[userInfo,setUserInfo]=useState({username:"",password:""})

    const changeStateToLogged=()=>{
        dispatch({type: 'logged'})
    }
    const changeStateToUnLogged=()=>{
        dispatch({type: 'unlogged'})
    }

    return (
        <LoginContext.Provider
          value={{
            login:state.login,
            userInfo:userInfo,
            changeStateToLogged:changeStateToLogged,
            changeStateToUnLogged:changeStateToUnLogged,
            setUserInfo:setUserInfo
        }}
        >
            {props.children}
        </LoginContext.Provider>    
    )
}
export default LoginContextProvider;