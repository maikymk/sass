import React, { Component } from "react";

import Links from "./Links";

class Header extends Component {
    render() {

        return (
            <header>
                <nav id="menu">
                    <Links />
                </nav>
            </header>
        )
    }
}

export default Header;