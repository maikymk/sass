import React, { Component } from "react";

const features = [
    {
        name: `variables`,
        content: `
    $hover-color: #2b2c2c;
        `
    },
    {
        name: `placeholders`,
        content: `
    %full-size {
        width: 100%;
        height: 100%;
    }`
    },
    {
        name: `mixins`,
        content: `
    @mixin flexbox($direction, $align, $justify) {
        display: flex;
        flex-direction: $direction;
        align-items: $align;
        justify-content: $justify;
    }
        `
    },
    {
        name: `functions`,
        content: `
    @function width-calc() {
        @return ((100% - $padding) / 2) - (3 * $margin);
    }
        `
    },
    {
        name: `operators`,
        content: `
    width: ((100% - $padding) / 2) - (3 * $margin);
        `
    }
];

class Features extends Component {
    render() {
        return (
            <main>
                {features.map((feature) => {
                    return <div className="sass-feature" >
                        <span>{feature.name}</span>
                        <pre>{feature.content}</pre>
                    </div>
                })}
            </main>
        );
    }
}

export default Features;