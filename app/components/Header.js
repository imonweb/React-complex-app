import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import StateContext from "../StateContext"

function Header(props) {
  const appState = useContext(StateContext)

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            {" "}
            ComplexApp{" "}
          </Link>
        </h4>
<<<<<<< HEAD
        {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
=======
        {props.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
>>>>>>> 8fbdbd428378e49420850d5ee2a683633b8dc71e
      </div>
    </header>
  )
}

export default Header
