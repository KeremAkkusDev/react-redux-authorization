import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  dark: state.site.dark,
  user: state.auth.user,
});

function Header({ dark, user }) {
  /*  const {user} = useSelector(state=>state.auth)
  const { dark } = useSelector((state) => state.site); */
  return (
    <div className={dark ? "dark" : "light"}>
      <h3>{user ? "Welcome " + user : "Please login "}</h3>
      <nav className="navlink">
        <NavLink to="/"> Homepage </NavLink>
        <NavLink to="/about"> About Us </NavLink>
        <NavLink to="/profile"> Profile </NavLink>
      </nav>
    </div>
  );
}

export default connect(mapStateToProps)(Header);
