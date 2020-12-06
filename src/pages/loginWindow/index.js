import React ,{useState, useContext}from "react";
import "./loginWindow.css"
import Button from '@material-ui/core/Button';
import {LoginContext} from '../../contexts/loginContext'
import { Link } from "react-router-dom";

const Login = props => {
    const context = useContext(LoginContext);
    const[userInfo,setUserInfo]=useState({username:"",password:""})

    const ValidateLogin=()=>{
        if(userInfo.username!=="" && userInfo.password!=="" && 
        userInfo.username===context.userInfo.username && userInfo.password===context.userInfo.username){
            context.changeStateToLogged();
            alert("login success")
        }
    }
    const UnInput= e=> {
        setUserInfo({username: e.target.value, password:userInfo.password})
    }
    const PwInput= e=> {
        setUserInfo({password: e.target.value, username:userInfo.username})
    }
        
    return(
        <div id="window">
        <div>login</div>
        <dl>
            <li className="nav-item" class="li1">
                <span>Username:</span> 
                <input className="input" onChange={UnInput} required />
            </li>
            <li className="nav-item" class="li1" id ="passwordButton">
                <span>Password:</span> 
                <input className="input" id="passwordButton" onChange={PwInput} required />
            </li>
            <Button variant="outlined" size="small" type="button" onClick={ValidateLogin}>
                Login
            </Button>
            <li className="nav-item" class="li1">
            <Link className="nav-link" to="/movies/regist">
                regist
            </Link>
            </li>
        </dl>
        </div>
    )
}

export default Login;