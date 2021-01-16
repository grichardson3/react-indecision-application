"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Main Container
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.deleteSingleOption = _this.deleteSingleOption.bind(_this);
        _this.deleteOptions = _this.deleteOptions.bind(_this);
        _this.pickOption = _this.pickOption.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            title: "Indecision App",
            subtitle: "Put your life in the hands of a computer...",
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                console.log("error");
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("unmounted");
        }
    }, {
        key: "pickOption",
        value: function pickOption() {
            var randNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randNum]);
        }
    }, {
        key: "deleteSingleOption",
        value: function deleteSingleOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "deleteOptions",
        value: function deleteOptions() {
            // directly returns empty object array
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "addOption",
        value: function addOption(option) {
            // directly returns result of input
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, { pickOption: this.pickOption, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    deleteSingleOption: this.deleteSingleOption,
                    deleteOptions: this.deleteOptions,
                    options: this.state.options
                }),
                React.createElement(AddOption, {
                    addOption: this.addOption,
                    options: this.state.options,
                    errorText: this.state.errorText
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []

    // Title & Subtitle
};var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        !props.subtitle ? null : React.createElement(
            "h4",
            null,
            props.subtitle
        )
    );
};

// Default props if props aren't passed
Header.defaultProps = {
    subtitle: "some subtitle"
};

// Button

var Action = function Action(props) {
    return React.createElement(
        "div",
        { className: "elCon" },
        React.createElement(
            "button",
            {
                disabled: props.hasOptions ? false : true,
                onClick: props.pickOption,
                className: "btn btn-primary"
            },
            "What should I do?"
        )
    );
};

// All Options
var Options = function Options(props) {
    var options = props.options;
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                className: "btn btn-danger",
                onClick: props.deleteOptions
            },
            "Remove All"
        ),
        React.createElement(
            "ol",
            { className: "elCon" },
            options.map(function (option) {
                return React.createElement(Option, {
                    value: option,
                    key: option,
                    deleteSingleOption: props.deleteSingleOption
                });
            })
        )
    );
};

// Single Options
var Option = function Option(props) {
    return React.createElement(
        "div",
        { className: "inline" },
        React.createElement(
            "li",
            null,
            props.value
        ),
        React.createElement(
            "button",
            {
                className: "removeButton btn btn-danger",
                onClick: function onClick(e) {
                    props.deleteSingleOption(props.value);
                }
            },
            "Remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();

            var input = e.target.elements.input1.value.trim();

            if (input) {
                // if statement uses includes method to find if option is already in the array
                if (!this.props.options.includes(input)) {
                    this.props.addOption(input);
                    e.target.elements.input1.value = "";
                }
            } else {
                e.target.elements.input1.value = "";
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "elCon" },
                React.createElement(
                    "form",
                    { onSubmit: this.addOption },
                    React.createElement("input", { className: "appInput form-control elCon", name: "input1" }),
                    React.createElement(
                        "button",
                        { className: "btn btn-primary" },
                        "Submit"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

/*const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};*/

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector("#container"));
