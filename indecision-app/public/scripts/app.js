"use strict";

var app = {
    title: "Visibility Toggle",
    details: "hey thease are some details I can now see"
};

var visibility = false;

var toggle = function toggle() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: toggle },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                app.details
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
