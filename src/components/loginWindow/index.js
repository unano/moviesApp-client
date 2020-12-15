import React ,{useState, useContext}from "react";
import "./loginWindow.css"
import {LoginContext} from '../../contexts/loginContext'
import { Link } from "react-router-dom";
import Button from "../pubilcOfLogin&Logout/button.js"
import LoginTitle from "../pubilcOfLogin&Logout/loginTitle.js"
import Input from "../pubilcOfLogin&Logout/input.js"
import Warn from "../pubilcOfLogin&Logout/warn.js"
import Li from "../pubilcOfLogin&Logout/li.js"
import Warp from "../pubilcOfLogin&Logout/warp.js"

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
        <Warp>
        <div id="window">
        <LoginTitle>login</LoginTitle>
        <Warn className="warn" style={warn}>{warning.content}</Warn>
        <dl>
            <Li className="nav-item" id="usernameButton">
                <span>Username:</span> 
                <Input onChange={UnInput} required />
            </Li>
            <Li className="nav-item" style={{marginBottom:35}}  id ="passwordButton">
                <span>Password:</span>
                <Input onChange={PwInput} required />
            </Li>
            <Button id="Login" onClick={ValidateLogin}>
                Login
            </Button>
            <Link className="nav-link" to="/movies/regist">
                regist
            </Link>
        </dl>
        </div>
        </Warp>
    )
}

export default Login;