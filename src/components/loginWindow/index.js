import React ,{useState, useContext}from "react";
import "./loginWindow.css"
import Button from '@material-ui/core/Button';
import {LoginContext} from '../../contexts/loginContext'
import { Link } from "react-router-dom";

const Login = ({history}) => {
    const [warning,setWarning]=useState({content:"" , state: false});
    const context = useContext(LoginContext);
    const[userInfo,setUserInfo]=useState({username:"",password:""})
    const user = JSON.parse(localStorage.getItem('user'));
    const username =user[0]
    const password =user[1]
    function judge(m){
        for(let i = 0; i　< username.length; i++) {
            if(username[i]===m.username && password[i]===m.password){
                 context.setUsername(username[i]);
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
                    alert("login success");
                    history.push("/");
                }
            else if(context.login===1){
                setWarning({content:"You have already logined" , state: true});
                alert("You have already logined")
            }
            else{
                setWarning({content:"wrong username/password" , state: true});
            }
        }
    }
    const UnInput= e=> {
        setUserInfo({username: e.target.value, password:userInfo.password})
    }
    const PwInput= e=> {
        setUserInfo({password: e.target.value, username:userInfo.username})
    }
    const warn = {
        display: warning.state? "block": "none"
      };
    return(
        <div id="window">
        <div id="LoginTitle">login</div>
        <p  className="warn" style={warn}>{warning.content}</p>
        <dl>
            <li className="nav-item" id="usernameButton">
                <span>Username:</span> 
                <input className="input" onChange={UnInput} required />
            </li>
            <li className="nav-item"  id ="passwordButton">
                <span>Password:</span>
                <input className="input" id="passwordButton" onChange={PwInput} required />
            </li>
            <Button variant="outlined" size="small" type="button" id="Login" onClick={ValidateLogin}>
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