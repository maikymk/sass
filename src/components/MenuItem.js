import React, { Component } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";

class MenuItem extends Component {
    render() {
        return (
            <li className="link-menu">
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
            </li>
        );
    }
}

export default MenuItem;