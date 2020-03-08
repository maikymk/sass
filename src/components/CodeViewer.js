import React, { Component } from "react";

class CodeViewer extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="code-title">
                    {this.props.title}
                </div>
                <pre>
                    {this.props.children}
                </pre>
            </div>
        );
    }
}

export default CodeViewer;