'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMdProgressBar = require('react-md-progress-bar');

var _tags = require('./tags');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  /**
   * React Component constructor.
   * @param props
   */
  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.state = {
      show: props.show,
      progressBar: props.progressBar,
      errors: props.errors
    };
    return _this;
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */


  _createClass(Dialog, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.show,
        progressBar: nextProps.progressBar,
        errors: nextProps.errors
      });
    }

    /**
     * Render progress.
     * @returns {XML}
     */

  }, {
    key: 'renderProgress',
    value: function renderProgress() {
      if (this.state.progressBar) {
        return _react2.default.createElement(_reactMdProgressBar.ProgressBar, {
          show: true,
          overlay: true
        });
      } else {
        return null;
      }
    }

    /**
     * Render body.
     * @returns {XML}
     */

  }, {
    key: 'renderBody',
    value: function renderBody() {
      return _react2.default.createElement(
        _tags.Body,
        null,
        this.props.children
      );
    }

    /**
     * Render modal.
     * @returns {XML}
     */

  }, {
    key: 'renderModal',
    value: function renderModal() {
      return _react2.default.createElement(
        _tags.Container,
        { style: _extends({ height: window.innerHeight }) },
        _react2.default.createElement(
          _tags.Wrapper,
          null,
          this.renderProgress(),
          this.renderErrors(),
          this.renderBody()
        )
      );
    }

    /**
     * Render error message.
     * @returns {XML}
     */

  }, {
    key: 'renderErrors',
    value: function renderErrors() {
      if (this.state.errors) {
        var errors = this.state.errors.map(function (error, index) {
          return _react2.default.createElement(
            _tags.ErrorItem,
            { key: index },
            error.message
          );
        });

        return _react2.default.createElement(
          _tags.Errors,
          null,
          errors
        );
      } else {
        return null;
      }
    }

    /**
     * Render error message.
     * @returns {XML}
     */

  }, {
    key: 'render',
    value: function render() {
      return this.state.show ? this.renderModal() : null;
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  show: _propTypes2.default.bool,
  progressBar: _propTypes2.default.bool,
  errors: _propTypes2.default.array
};

exports.default = Dialog;