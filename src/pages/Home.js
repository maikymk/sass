import React, { Component } from "react";

class Home extends Component {    
    render() {
        const sassText = `
        CSS on its own can be fun, but stylesheets are getting larger, more complex, 
        and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, 
        nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again.   
        `;

        return (
            <main className="row">
                <div className="col30">
                    <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" alt="Logo do Sass" id="sass-logo" />
                </div>
                <div className="col70">
                    <p>{sassText}</p>
                    <div className="large-button">
                        <a href="https://sass-lang.com/guide">Get Started</a>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;