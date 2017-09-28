'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorItem = exports.Errors = exports.Body = exports.Header = exports.Wrapper = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  display: flex;;\n  justify-content: center;\n  align-items: center;\n'], ['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  display: flex;;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-radius: 4px;\n  width: 350px;\n  background-color: white;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  position: relative;\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    border-radius: 0;\n    width: 100%;\n    height: 100% !important;\n    top: 0;\n    right: 0;\n    margin: 0;\n    box-shadow: none;\n  }\n}\n'], ['\n  border-radius: 4px;\n  width: 350px;\n  background-color: white;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  position: relative;\n  overflow: hidden;\n\n  @media (max-width: 576px) {\n    border-radius: 0;\n    width: 100%;\n    height: 100% !important;\n    top: 0;\n    right: 0;\n    margin: 0;\n    box-shadow: none;\n  }\n}\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-bottom: 1px solid #cecece;\n  min-height: 30px;\n  color: #757575;\n  display: flex;\n'], ['\n  border-bottom: 1px solid #cecece;\n  min-height: 30px;\n  color: #757575;\n  display: flex;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 15px 25px;\n\n  @media (max-width: 576px) {\n    padding: 10px 20px;\n  }\n'], ['\n  padding: 15px 25px;\n\n  @media (max-width: 576px) {\n    padding: 10px 20px;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin-top: 15px;\n  padding: 0 25px;\n\n  @media (max-width: 576px) {\n    padding: 0 20px;\n  }\n'], ['\n  margin-top: 15px;\n  padding: 0 25px;\n\n  @media (max-width: 576px) {\n    padding: 0 20px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  color: #d50000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n'], ['\n  color: #d50000;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-flex: 1 1 auto;\n  flex: 1 1 auto;\n  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = _styledComponents2.default.div(_templateObject);

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject2);

var Header = exports.Header = _styledComponents2.default.div(_templateObject3);

var Body = exports.Body = _styledComponents2.default.div(_templateObject4);

var Errors = exports.Errors = _styledComponents2.default.div(_templateObject5);

var ErrorItem = exports.ErrorItem = _styledComponents2.default.div(_templateObject6);