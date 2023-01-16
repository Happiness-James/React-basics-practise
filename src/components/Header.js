import React from "react";
import Login from "./Login";
import LoggedOut from "./LoggedOut";
function Header({isLoggedIn}) {

    return (
        <>
            <header>
                <h1>PetLand</h1>
                <nav>
                   {isLoggedIn ? <LoggedOut/>:<Login/>}
                </nav>
            </header>
        </>
    )
}
export default Header;