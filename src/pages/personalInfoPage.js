import React, {useContext} from "react";
import {LoginContext} from '../contexts/loginContext';
import {PersonalContext} from '../contexts/personalContext'
import { Link } from "react-router-dom";

const PersonalInfo = () => {
    const loginContext = useContext(LoginContext);
    const userContext = useContext(PersonalContext);
    const user=userContext.user;
    user.username=loginContext.username;
  return (
    <div className="content" style={{width:501, height:550, padding:28}}>
      <h1 style={{fontWeight:200, marginBottom:20}}>User profile</h1>
      <div style={{fontSize:20, fontWeight:100}}>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Birthday:</strong> {user.birthday}</p>
      <p><strong>Hobby:</strong> {user.hobby}</p>
      <p><strong>Favorite movies:</strong> {user.movies}</p>
      <p><strong>Favorite actors:</strong> {user.actors}</p>
      <p><strong>Personal introduction:</strong> {user.introduce}</p>
      </div>
      <li className="nav-item">
              <Link className="nav-link text-info" to="/editInfo">
                Modify
              </Link>
            </li>
      </div>
  );
};

export default PersonalInfo;
