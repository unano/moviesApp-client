import React ,{useState, useContext}from "react";
import "../loginWindow/loginWindow.css"
import Button from '@material-ui/core/Button';
import {LoginContext} from '../../contexts/loginContext'
import { Link } from "react-router-dom";

const Regist = props => {
    const context = useContext(LoginContext);
    const[Info,recordInfo]=useState({username:"",password:""})

    const DoRegist=()=>{
        if(Info.username==="" || Info.password===""){
            alert("Please enter username/password")
        }
        context.setUserInfo(context.userInfo=Info)
        alert("regist success")
        }

    const UnInput= e=> {
        recordInfo({username: e.target.value, password:Info.password})
    }
    const PwInput= e=> {
        recordInfo({password: e.target.value, username:Info.username})
    }
        
    return(
        <div id="window">
        <div>Regist</div>
        <dl>
            <li className="nav-item" class="li1">
                <span>Username:</span> 
                <input className="input" onChange={UnInput} required />
            </li>
            <li className="nav-item" class="li1" id ="passwordButton">
                <span>Password:</span> 
                <input className="input" id="passwordButton" onChange={PwInput} required />
            </li>
            <Button variant="outlined" size="small" type="button" onClick={DoRegist}>
                Regist
            </Button>
            <Link className="nav-link" to="/movies/login">
                login
            </Link>
        </dl>
        </div>
    )
}

export default Regist;