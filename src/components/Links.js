import React, { Component } from "react";

import Item from "./MenuItem";

const pages = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Examples",
        url: "/examples"
    },
    {
        name: "Features",
        url: "/features"
    }
];

class Links extends Component {
    render() {
        return (
            <ul>
                {pages.map((page) => <Item name={page.name} url={page.url} />)}
            </ul>
        );
    }
}

export default Links;