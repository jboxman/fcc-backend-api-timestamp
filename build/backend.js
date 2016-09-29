require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEpoch = isEpoch;

exports.default = function (value) {
  var dateFmt = 'MMMM D, YYYY';
  var unix = void 0;
  var natural = void 0;
  var parsedDate = void 0;
  var asDate = void 0;

  if (isEpoch(value)) {
    unix = value;
    natural = _moment2.default.unix(value).format(dateFmt);
  } else {
    parsedDate = _chronoNode2.default.parseDate(value);

    if (parsedDate) {
      asDate = new Date(parsedDate).getTime();
      natural = (0, _moment2.default)(asDate).format(dateFmt);
      unix = asDate / 1000.0;
    } else {
      unix = null;
      natural = null;
    }
  }

  return {
    unix: unix,
    natural: natural
  };
};

var _moment = __webpack_require__(4);

var _moment2 = _interopRequireDefault(_moment);

var _chronoNode = __webpack_require__(3);

var _chronoNode2 = _interopRequireDefault(_chronoNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEpoch(value) {
  return (/^\d{10}$/.test(value)
  );
}

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("chrono-node");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("moment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(1);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dateHelper = __webpack_require__(0);

var _dateHelper2 = _interopRequireDefault(_dateHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// Required for heroku
var port = process.env.PORT || 3100;

// __dirname is '/' after babel
app.use(_express2.default.static(process.cwd() + '/public'));

app.use(_bodyParser2.default.json());

app.post('/', function (req, res) {
  var _req$body = req.body;
  var natural = _req$body.natural;
  var unix = _req$body.unix;


  if (!natural && !unix) {
    res.status(400).send('Invalid API call');
    return;
  }

  res.json((0, _dateHelper2.default)(natural || unix));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).render('error');
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

/***/ }
/******/ ]);
//# sourceMappingURL=backend.js.map