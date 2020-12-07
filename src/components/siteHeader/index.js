import React , {useContext} from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import {LoginContext} from '../../contexts/loginContext'

const SiteHeader = () => {
  const Logcontext = useContext(LoginContext);
  if(Logcontext.login===1){
  }
  const loginBut = {
    display:Logcontext.login===1?"none" : "block"
  };

  const logoutBut = {

    display:Logcontext.login===0?"none" : "block"
  };

  const ValidateLogout=()=>{
    Logcontext.changeStateToUnLogged();
}

  return (
    <nav className="navbar  navbar-light fixed-top" id="header">
      <nav className="navbar-brand text-white">
        <Link className="text-white" id="Tmdb" to="/">
           TMDB
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="2x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/topRated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchList">
              Watch List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/collection">
              Collection
            </Link>
          </li>
          <li className="nav-item" style={loginBut}>
            <Link className="nav-link text-white" to="/movies/login">
              Login
            </Link>
          </li>
          <li className="nav-item" style={logoutBut}>
          <div className="nav-link text-white" onClick={ValidateLogout}>
              Log out
          </div>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;