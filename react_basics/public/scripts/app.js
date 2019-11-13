'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
    _inherits(TodoApp, _React$Component);

    function TodoApp(props) {
        _classCallCheck(this, TodoApp);

        var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleData = _this.handleData.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(TodoApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleData',
        value: function handleData(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {};
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Todo App';
            var subtitle = 'Business Goals'; // const options = ['Thing one', 'Thing two', 'Thing three'];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Header, { title: title, subtitle: subtitle }),
                _react2.default.createElement(Action, {
                    hasOption: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                _react2.default.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                _react2.default.createElement(AddOption, { handleData: this.handleData })
            );
        }
    }]);

    return TodoApp;
}(_react2.default.Component);

var Header = function Header(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            ' ',
            props.title,
            ' '
        ),
        _react2.default.createElement(
            'h2',
            null,
            props.subtitle,
            ' '
        )
    );
};

var Action = function Action(props) {
    return _react2.default.createElement(
        'button',
        {
            onClick: props.handlePick,
            disabled: !props.hasOption
        },
        ' What should I do? '
    );
};
var Options = function Options(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            ' Remove All'
        ),
        props.options.length === 0 && _react2.default.createElement(
            'p',
            null,
            ' Please add an option to get started '
        ),
        props.options.map(function (option) {
            return _react2.default.createElement(Option, {
                key: option,
                optionText: option,
                handleRemove: props.handleDeleteOption });
        })
    );
};

var Option = function Option(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.optionText,
        _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handleRemove(props.optionText);
                } },
            '  remove  '
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: null
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var data = this.props.handleData(option);

            this.setState(function () {
                return {
                    error: data
                };
            });
            e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.error && _react2.default.createElement(
                    'p',
                    null,
                    ' ',
                    this.state.error
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    _react2.default.createElement('input', { type: 'text', name: 'option' }),
                    _react2.default.createElement(
                        'button',
                        null,
                        ' Add Option '
                    )
                )
            );
        }
    }]);

    return AddOption;
}(_react2.default.Component);

var jsx = _react2.default.createElement(TodoApp, null);

_reactDom2.default.render(jsx, document.getElementById('app'));
