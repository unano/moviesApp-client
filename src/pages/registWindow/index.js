import React ,{useState}from "react";
import "../loginWindow/loginWindow.css"
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const Regist = props => {
    const[Info,recordInfo]=useState({username:"",password:""})
    function judge(m){
        const user = JSON.parse(localStorage.getItem('user'));
        const username = user[0];
        for(let i = 0; i　< username.length; i++) {
            if(username[i]===m){
                 return false;
            }
            else if(i===username.length-1){
                return true;
            }
        }
    }


    const DoRegist= e =>{
        if(Info.username==="" || Info.password===""){
            alert("Please entr username/password with enough length")
        }
        else if(Info.password.length<6){
            alert("password too short, please change a longer one.")
        }
        else if(judge(Info.username)){
            // context.username[context.username.length]=Info.username;
            // context.password[context.password.length]=Info.password;
            const Un=JSON.parse(localStorage.getItem('user'));
            Un[0].push(Info.username);
            Un[1].push(Info.password);
            localStorage.setItem('user',JSON.stringify(Un));

            alert("regist success")
        }
        else(alert("Username is used by other users"))
    }

    const UnInput= e=> {
        recordInfo({username: "", password:""})
        recordInfo({username: e.target.value, password:Info.password})
    }
    const PwInput= e=> {
        recordInfo({username: "", password:""})
        recordInfo({password: e.target.value, username:Info.username})
    }
        
    return(
        <div id="window">
        <div id="LoginTitle">Regist</div>
        <dl>
            <li className="nav-item">
                <span>Username:</span> 
                <input className="input" onChange={UnInput} required />
            </li>
            <li className="nav-item" id ="passwordButton">
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