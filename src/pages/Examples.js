import React, { Component } from "react";
import CodeViewer from "../components/CodeViewer";

class Examples extends Component {
    render() {
        const SassCode = 
        `
            @import "reset.css"

            $primary-color: #141411
            $secondary-color: #fff
            $hover-color: #2b2c2c
            
            .App
                font-family: Arial, Helvetica, sans-serif
                font-size: 25px
            
            %link-container
                background-color: $primary-color
                font-size: 28px
                font-weight: bold
            
            %link-container-hover
                background-color: $hover-color
            
            #menu
                ul
                    @extend %link-container
                    display: flex
                    flex-direction: row
                    justify-content: space-around
            
                    .link-menu 
                        width: 100%
                        height: 60px
                        list-style-type: none
                        display: flex
                        justify-content: center
                        align-items: center
            
                        a
                            color: $secondary-color
                            text-decoration: none
            
                    .link-menu:hover
                        @extend %link-container-hover
        `;

        const SCSSCode = 
        `
            @import "reset.css";

            $primary-color: #141411;
            $secondary-color: #fff;
            $hover-color: #2b2c2c;
            
            .App {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 25px;
            }
            
            %link-container {
                background-color: $primary-color;
                font-size: 28px;
                font-weight: bold;
            }
            
            %link-container-hover {
                background-color: $hover-color;
            }
            
            #menu {
                ul {
                    @extend %link-container;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
            
                    .link-menu {
                        width: 100%;
                        height: 60px;
                        list-style-type: none;
                        display: flex;
                        justify-content: center;
                        align-items: center;
            
                        a {
                            color: $secondary-color;
                            text-decoration: none;
                        }
                    }
            
                    .link-menu:hover {
                        @extend %link-container-hover;
                    }
                }
            }
        `;

        return (
            <main>
                <div className="examples" >
                    <CodeViewer title="Sass traditional syntax" className="right-col">
                        {SassCode}
                    </CodeViewer>
                    <CodeViewer title="SCSS syntax" className="left-col">
                        {SCSSCode}
                    </CodeViewer>
                </div>
            </main>
        );
    }
}

export default Examples;