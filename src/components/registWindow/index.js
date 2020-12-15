import React ,{useState}from "react";
// import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Button from "../pubilcOfLogin&Logout/button.js"
import LoginTitle from "../pubilcOfLogin&Logout/loginTitle.js"
import Input from "../pubilcOfLogin&Logout/input.js"
import Warn from "../pubilcOfLogin&Logout/warn.js"
import Li from "../pubilcOfLogin&Logout/li.js"
import Warp from "../pubilcOfLogin&Logout/warp.js"

const Regist = props => {
    const [warning,setWarning]=useState({content:"" , state: false});
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
            setWarning({content:"Please enter username/password" , state: true});
        }
        else if(Info.password.length<6){
            setWarning({content:"password too short(at least 6)" , state: true});
        }
        else if(judge(Info.username)){
            const Un=JSON.parse(localStorage.getItem('user'));
            Un[0].push(Info.username);
            Un[1].push(Info.password);
            localStorage.setItem('user',JSON.stringify(Un));
            alert("regist success")
        }
        
        else{setWarning({content:"Username is used" , state: true});}
    }

    const UnInput= e=> {
        recordInfo({username: "", password:""})
        recordInfo({username: e.target.value, password:Info.password})
    }
    const PwInput= e=> {
        recordInfo({username: "", password:""})
        recordInfo({password: e.target.value, username:Info.username})
    }

    const warn = {
        display: warning.state? "block": "none"
      };

    return(
        <Warp>
        <div id="window">
        <LoginTitle>Regist</LoginTitle>
        <Warn className="warn" style={warn}>{warning.content}</Warn>
        <dl>
            <Li className="nav-item" id="usernameButton">
                <span>Username:</span> 
                <Input onChange={UnInput} required />
            </Li>
            <Li className="nav-item" style={{marginBottom:35}} id ="passwordButton">
                <span>Password:</span> 
                <Input onChange={PwInput} required />
            </Li>
            <Button onClick={DoRegist}>
                Regist
            </Button>
            <Link className="nav-link" to="/movies/login">
                login
            </Link>
        </dl>
        </div>
        </Warp>
    )
}

export default Regist;