import React ,{useState, useContext}from "react";
import "./loginWindow.css"
import Button from '@material-ui/core/Button';
import {LoginContext} from '../../contexts/loginContext'
import { Link } from "react-router-dom";

const Login = props => {
    const context = useContext(LoginContext);
    const[userInfo,setUserInfo]=useState({username:"",password:""})
    const user = JSON.parse(localStorage.getItem('user'));
    const username =user[0]
    const password =user[1]
    function judge(m){
        for(let i = 0; i　< username.length; i++) {
            if(username[i]===m.username && password[i]===m.password){
                 return true;
            }
            else if(i===username.length-1){
                return false;
            }
        }
    }

    const ValidateLogin=()=>{
        if(userInfo.username!=="" && userInfo.password!==""){
            if(judge(userInfo) && context.login===0){
                    context.changeStateToLogged();
                    alert("login success")
                }
            else if(context.login===1){
                alert("You have already logined")
            }
            else(
                alert("wrong username/password")
            )
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
        <div id="LoginTitle">login</div>
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
            <Link className="nav-link" to="/movies/regist">
                regist
            </Link>
        </dl>
        </div>
    )
}

export default Login;