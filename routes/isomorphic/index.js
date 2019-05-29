/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 158);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var setCurrentTab = exports.setCurrentTab = function setCurrentTab(data) {
    return {
        type: 'SET_TAB',
        data: data
    };
};

var showLeftSidebar = exports.showLeftSidebar = function showLeftSidebar(data) {
    return {
        type: 'LEFT_SIDEBAR_VISIBILITY',
        data: data
    };
};

var enableSoundAction = exports.enableSoundAction = function enableSoundAction(data) {
    return {
        type: 'ENABLE_SOUND',
        data: data
    };
};

var addPrivateMessages = exports.addPrivateMessages = function addPrivateMessages(data) {
    return {
        type: 'ADD_PRIVATE_MESSAGES',
        data: data
    };
};

var addPrivateRoom = exports.addPrivateRoom = function addPrivateRoom(data) {
    return {
        type: 'ADD_PRIVATE_ROOM',
        data: data
    };
};

var updateRoomList = exports.updateRoomList = function updateRoomList(data) {
    return {
        type: 'UPDATE_ROOM_LIST',
        data: data
    };
};

var loadSpinner = exports.loadSpinner = function loadSpinner(data) {
    return {
        type: 'LOAD_SPINNER',
        data: data
    };
};

var updateMessage = exports.updateMessage = function updateMessage(data) {
    return {
        type: 'UPDATE_MESSAGE',
        data: data
    };
};

var setTemporaryUser = exports.setTemporaryUser = function setTemporaryUser(data) {
    return {
        type: 'ADD_TEMP_USER',
        data: data
    };
};

var setProfileUser = exports.setProfileUser = function setProfileUser(data) {
    return {
        type: 'PROFILE_USER',
        data: data
    };
};

var setSocketObject = exports.setSocketObject = function setSocketObject(data) {
    return {
        type: 'SOCKET_OBJECT',
        data: data
    };
};

var updateProfileSocket = exports.updateProfileSocket = function updateProfileSocket(data) {
    return {
        type: 'UPDATE_SOCKET',
        data: data
    };
};

var insertMessage = exports.insertMessage = function insertMessage(data) {
    return {
        type: 'ADD_MESSAGE',
        data: data
    };
};

var prependMessages = exports.prependMessages = function prependMessages(data) {
    return {
        type: 'PREPEND_MESSAGES',
        data: data
    };
};

var prependPrivateMessages = exports.prependPrivateMessages = function prependPrivateMessages(data) {
    return {
        type: 'PREPEND_PRIVATE_MESSAGES',
        data: data
    };
};

var showPrependLoader = exports.showPrependLoader = function showPrependLoader(data) {
    return {
        type: 'SHOW_PREPEND_LOADER',
        data: data
    };
};

var addChatMessages = exports.addChatMessages = function addChatMessages(data) {
    return {
        type: 'ADD_CHAT',
        data: data
    };
};

var getRooms = exports.getRooms = function getRooms(data) {
    return {
        type: 'GET_ROOMS',
        data: data
    };
};

var joinRefreshRooms = exports.joinRefreshRooms = function joinRefreshRooms(data) {
    return {
        type: 'JOIN_REFRESH_ROOMS',
        data: data
    };
};

var activeRoom = exports.activeRoom = function activeRoom(data) {
    return {
        type: 'ACTIVE_ROOM',
        data: data
    };
};

var updateActiveRoom = exports.updateActiveRoom = function updateActiveRoom(data) {
    return {
        type: 'UPDATE_ACTIVE_ROOM',
        data: data
    };
};

var closeActiveRoom = exports.closeActiveRoom = function closeActiveRoom(data) {
    return {
        type: 'CLOSE_ACTIVE_ROOM',
        data: data
    };
};

var sendMessage = exports.sendMessage = function sendMessage(data) {
    return {
        type: 'SEND_MESSAGE',
        data: data
    };
};

var addNotifyPrivateIdCollection = exports.addNotifyPrivateIdCollection = function addNotifyPrivateIdCollection(data) {
    return {
        type: 'ADD_TO_PRIVATE_NOTIFY_COLLECTION',
        data: data
    };
};
var deleteFromNotifyCollection = exports.deleteFromNotifyCollection = function deleteFromNotifyCollection(data) {
    return {
        type: 'DELETE_FROM_NOTIFY_COLLECTION',
        data: data
    };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

exports.sort_by = function (field, reverse, primer) {
    var key = function key(x) {
        return primer ? primer(x[field]) : x[field];
    };

    return function (a, b) {
        var A = key(a),
            B = key(b);
        return (A < B ? -1 : A > B ? 1 : 0) * [-1, 1][+!!reverse];
    };
};

exports.primaryTextFunction = function (text, size) {
    if ($(window).innerWidth() > 575 && text.length >= size) {
        return text.split("").slice(0, size).join("") + "...";
    } else return text;
};

exports.validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

exports.scrollTo = function (element, to, duration) {
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function animateScroll() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(34);

var ReactCurrentOwner = __webpack_require__(17);

var warning = __webpack_require__(12);
var canDefineProperty = __webpack_require__(18);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(37);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/es/withRouter");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Action/account-circle");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

module.exports = ReactCurrentOwner;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(10);

var ReactCurrentOwner = __webpack_require__(17);

var invariant = __webpack_require__(11);
var warning = __webpack_require__(12);

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty
  // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,

  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
      // Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};

module.exports = ReactComponentTreeHook;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(33);
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        max: 25
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    savedSettings: {
        notifications: {
            type: Array,
            default: []
        },
        favourites: {
            type: Array,
            default: []
        }
    },
    socketID: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('users', userSchema);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/CircularProgress");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconMenu");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("material-ui/MenuItem");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/close");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(10),
    _assign = __webpack_require__(34);

var ReactNoopUpdateQueue = __webpack_require__(39);

var canDefineProperty = __webpack_require__(18);
var emptyObject = __webpack_require__(124);
var invariant = __webpack_require__(11);
var lowPriorityWarning = __webpack_require__(24);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */



var ReactCurrentOwner = __webpack_require__(17);
var ReactComponentTreeHook = __webpack_require__(23);
var ReactElement = __webpack_require__(8);

var checkReactTypeSpec = __webpack_require__(68);

var canDefineProperty = __webpack_require__(18);
var getIteratorFn = __webpack_require__(40);
var warning = __webpack_require__(12);
var lowPriorityWarning = __webpack_require__(24);

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook.getCurrentStackAddendum();

        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
        ReactComponentTreeHook.popNonStandardWarningStack();
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

module.exports = ReactElementValidator;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var warning = __webpack_require__(12);

function warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

var _TextField = __webpack_require__(31);

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = __webpack_require__(32);

var _close2 = _interopRequireDefault(_close);

__webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_close2.default, {
    color: _colors.teal300
});

var URLFormContainer = function (_Component) {
    _inherits(URLFormContainer, _Component);

    function URLFormContainer(props) {
        _classCallCheck(this, URLFormContainer);

        var _this = _possibleConstructorReturn(this, (URLFormContainer.__proto__ || Object.getPrototypeOf(URLFormContainer)).call(this, props));

        _this.state = {
            open: false,
            inputValue: ''
        };
        _this.handleURLSubmit = _this.handleURLSubmit.bind(_this);
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
        _this.inputOnChange = _this.inputOnChange.bind(_this);
        return _this;
    }

    _createClass(URLFormContainer, [{
        key: 'handleRequestClose',
        value: function handleRequestClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'inputOnChange',
        value: function inputOnChange(event) {
            this.setState({
                inputValue: event.target.value
            });
        }
    }, {
        key: 'handleURLSubmit',
        value: function handleURLSubmit(event) {
            event.preventDefault();
            if (this.state.inputValue.trim()) {
                this.props.socketIO.emit("urlInserted", {
                    url: this.state.inputValue.toLowerCase(),
                    user: this.props.profileuser,
                    activeRoom: this.props.activeRoomState ? this.props.activeRoomState : null
                });
                this.props.loadSpinner(true);
                this.setState({
                    inputValue: ''
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx('div', {
                className: 'formWrapper',
                style: style.formWrapper
            }, void 0, _jsx('form', {
                className: 'formURL',
                style: style.form,
                onSubmit: this.handleURLSubmit
            }, void 0, _jsx(_TextField2.default, {
                hintText: 'Insert URL',
                value: this.state.inputValue,
                hintStyle: { fontSize: 14, bottom: 8 },
                inputStyle: { fontSize: 14 },
                underlineShow: false,
                style: { height: 40 },
                onChange: this.inputOnChange
            })), _jsx(_IconButton2.default, {
                className: 'mobileNavIcon',
                style: { marginRight: -10 },
                onTouchTap: function onTouchTap() {
                    _this2.props.showLeftSidebar(false);
                }
            }, void 0, _ref));
        }
    }]);

    return URLFormContainer;
}(_react.Component);

var style = {
    spinner: {
        position: 'absolute',
        right: 5,
        top: 6
    },
    snackBarBody: {
        backgroundColor: _colors.teal600
    },
    snackBarContent: {
        color: _colors.teal50
    },
    formWrapper: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 2,
        paddingLeft: 10,
        boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)'
    },
    input: {
        width: '100%',
        borderRadius: 3,
        height: 35,
        border: '1px solid rgba(0,96,100,0.3)',
        outline: 'none',
        boxSizing: 'border-box',
        paddingLeft: 10,
        fontSize: 14
    },
    arrowIcon: {
        marginRight: -15
    },
    icons: {
        color: _colors.teal50
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        loadSpinner: _index.loadSpinner,
        showLeftSidebar: _index.showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        activeRoomState: state.activeRoom,
        spinner: state.spinner
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(URLFormContainer);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find2 = __webpack_require__(13);

var _find3 = _interopRequireDefault(_find2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    border-right: 1px solid rgb(224, 242, 241);\n    @media screen and (-webkit-min-device-pixel-ratio:0), @media screen and(-webkit-min-device-pixel-ratio:0){\n        & > div:first-child{\n            margin-bottom: -16px !important;\n        }       \n    }\n    & > div:last-child{\n        z-index: 999;\n    }\n'], ['\n    border-right: 1px solid rgb(224, 242, 241);\n    @media screen and (-webkit-min-device-pixel-ratio:0), @media screen and(-webkit-min-device-pixel-ratio:0){\n        & > div:first-child{\n            margin-bottom: -16px !important;\n        }       \n    }\n    & > div:last-child{\n        z-index: 999;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _List = __webpack_require__(7);

var _infoOutline = __webpack_require__(136);

var _infoOutline2 = _interopRequireDefault(_infoOutline);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

var _PrivateUserListItem = __webpack_require__(95);

var _PrivateUserListItem2 = _interopRequireDefault(_PrivateUserListItem);

var _PrivateUserBadgeListItem = __webpack_require__(94);

var _PrivateUserBadgeListItem2 = _interopRequireDefault(_PrivateUserBadgeListItem);

var _ListItemURL = __webpack_require__(80);

var _ListItemURL2 = _interopRequireDefault(_ListItemURL);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCustomScrollbars = __webpack_require__(54);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListURLContainer = function (_PureComponent) {
    _inherits(ListURLContainer, _PureComponent);

    function ListURLContainer(props) {
        _classCallCheck(this, ListURLContainer);

        var _this = _possibleConstructorReturn(this, (ListURLContainer.__proto__ || Object.getPrototypeOf(ListURLContainer)).call(this, props));

        _this.state = {
            toggleRooms: []
        };
        _this.displayActiveRooms = _this.displayActiveRooms.bind(_this);
        _this.showMembers = _this.showMembers.bind(_this);
        _this.changeToggleRoomsState = _this.changeToggleRoomsState.bind(_this);
        return _this;
    }

    _createClass(ListURLContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props = this.props,
                changeMessageLoaderState = _props.changeMessageLoaderState,
                socketIO = _props.socketIO;

            socketIO.on("receiveSpecificPublicRoomMessages", function (data) {
                if (data) {
                    _this2.props.loadSpinner(false);
                    _this2.props.addChatMessages({
                        receiver: _this2.props.activeRoomState && _this2.props.activeRoomState,
                        messages: data.result,
                        messagesNumber: data.messagesNumber || null
                    });

                    setTimeout(function () {
                        var containerElement = $(".messagesListWrapper > div:first-child > div");
                        $(".messagesListWrapper > div:first-child").animate({ scrollTop: containerElement.height(), top: top }, 500);
                    }, 250);
                } else if (changeMessageLoaderState) changeMessageLoaderState(false);
            });
        }
    }, {
        key: 'changeToggleRoomsState',
        value: function changeToggleRoomsState(value) {
            this.setState({
                toggleRooms: value
            });
        }
    }, {
        key: 'showMembers',
        value: function showMembers() {
            var _this3 = this;

            var _props2 = this.props,
                activeRoomState = _props2.activeRoomState,
                tab = _props2.tab,
                rooms = _props2.rooms,
                privateNotifyCollection = _props2.privateNotifyCollection,
                profileuser = _props2.profileuser;

            if (activeRoomState && tab) {
                var activeRoom = (0, _find3.default)(rooms, function (o) {
                    return o.name == activeRoomState.name;
                });
                if (activeRoom) {
                    activeRoom = (0, _find3.default)(activeRoom.rooms, function (o) {
                        return o.route == activeRoomState.route;
                    });
                    if (activeRoom) {
                        var filteredMembersArray = activeRoom.members.filter(function (item) {
                            if (_this3.props.filterVal) {
                                return item.username.toLowerCase().indexOf(_this3.props.filterVal.toLowerCase()) != -1;
                            } else return true;
                        });

                        var sortedMembersByNotification = [];
                        for (var i = 0; i < filteredMembersArray.length; i++) {
                            if (privateNotifyCollection.length) {
                                var hasNotification = privateNotifyCollection.indexOf(filteredMembersArray[i]._id);
                                if (hasNotification != -1) {
                                    sortedMembersByNotification = [filteredMembersArray[i]].concat(_toConsumableArray(sortedMembersByNotification));
                                } else {
                                    sortedMembersByNotification = [].concat(_toConsumableArray(sortedMembersByNotification), [filteredMembersArray[i]]);
                                }
                            } else sortedMembersByNotification = filteredMembersArray;
                        }

                        return sortedMembersByNotification.map(function (item) {
                            /* Check if current user from the loop is not currently loggedin user */
                            if (item._id != profileuser._id) {
                                var checkNotifications = [];
                                if (privateNotifyCollection.length) {
                                    checkNotifications = privateNotifyCollection.filter(function (userID) {
                                        return userID == item._id;
                                    });
                                }
                                if (checkNotifications.length) {
                                    return _jsx(_PrivateUserBadgeListItem2.default, {
                                        item: item,
                                        checkNotifications: checkNotifications
                                    }, item._id);
                                } else {
                                    return _jsx(_PrivateUserListItem2.default, {
                                        item: item
                                    }, item._id);
                                }
                            }
                        });
                    }
                }
            }
        }
    }, {
        key: 'displayActiveRooms',
        value: function displayActiveRooms() {
            var _this4 = this;

            var changeMessageLoaderState = this.props.changeMessageLoaderState;

            if (this.props.rooms && !this.props.tab) {
                return this.props.rooms.map(function (room) {
                    var theKey = room.name;
                    var toggleElement = _this4.state.toggleRooms.indexOf(room.name) >= 0 ? { display: 'block' } : { display: 'none' };
                    return _jsx(_ListItemURL2.default, {
                        theKey: theKey,
                        room: room,
                        toggleElement: toggleElement,
                        toggleRooms: _this4.state.toggleRooms,
                        changeToggleRoomsState: _this4.changeToggleRoomsState,
                        changeMessageLoaderState: changeMessageLoaderState
                    }, theKey);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                tab = _props3.tab,
                activeRoomState = _props3.activeRoomState,
                rooms = _props3.rooms;

            var title = this.props.tab ? 'Room Members' : 'Available Rooms';
            return _jsx('div', {
                style: style.mainWrapper
            }, void 0, _jsx('p', {
                style: style.title
            }, void 0, title), !this.props.filterVal && this.props.tab == 1 && activeRoomState && activeRoomState.members.length > 7 && _jsx('div', {
                className: 'emptyGradient',
                style: style.emptyGradientScrollBlock
            }), this.props.tab == 0 && rooms && rooms.length > 7 && _jsx('div', {
                className: 'emptyGradient',
                style: style.emptyGradientScrollBlock
            }), this.props.tab == 0 && _jsx(CustomScroller, {
                style: { width: '100%', height: 350 },
                autoHide: true,
                autoHideTimeout: 1000,
                autoHideDuration: 200
            }, void 0, _jsx(_List.List, {
                style: style.list
            }, void 0, this.displayActiveRooms())), this.props.tab == 1 && activeRoomState && activeRoomState.members.length > 1 && _jsx(CustomScroller, {
                className: 'privateUsersList',
                style: style.customScroller,
                autoHide: true,
                autoHideTimeout: 1000,
                autoHideDuration: 200
            }, void 0, _jsx(_List.List, {
                style: style.list
            }, void 0, this.showMembers())), tab == 1 && (!activeRoomState || activeRoomState.members.length < 2) && _jsx('div', {
                style: { display: 'flex' }
            }, void 0, _jsx(_infoOutline2.default, {
                style: style.infoIcon
            }), _jsx('div', {}, void 0, _jsx('p', {
                style: Object.assign({}, style.emptyMessage, { marginTop: 10 })
            }, void 0, 'Empty members list'), _jsx('p', {
                style: style.emptyMessage
            }, void 0, 'Please insert or select available URL room'))));
        }
    }]);

    return ListURLContainer;
}(_react.PureComponent);

ListURLContainer.propTypes = {
    tab: _propTypes2.default.number.isRequired
};

var CustomScroller = (0, _styledComponents2.default)(_reactCustomScrollbars.Scrollbars)(_templateObject);

var style = {
    mainWrapper: {
        position: 'relative',
        overflow: 'hidden'
    },
    emptyGradientScrollBlock: {
        width: '100%',
        height: 25,
        position: 'absolute',
        bottom: -18,
        borderRadius: '100%',
        zIndex: 999,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
        pointerEvents: 'all'
    },
    customScroller: {
        width: '100%',
        height: 329
    },
    title: {
        color: _colors.teal300,
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 12
    },
    subListItem: {
        fontSize: 13,
        color: 'white',
        fontWeight: 300
    },
    subListItemInner: {
        padding: '10px 15px'
    },
    subList: {
        backgroundColor: _colors.teal500,
        padding: 0
    },
    list: {
        padding: 0,
        backgroundColor: 'white'
    },
    listItem: {
        borderBottom: '1px solid ' + _colors.tealA100,
        color: _colors.teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: _colors.teal300,
        height: '100%',
        right: 0,
        top: 0
    },
    relativeWrap: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    memberNumb: {
        height: '100%',
        top: -7
    },
    counter: {
        fontSize: 10,
        color: _colors.teal50,
        fontWeight: 500,
        alignSelf: 'center',
        marginTop: -19
    },
    profileIcon: {
        color: _colors.teal50
    },
    innerDiv: {
        padding: '15px 16px 15px 65px'
    },
    avatar: {
        borderRadius: '100%',
        objectFit: 'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.5)',
        backgroundColor: 'white'
    },
    emptyMessage: {
        color: _colors.teal300,
        fontSize: 13,
        paddingLeft: 10,
        fontWeight: 300,
        marginBottom: 0,
        cursor: 'default'
    },
    infoIcon: {
        position: 'relative',
        top: 13,
        marginLeft: 10,
        color: _colors.teal300
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        getRooms: _index.getRooms,
        activeRoom: _index.activeRoom,
        addChatMessages: _index.addChatMessages,
        showLeftSidebar: _index.showLeftSidebar,
        addPrivateRoom: _index.addPrivateRoom,
        loadSpinner: _index.loadSpinner
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms,
        socketIO: state.socketobject,
        chatMessages: state.chatmessages,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        privateRoom: state.privateRoom,
        privateNotifyCollection: state.privateNotifyCollection
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(ListURLContainer);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _React = __webpack_require__(72);

var _React2 = _interopRequireDefault(_React);

var _colors = __webpack_require__(2);

var _List = __webpack_require__(7);

var _Avatar = __webpack_require__(48);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _accountCircle = __webpack_require__(16);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _reactTooltip = __webpack_require__(55);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _index = __webpack_require__(4);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _utils = __webpack_require__(5);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = __webpack_require__(32);

var _close2 = _interopRequireDefault(_close);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_close2.default, {
    color: _colors.teal300
});

var _ref2 = _jsx(_close2.default, {
    color: _colors.teal300
});

var SingleListItem = function (_Component) {
    _inherits(SingleListItem, _Component);

    function SingleListItem(props) {
        _classCallCheck(this, SingleListItem);

        var _this = _possibleConstructorReturn(this, (SingleListItem.__proto__ || Object.getPrototypeOf(SingleListItem)).call(this, props));

        _this.fallBack = "https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00167-Abstract-spiral-globe-logo-design-free-online-logomaker-01.png";
        _this.closeAndLeaveRoom = _this.closeAndLeaveRoom.bind(_this);
        _this.showActiveSingleItem = _this.showActiveSingleItem.bind(_this);
        return _this;
    }

    _createClass(SingleListItem, [{
        key: 'closeAndLeaveRoom',
        value: function closeAndLeaveRoom() {
            this.props.socketIO.emit("leaveRoom", {
                room: this.props.activeRoomState,
                user: this.props.profileuser
            });
            document.querySelector(".messagesListWrapper > div:first-child").style.top = "1px";
            this.props.closeActiveRoom();
            this.props.showPrependLoader(false);
        }
    }, {
        key: 'showActiveSingleItem',
        value: function showActiveSingleItem() {
            var _this2 = this;

            if (!this.props.tab) {
                return _jsx('div', {}, void 0, _jsx('p', {
                    style: style.title
                }, void 0, this.props.title), _jsx(_List.ListItem, {
                    style: style.listItem,
                    innerDivStyle: Object.assign(style.innerDiv),
                    rightIconButton: _jsx(_IconButton2.default, {
                        onTouchTap: this.closeAndLeaveRoom,
                        style: {
                            top: 0,
                            right: 0
                        }
                    }, void 0, _ref),
                    leftAvatar: _jsx(_Avatar2.default, {
                        style: style.avatar,
                        src: this.props.activeRoomState.image ? this.props.activeRoomState.image : this.fallBack
                    })
                }, void 0, _jsx('p', {
                    style: style.mainRoomTitle
                }, void 0, this.props.activeRoomState.name), _jsx('p', {
                    'data-tip': true,
                    'data-for': 'headerURL',
                    style: style.overflowRouteText
                }, void 0, this.props.activeRoomState.route), _jsx(_reactTooltip2.default, {
                    id: 'headerURL',
                    place: 'bottom',
                    type: 'dark',
                    effect: 'solid'
                }, void 0, _jsx('span', {}, void 0, this.props.activeRoomState.route))));
            } else if (this.props.privateRoom) {
                if (this.props.privateRoom.users) {
                    var receiver = this.props.privateRoom.users.filter(function (item) {
                        return item.username != _this2.props.profileuser.username;
                    });
                    var username = receiver[0].username;

                    return _jsx('div', {}, void 0, _jsx('p', {
                        style: style.title
                    }, void 0, this.props.title), _jsx(_List.ListItem, {
                        className: 'singleUserListItem',
                        primaryText: username,
                        style: Object.assign({}, style.listItem, {
                            fontSize: 14,
                            fontWeight: 400
                        }),
                        leftIcon: _jsx(_accountCircle2.default, {
                            style: style.accountIcon
                        }),
                        rightIconButton: _jsx(_IconButton2.default, {
                            style: { right: 0 },
                            onTouchTap: function onTouchTap() {
                                _this2.props.addPrivateRoom(null);
                                _this2.props.addPrivateMessages(null);
                            }
                        }, void 0, _ref2)
                    }));
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var tab = this.props.tab;

            return _jsx('div', {}, void 0, this.props.activeRoomState && tab == 0 && _jsx('div', {
                style: style.activeItemStyle
            }, void 0, this.showActiveSingleItem()), this.props.privateRoom && tab == 1 && _jsx('div', {
                style: style.activeItemStyle
            }, void 0, this.showActiveSingleItem()));
        }
    }]);

    return SingleListItem;
}(_React.Component);

SingleListItem.propTypes = {
    title: _propTypes2.default.string.isRequired,
    tab: _propTypes2.default.number.isRequired
};

var style = {
    activeItemStyle: {
        marginBottom: 15
    },
    accountIcon: {
        fill: _colors.teal500,
        width: 30,
        height: 30,
        margin: 8
    },
    title: {
        color: _colors.teal300,
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 10
    },
    subListItemInner: {
        padding: '10px 15px'
    },
    wrapSubList: {
        marginTop: -3
    },
    listItem: {
        backgroundColor: 'white',
        borderTop: '1px solid ' + _colors.tealA100,
        borderBottom: '1px solid ' + _colors.tealA100,
        color: _colors.teal500,
        fontWeight: 300,
        position: 'relative',
        fontSize: 14
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: _colors.teal700,
        height: '100%',
        right: 0,
        top: 2
    },
    relativeWrap: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    memberNumb: {
        height: '100%',
        top: -7
    },
    counter: {
        fontSize: 10,
        color: _colors.teal50,
        fontWeight: 500,
        alignSelf: 'center',
        marginTop: -19
    },
    profileIcon: {
        color: _colors.teal50
    },
    innerDiv: {
        padding: '5px 16px 5px 65px'
    },
    avatar: {
        borderRadius: '100%',
        objectFit: 'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.5)',
        top: 10,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.05)'
    },
    overflowRouteText: {
        margin: 0,
        fontSize: 12,
        display: 'inline-block',
        color: _colors.teal300,
        whiteSpace: 'nowrap',
        width: 190,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    mainRoomTitle: {
        whiteSpace: 'nowrap',
        width: 190,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 2,
        color: _colors.teal500,
        textTransform: 'uppercase'
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        activeRoom: _index.activeRoom,
        closeActiveRoom: _index.closeActiveRoom,
        addPrivateRoom: _index.addPrivateRoom,
        addPrivateMessages: _index.addPrivateMessages,
        showPrependLoader: _index.showPrependLoader
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        privateRoom: state.privateRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(SingleListItem);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width:647px){\n        width: 242px !important;\n    }\n'], ['\n    @media (max-width:647px){\n        width: 242px !important;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _TextField = __webpack_require__(31);

var _TextField2 = _interopRequireDefault(_TextField);

var _search = __webpack_require__(138);

var _search2 = _interopRequireDefault(_search);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = __webpack_require__(32);

var _close2 = _interopRequireDefault(_close);

var _index = __webpack_require__(4);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_close2.default, {
    color: _colors.teal300
});

var UserFormContainer = function (_Component) {
    _inherits(UserFormContainer, _Component);

    function UserFormContainer(props) {
        _classCallCheck(this, UserFormContainer);

        var _this = _possibleConstructorReturn(this, (UserFormContainer.__proto__ || Object.getPrototypeOf(UserFormContainer)).call(this, props));

        _this.state = {
            open: false
        };
        _this.inputOnChange = _this.inputOnChange.bind(_this);
        return _this;
    }

    _createClass(UserFormContainer, [{
        key: 'handleRequestClose',
        value: function handleRequestClose() {
            this.setState({
                open: false
            });
        }
    }, {
        key: 'inputOnChange',
        value: function inputOnChange(event) {
            this.props.changeFilterVal(event.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx('div', {
                className: 'formWrapper',
                style: style.formWrapper
            }, void 0, _jsx(CustomForm, {
                action: 'javascript:void(0)',
                className: 'formURL',
                style: style.form
            }, void 0, _jsx(_search2.default, {
                style: style.searchIcon
            }), _jsx(_TextField2.default, {
                hintText: 'Search user',
                value: this.props.filterVal,
                hintStyle: { fontSize: 14, bottom: 8 },
                inputStyle: { fontSize: 14 },
                underlineShow: false,
                style: { height: 40 },
                onChange: this.inputOnChange
            })), _jsx(_IconButton2.default, {
                className: 'mobileNavIcon',
                style: { marginRight: -10 },
                onTouchTap: function onTouchTap() {
                    _this2.props.showLeftSidebar(false);
                }
            }, void 0, _ref));
        }
    }]);

    return UserFormContainer;
}(_react.Component);

var CustomForm = _styledComponents2.default.form(_templateObject);

var style = {
    searchIcon: {
        position: 'absolute',
        right: 9,
        top: 9,
        color: _colors.teal500
    },
    formWrapper: {
        padding: '10px',
        display: 'flex',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 2,
        paddingLeft: 10,
        boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)'
    },
    input: {
        width: '100%',
        borderRadius: 3,
        height: 35,
        border: '1px solid rgba(0,96,100,0.3)',
        outline: 'none',
        boxSizing: 'border-box',
        paddingLeft: 10,
        fontSize: 14
    },
    arrowIcon: {
        marginRight: -15
    },
    icons: {
        color: _colors.teal50
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        showLeftSidebar: _index.showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        activeRoomState: state.activeRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(UserFormContainer);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(20)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./messages.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./messages.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(20)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./urlForm.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./urlForm.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqWith");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Action/info-outline");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Content/block");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Hardware/keyboard-arrow-down");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Hardware/keyboard-arrow-up");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("password-hash");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-css/components/loader.css");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Loader/Loader");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

__webpack_require__(120)({
  presets: ['env', 'react']
});
__webpack_require__(35);
__webpack_require__(125);
var express = __webpack_require__(122),
    router = express.Router(),
    registrationController = __webpack_require__(74),
    loginController = __webpack_require__(73),
    getUser = __webpack_require__(112);

var ReactDOM = __webpack_require__(149);
var ReactApp = __webpack_require__(75);

/* GET home page. */

var _ref = _jsx(ReactApp, {});

router.get('/', function (req, res, next) {
  var appString = ReactDOM.renderToString(_ref);
  res.render('index', { title: 'Chat-project' });
});

router.post('/user', function (req, res, next) {
  var _this = this;

  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getUser(req.body.data);

          case 2:
            result = _context.sent;

            if (result) res.status(200).json(result);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }))();
});

router.route("/register").get(function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
}).post(registrationController, function (req, res, next) {
  if (req.result) res.status(200).json(req.result);
});

router.route("/login").get(function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
}).post(loginController, function (req, res, next) {
  if (req.result) res.status(200).json(req.result);
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

/*
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Chat-project' });
});
*/

module.exports = router;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(10);

var invariant = __webpack_require__(11);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(34);

var ReactBaseClasses = __webpack_require__(36);
var ReactChildren = __webpack_require__(62);
var ReactDOMFactories = __webpack_require__(63);
var ReactElement = __webpack_require__(8);
var ReactPropTypes = __webpack_require__(65);
var ReactVersion = __webpack_require__(67);

var createReactClass = __webpack_require__(69);
var onlyChild = __webpack_require__(70);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var lowPriorityWarning = __webpack_require__(24);
  var canDefineProperty = __webpack_require__(18);
  var ReactElementValidator = __webpack_require__(38);
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;
var createMixin = function (mixin) {
  return mixin;
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var PooledClass = __webpack_require__(60);
var ReactElement = __webpack_require__(8);

var emptyFunction = __webpack_require__(123);
var traverseAllChildren = __webpack_require__(71);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactElement = __webpack_require__(8);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator = __webpack_require__(38);
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(8),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(146);

module.exports = factory(isValidElement);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



module.exports = '15.6.1';

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(10);

var ReactPropTypeLocationNames = __webpack_require__(64);
var ReactPropTypesSecret = __webpack_require__(66);

var invariant = __webpack_require__(11);
var warning = __webpack_require__(12);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(23);
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(23);
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(36),
    Component = _require.Component;

var _require2 = __webpack_require__(8),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__(39);
var factory = __webpack_require__(121);

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(10);

var ReactElement = __webpack_require__(8);

var invariant = __webpack_require__(11);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(10);

var ReactCurrentOwner = __webpack_require__(17);
var REACT_ELEMENT_TYPE = __webpack_require__(37);

var getIteratorFn = __webpack_require__(40);
var invariant = __webpack_require__(11);
var KeyEscapeUtils = __webpack_require__(59);
var warning = __webpack_require__(12);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(61);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var login = __webpack_require__(113);

var _require = __webpack_require__(5),
    validateEmail = _require.validateEmail;

module.exports = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var _req$body$data, email, password, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body$data = req.body.data, email = _req$body$data.email, password = _req$body$data.password;

                        if (!(validateEmail(email) && password)) {
                            _context.next = 15;
                            break;
                        }

                        _context.prev = 2;
                        _context.next = 5;
                        return login({ email: email, password: password });

                    case 5:
                        result = _context.sent;

                        if (result) {
                            req.result = result;
                            next();
                        }
                        _context.next = 13;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](2);

                        console.info("Login error");
                        next(_context.t0);

                    case 13:
                        _context.next = 16;
                        break;

                    case 15:
                        next(true);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[2, 9]]);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var register = __webpack_require__(111);

var _require = __webpack_require__(5),
    validateEmail = _require.validateEmail;

module.exports = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var _req$body$data, username, email, password, confirmPass, socketID, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _req$body$data = req.body.data, username = _req$body$data.username, email = _req$body$data.email, password = _req$body$data.password, confirmPass = _req$body$data.confirmPass, socketID = _req$body$data.socketID;

                        if (!(username && validateEmail(email) && password && confirmPass && password == confirmPass)) {
                            _context.next = 15;
                            break;
                        }

                        _context.prev = 2;
                        _context.next = 5;
                        return register({ username: username, email: email, password: password, socketID: socketID });

                    case 5:
                        result = _context.sent;

                        if (result) {
                            req.result = result;
                            next();
                        }
                        _context.next = 13;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](2);

                        console.info("Registration error");
                        next(_context.t0);

                    case 13:
                        _context.next = 16;
                        break;

                    case 15:
                        next(true);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[2, 9]]);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
//import Perf from 'react-addons-perf';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _BrowserRouter = __webpack_require__(151);

var _BrowserRouter2 = _interopRequireDefault(_BrowserRouter);

var _Route = __webpack_require__(153);

var _Route2 = _interopRequireDefault(_Route);

var _reactTapEventPlugin = __webpack_require__(154);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _MuiThemeProvider = __webpack_require__(131);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

var _Wrapper = __webpack_require__(83);

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _HomepageContainer = __webpack_require__(84);

var _HomepageContainer2 = _interopRequireDefault(_HomepageContainer);

var _Loginpage = __webpack_require__(86);

var _Loginpage2 = _interopRequireDefault(_Loginpage);

var _LoginComponent = __webpack_require__(85);

var _LoginComponent2 = _interopRequireDefault(_LoginComponent);

var _RegisterComponent = __webpack_require__(87);

var _RegisterComponent2 = _interopRequireDefault(_RegisterComponent);

__webpack_require__(145);

__webpack_require__(118);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'semantic-ui-css/semantic.min.css';

//window.Perf = Perf;
//Perf.start();

var store = (0, _redux.createStore)(_index2.default);
(0, _reactTapEventPlugin2.default)();

var _ref = _jsx(_reactRedux.Provider, {
    store: store
}, void 0, _jsx(_MuiThemeProvider2.default, {}, void 0, _jsx(_BrowserRouter2.default, {}, void 0, _jsx(_Wrapper2.default, {}, void 0, _jsx(_Route2.default, {
    exact: true,
    path: '/',
    component: _HomepageContainer2.default
}), _jsx(_Route2.default, {
    path: '/home',
    component: _Loginpage2.default
}), _jsx(_Route2.default, {
    path: '/login',
    component: _LoginComponent2.default
}), _jsx(_Route2.default, {
    path: '/register',
    component: _RegisterComponent2.default
})))));

var Main = function Main(props) {
    return _ref;
};

exports.default = Main;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: 767px){\n        max-width: 100px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;                        \n    }\n'], ['\n    @media (max-width: 767px){\n        max-width: 100px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;                        \n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(152);

var _Link2 = _interopRequireDefault(_Link);

var _colors = __webpack_require__(2);

var _Toggle = __webpack_require__(130);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _menu = __webpack_require__(140);

var _menu2 = _interopRequireDefault(_menu);

var _List = __webpack_require__(7);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = __webpack_require__(28);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(29);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _accountCircle = __webpack_require__(16);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _settings = __webpack_require__(132);

var _settings2 = _interopRequireDefault(_settings);

var _reactRedux = __webpack_require__(1);

var _withRouter = __webpack_require__(14);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_menu2.default, {
    color: 'white'
});

var _ref2 = _jsx(_accountCircle2.default, {
    color: 'white'
});

var _ref3 = _jsx(_MenuItem2.default, {
    primaryText: 'Profile'
});

var _ref4 = _jsx(_IconButton2.default, {}, void 0, _jsx(_settings2.default, {
    color: 'white'
}));

var _ref5 = _jsx(_MenuItem2.default, {
    primaryText: 'Help'
});

var Header = function (_PureComponent) {
    _inherits(Header, _PureComponent);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.signOut = _this.signOut.bind(_this);
        _this.closeAndLeaveRoom = _this.closeAndLeaveRoom.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: 'signOut',
        value: function signOut() {
            this.closeAndLeaveRoom();
            localStorage.removeItem("currentUser");
            //this.props.setTemporaryUser(null);
            this.props.history.push('/home');
            //document.location = "/home";
        }
    }, {
        key: 'closeAndLeaveRoom',
        value: function closeAndLeaveRoom() {
            if (this.props.activeRoomState && this.props.profileuser) {
                this.props.socketIO.emit("leaveRoom", {
                    room: this.props.activeRoomState,
                    user: this.props.profileuser
                });
                this.props.closeActiveRoom();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx('div', {
                className: 'mainHeader',
                style: style.outer
            }, void 0, _jsx(_IconButton2.default, {
                className: 'mobileNavIcon',
                onTouchTap: function onTouchTap() {
                    _this2.props.showLeftSidebar(!_this2.props.leftSidebarVisibility);
                }
            }, void 0, _ref), _jsx(_Link2.default, {
                to: '/home',
                style: style.link
            }, void 0, _jsx('img', {
                style: style.logo,
                src: '../../../images/forum_final_1_white.png'
            })), _jsx('div', {
                className: 'userBlock',
                style: style.userBlock
            }, void 0, _jsx(_List.List, {
                style: style.list
            }, void 0, _jsx(UsernameTitle, {
                style: style.username
            }, void 0, this.props.profileuser && this.props.profileuser.username), _jsx(_List.ListItem, {
                disabled: true,
                style: style.userList,
                rightIconButton: _jsx(_IconMenu2.default, {
                    className: 'headerRightIcons',
                    style: style.headerRightIcons,
                    iconButtonElement: _jsx(_IconButton2.default, {
                        style: {
                            marginRight: -15
                        }
                    }, void 0, _ref2),
                    anchorOrigin: { horizontal: 'right', vertical: 'top' },
                    targetOrigin: { horizontal: 'right', vertical: 'top' }
                }, void 0, _ref3, _jsx(_MenuItem2.default, {
                    primaryText: 'Login',
                    onTouchTap: function onTouchTap() {
                        _this2.props.history.push('/home');
                    }
                }), _jsx(_MenuItem2.default, {
                    primaryText: 'Sign out',
                    onTouchTap: this.signOut
                }))
            }, void 0), _jsx(_List.ListItem, {
                disabled: true,
                style: style.settingsList,
                rightIconButton: _jsx(_IconMenu2.default, {
                    className: 'headerRightIcons',
                    style: style.headerRightIcons,
                    iconButtonElement: _ref4,
                    anchorOrigin: { horizontal: 'right', vertical: 'top' },
                    targetOrigin: { horizontal: 'right', vertical: 'top' }
                }, void 0, _jsx(_List.ListItem, {}, void 0, _jsx(_Toggle2.default, {
                    label: 'Sounds',
                    labelPosition: 'left',
                    defaultToggled: this.props.enableSoundState,
                    thumbSwitchedStyle: { backgroundColor: _colors.teal50 },
                    trackStyle: { backgroundColor: _colors.teal100 },
                    trackSwitchedStyle: { backgroundColor: _colors.teal500 },
                    onToggle: function onToggle() {
                        _this2.props.enableSoundAction(!_this2.props.enableSoundState);
                    }
                })), _ref5)
            }, void 0))));
        }
    }]);

    return Header;
}(_react.PureComponent);

var UsernameTitle = _styledComponents2.default.p(_templateObject);

var style = {
    username: {
        marginRight: -12,
        cursor: 'default',
        fontSize: 14,
        color: 'white',
        marginTop: 12
    },
    headerRightIcons: {
        top: -7
    },
    outer: {
        height: 40,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: _colors.teal500
    },
    userBlock: {
        marginLeft: 'auto',
        marginRight: 25
    },
    logo: {
        width: 100,
        marginTop: 5
    },
    link: {
        textDecoration: 'none',
        marginLeft: 35,
        color: _colors.teal800
    },
    list: {
        display: 'flex',
        padding: 0,
        alignItems: 'center'
    },
    settingsList: {
        paddingLeft: 0
    },
    userList: {
        paddingRight: 40,
        fontSize: 14
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        closeActiveRoom: _index.closeActiveRoom,
        setTemporaryUser: _index.setTemporaryUser,
        showLeftSidebar: _index.showLeftSidebar,
        enableSoundAction: _index.enableSoundAction
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        leftSidebarVisibility: state.leftSidebarVisibility,
        enableSoundState: state.enableSound
    };
}

exports.default = (0, _withRouter2.default)((0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Header));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MessagesContainer = __webpack_require__(92);

var _MessagesContainer2 = _interopRequireDefault(_MessagesContainer);

var _MessageForm = __webpack_require__(91);

var _MessageForm2 = _interopRequireDefault(_MessageForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
    _inherits(Content, _Component);

    function Content(props) {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
    }

    _createClass(Content, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.tab == nextProps.currentTab) return true;
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {
                className: 'messagingContent',
                style: style.mainWrap
            }, void 0, _react2.default.createElement(_MessagesContainer2.default, this.props), _react2.default.createElement(_MessageForm2.default, this.props));
        }
    }]);

    return Content;
}(_react.Component);

var style = {
    mainWrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    }
};

exports.default = Content;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _templateObject = _taggedTemplateLiteral(['\n        padding: 0 40px;\n        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0.64) 63%, rgba(255,255,255,0) 100%); \n        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#00ffffff\',GradientType=0 );\n        @media (min-width: 1000px){\n            padding-right: 200px;\n        }\n'], ['\n        padding: 0 40px;\n        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0.64) 63%, rgba(255,255,255,0) 100%); \n        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#00ffffff\',GradientType=0 );\n        @media (min-width: 1000px){\n            padding-right: 200px;\n        }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: #00695C;\n    font-weight: 400;\n    margin-top: 5px;\n    font-size: 22px;\n    margin-bottom: 20px;\n'], ['\n    color: #00695C;\n    font-weight: 400;\n    margin-top: 5px;\n    font-size: 22px;\n    margin-bottom: 20px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-weight: 400;\n    font-size: 14px;\n    color: #00796B;\n    line-height: 21px;\n'], ['\n    font-weight: 400;\n    font-size: 14px;\n    color: #00796B;\n    line-height: 21px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InfoContainer = function InfoContainer(props) {
    return _ref;
};

var Wrapper = _styledComponents2.default.div(_templateObject);

var H4 = _styledComponents2.default.h4(_templateObject2);

var P = _styledComponents2.default.p(_templateObject3),
    _ref = _jsx(Wrapper, {}, void 0, _jsx(H4, {}, void 0, 'Welcome to Forum'), _jsx(P, {}, void 0, 'This is a space where you can meet and talk with people who are viewing the same website as you.'), _jsx(P, {}, void 0, 'Start by typing or copying in a website address (URL) into the \'Insert URL\' box.'), _jsx(P, {}, void 0, 'If someone has already created a chat room for that website, and they are in the chat room, you can join the discussion. Enjoy!'), _jsx(P, {}, void 0, 'If you are the first person to create the chat room, others will be able to see that it has been created and can join. Note that rooms disappear after 5 minutes with no users, but the chat room history will remain.'));

exports.default = InfoContainer;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _URLFormContainer = __webpack_require__(41);

var _URLFormContainer2 = _interopRequireDefault(_URLFormContainer);

var _ListURLContainer = __webpack_require__(42);

var _ListURLContainer2 = _interopRequireDefault(_ListURLContainer);

var _SingleListItem = __webpack_require__(43);

var _SingleListItem2 = _interopRequireDefault(_SingleListItem);

var _UserFormContainer = __webpack_require__(44);

var _UserFormContainer2 = _interopRequireDefault(_UserFormContainer);

var _reactRedux = __webpack_require__(1);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_URLFormContainer2.default, {});

var LeftURLSidebar = function (_PureComponent) {
    _inherits(LeftURLSidebar, _PureComponent);

    function LeftURLSidebar(props) {
        _classCallCheck(this, LeftURLSidebar);

        var _this = _possibleConstructorReturn(this, (LeftURLSidebar.__proto__ || Object.getPrototypeOf(LeftURLSidebar)).call(this, props));

        _this.state = {
            filterVal: '',
            scrollable: false
        };
        _this.showSingleItem = _this.showSingleItem.bind(_this);
        _this.changeFilterVal = _this.changeFilterVal.bind(_this);
        _this.checkHeight = _this.checkHeight.bind(_this);
        return _this;
    }

    _createClass(LeftURLSidebar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.x = window.matchMedia("(max-height: 615px)");
            this.checkHeight(this.x);
            this.x.addListener(this.checkHeight);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.x.removeListener(this.checkHeight);
        }
    }, {
        key: 'showSingleItem',
        value: function showSingleItem() {
            var title = this.props.tab ? 'Active private room' : 'Active Room';
            if (this.props.activeRoomState) return _react2.default.createElement(_SingleListItem2.default, _extends({ title: title }, this.props));
        }
    }, {
        key: 'changeFilterVal',
        value: function changeFilterVal(value) {
            this.setState({
                filterVal: value
            });
        }
    }, {
        key: 'checkHeight',
        value: function checkHeight(x) {
            if (x.matches && !this.state.scrollable) {
                this.setState({
                    scrollable: true
                });
            } else {
                this.setState({
                    scrollable: false
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var leftSidebarVisibility = !this.props.leftSidebarVisibility ? 'hideLeftSidebar leftSidebar' : 'leftSidebar';
            return _jsx('div', {
                className: leftSidebarVisibility,
                style: Object.assign({}, style.wrapper, {
                    overflowY: this.state.scrollable ? 'scroll' : 'hidden',
                    paddingBottom: this.state.scrollable ? 100 : 0
                })
            }, void 0, this.props.tab ? _jsx(_UserFormContainer2.default, {
                filterVal: this.state.filterVal,
                changeFilterVal: this.changeFilterVal
            }) : _ref, this.showSingleItem(), _react2.default.createElement(_ListURLContainer2.default, _extends({ filterVal: this.state.filterVal }, this.props)));
        }
    }]);

    return LeftURLSidebar;
}(_react.PureComponent);

LeftURLSidebar.propTypes = {
    tab: _propTypes2.default.number.isRequired
};

var style = {
    wrapper: {
        minWidth: 300,
        backgroundColor: _colors.teal50
    }
};

function mapStateToProps(state) {
    return {
        activeRoomState: state.activeRoom,
        leftSidebarVisibility: state.leftSidebarVisibility,
        privateRoom: state.privateRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(LeftURLSidebar);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(15);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _permIdentity = __webpack_require__(137);

var _permIdentity2 = _interopRequireDefault(_permIdentity);

var _Avatar = __webpack_require__(48);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _List = __webpack_require__(7);

var _colors = __webpack_require__(2);

var _utils = __webpack_require__(5);

var _SubListItemURL = __webpack_require__(82);

var _SubListItemURL2 = _interopRequireDefault(_SubListItemURL);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_permIdentity2.default, {});

var ListItemURL = function (_Component) {
    _inherits(ListItemURL, _Component);

    function ListItemURL(props) {
        _classCallCheck(this, ListItemURL);

        var _this = _possibleConstructorReturn(this, (ListItemURL.__proto__ || Object.getPrototypeOf(ListItemURL)).call(this, props));

        _this.fallBack = "/images/list-icon.png";
        _this.toggleSublist = _this.toggleSublist.bind(_this);
        return _this;
    }

    _createClass(ListItemURL, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.toggleElement.display != nextProps.display) return true;
            if (this.props.toggleElement.room.membersNumber != nextProps.room.membersNumber) return true;
            if (!(0, _isEqual3.default)(this.props.toggleRooms, nextProps.toggleRooms)) return true;
            return false;
        }
    }, {
        key: 'toggleSublist',
        value: function toggleSublist(className) {
            var self = this,
                _props = this.props,
                toggleRooms = _props.toggleRooms,
                changeToggleRoomsState = _props.changeToggleRoomsState;

            $(this.refs[className]).slideToggle("fast", function () {
                switch ($(this).css("display")) {
                    case 'block':
                        var newArray = toggleRooms;
                        newArray.push(className);
                        changeToggleRoomsState(newArray);
                        break;
                    case 'none':
                        changeToggleRoomsState(toggleRooms.filter(function (item) {
                            return item != className;
                        }));
                        break;
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                theKey = _props2.theKey,
                room = _props2.room,
                toggleElement = _props2.toggleElement;

            return _jsx('div', {}, void 0, _jsx(_List.ListItem, {
                hoverColor: 'rgba(0,0,0,0.025)',
                className: 'ListItem',
                style: style.listItem,
                primaryText: _jsx('span', {
                    style: style.title
                }, void 0, room.name),
                innerDivStyle: Object.assign(style.innerDiv),
                onTouchTap: function onTouchTap() {
                    _this2.toggleSublist(theKey);
                },
                leftAvatar: _jsx(_Avatar2.default, {
                    style: style.avatar,
                    src: room.image ? room.image : this.fallBack
                })
            }, void 0, _jsx('div', {
                style: style.innerWrap
            }, void 0, _jsx('div', {
                style: style.relativeWrap
            }, void 0, _jsx(_IconButton2.default, {
                style: style.memberNumb,
                iconStyle: style.profileIcon
            }, void 0, _ref), _jsx('div', {
                style: style.counter
            }, void 0, room.membersNumber && room.membersNumber || 0)))), _react2.default.createElement(
                'div',
                { ref: theKey, style: Object.assign(toggleElement, style.wrapSubList) },
                _react2.default.createElement(_SubListItemURL2.default, this.props)
            ));
        }
    }]);

    return ListItemURL;
}(_react.Component);

var style = {
    title: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: 175,
        display: 'inline-block'
    },
    subListItem: {
        fontSize: 13,
        color: 'white',
        fontWeight: 300
    },
    subListItemInner: {
        padding: '10px 15px'
    },
    subList: {
        backgroundColor: _colors.teal500,
        padding: 0
    },
    list: {
        padding: 0,
        // height: 800,
        backgroundColor: 'white'
    },
    listItem: {
        borderBottom: '1px solid ' + _colors.tealA100,
        color: _colors.teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: _colors.teal300,
        height: '100%',
        right: 0,
        top: 0
    },
    relativeWrap: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    memberNumb: {
        height: '100%',
        top: -7
    },
    counter: {
        fontSize: 10,
        color: _colors.teal50,
        fontWeight: 500,
        alignSelf: 'center',
        marginTop: -19
    },
    profileIcon: {
        color: _colors.teal50
    },
    innerDiv: {
        padding: '15px 16px 15px 65px'
    },
    avatar: {
        borderRadius: '100%',
        objectFit: 'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.5)',
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.05)'
    },
    emptyMessage: {
        color: _colors.teal300,
        fontSize: 13,
        paddingLeft: 10,
        fontWeight: 300,
        marginBottom: 5
    },
    infoIcon: {
        position: 'relative',
        top: 13,
        marginLeft: 10,
        color: _colors.teal300
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        activeRoom: _index.activeRoom,
        showLeftSidebar: _index.showLeftSidebar,
        addPrivateRoom: _index.addPrivateRoom,
        loadSpinner: _index.loadSpinner
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        privateRoom: state.privateRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(ListItemURL);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Drawer = __webpack_require__(126);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _colors = __webpack_require__(2);

var _URLFormContainer = __webpack_require__(41);

var _URLFormContainer2 = _interopRequireDefault(_URLFormContainer);

var _UserFormContainer = __webpack_require__(44);

var _UserFormContainer2 = _interopRequireDefault(_UserFormContainer);

var _SingleListItem = __webpack_require__(43);

var _SingleListItem2 = _interopRequireDefault(_SingleListItem);

var _ListURLContainer = __webpack_require__(42);

var _ListURLContainer2 = _interopRequireDefault(_ListURLContainer);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileListURLDrawer = function (_Component) {
    _inherits(MobileListURLDrawer, _Component);

    function MobileListURLDrawer(props) {
        _classCallCheck(this, MobileListURLDrawer);

        var _this = _possibleConstructorReturn(this, (MobileListURLDrawer.__proto__ || Object.getPrototypeOf(MobileListURLDrawer)).call(this, props));

        _this.state = {
            filterVal: '',
            scrollable: false
        };
        _this.checkHeight = _this.checkHeight.bind(_this);
        _this.changeFilterVal = _this.changeFilterVal.bind(_this);
        return _this;
    }

    _createClass(MobileListURLDrawer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.x = window.matchMedia("(max-height: 615px)");
            this.checkHeight(this.x);
            this.x.addListener(this.checkHeight);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.x.removeListener(this.checkHeight);
        }
    }, {
        key: 'checkHeight',
        value: function checkHeight(x) {
            if (x.matches && !this.state.scrollable) {
                this.setState({
                    scrollable: true
                });
            } else {
                this.setState({
                    scrollable: false
                });
            }
        }
    }, {
        key: 'changeFilterVal',
        value: function changeFilterVal(value) {
            this.setState({
                filterVal: value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _jsx(_Drawer2.default, {
                docked: false,
                width: 300,
                open: this.props.leftSidebarVisibility,
                onRequestChange: function onRequestChange(open) {
                    _this2.props.showLeftSidebar(open);
                },
                containerStyle: Object.assign({}, style.drawerContainer, {
                    overflowY: this.state.scrollable ? 'scroll' : 'hidden',
                    overflowX: 'hidden'
                }),
                overlayStyle: { zIndex: 899 }
            }, void 0, _jsx('div', {}, void 0, this.props.tab == 0 && _react2.default.createElement(_URLFormContainer2.default, this.props) || _react2.default.createElement(_UserFormContainer2.default, _extends({}, this.props, {
                filterVal: this.state.filterVal,
                changeFilterVal: this.changeFilterVal
            })), this.props.activeRoomState && _react2.default.createElement(_SingleListItem2.default, _extends({}, this.props, { title: 'Active Room' })), _react2.default.createElement(_ListURLContainer2.default, _extends({ filterVal: this.state.filterVal }, this.props))));
        }
    }]);

    return MobileListURLDrawer;
}(_react.Component);

MobileListURLDrawer.propTypes = {
    tab: _propTypes2.default.number.isRequired
};

var style = {
    drawerContainer: {
        backgroundColor: _colors.teal50,
        zIndex: 900,
        paddingTop: 88
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        showLeftSidebar: _index.showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        activeRoomState: state.activeRoom,
        leftSidebarVisibility: state.leftSidebarVisibility
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(MobileListURLDrawer);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(15);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 40px;\n    height: 40px;\n    button{\n        width: 40px !important;\n        height: 40px !important;\n        padding: 0px !important;\n    }\n'], ['\n    width: 40px;\n    height: 40px;\n    button{\n        width: 40px !important;\n        height: 40px !important;\n        padding: 0px !important;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-grow: 1;\n    & > div{\n            height: 100%;\n            span{\n                height: 100%;\n                padding-top: 2px !important;\n            }\n        }\n'], ['\n    flex-grow: 1;\n    & > div{\n            height: 100%;\n            span{\n                height: 100%;\n                padding-top: 2px !important;\n            }\n        }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(7);

var _reactTooltip = __webpack_require__(55);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _MenuItem = __webpack_require__(29);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _moreVert = __webpack_require__(141);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _IconMenu = __webpack_require__(28);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _colors = __webpack_require__(2);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_IconButton2.default, {}, void 0, _jsx(_moreVert2.default, {}));

var _ref2 = _jsx(_reactTooltip2.default, {
    place: 'top',
    type: 'dark',
    effect: 'solid'
});

var SubListItemURL = function (_Component) {
    _inherits(SubListItemURL, _Component);

    function SubListItemURL(props) {
        _classCallCheck(this, SubListItemURL);

        var _this = _possibleConstructorReturn(this, (SubListItemURL.__proto__ || Object.getPrototypeOf(SubListItemURL)).call(this, props));

        _this.addActiveRoom = _this.addActiveRoom.bind(_this);
        return _this;
    }

    _createClass(SubListItemURL, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if ((0, _isEqual3.default)(this.props.toggleElement, nextProps.toggleElement)) return true;
            return false;
        }
    }, {
        key: 'addActiveRoom',
        value: function addActiveRoom(room) {
            var _props = this.props,
                socketIO = _props.socketIO,
                activeRoomState = _props.activeRoomState,
                profileuser = _props.profileuser,
                addPrivateRoom = _props.addPrivateRoom;

            if (activeRoomState && activeRoomState._id == room._id) return;

            if (activeRoomState && activeRoomState._id != room._id) {
                socketIO.emit("leaveRoom", {
                    room: activeRoomState,
                    user: profileuser
                });
                addPrivateRoom(null);
            }

            if (activeRoomState) {
                if (activeRoomState._id != room._id) {
                    socketIO.emit("joinRoom", {
                        room: room,
                        user: profileuser
                    });
                }
            } else {
                socketIO.emit("joinRoom", {
                    room: room,
                    user: profileuser
                });
            }

            this.props.loadSpinner(true);
            socketIO.emit('getSpecificPublicRoomMessages', room.roomID);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var room = this.props.room;

            return _jsx(_List.List, {
                className: 'subList',
                style: style.subList
            }, void 0, room.rooms.map(function (item) {
                return _jsx('div', {
                    style: { width: '100%' }
                }, item._id, _jsx(CustomIconMenu, {
                    iconStyle: { color: 'white' },
                    iconButtonElement: _ref,
                    anchorOrigin: { horizontal: 'left', vertical: 'top' },
                    targetOrigin: { horizontal: 'left', vertical: 'top' }
                }, void 0, _jsx(_MenuItem2.default, {
                    primaryText: 'Open URL in new tab',
                    onTouchTap: function onTouchTap() {
                        var httpVar = item.route.indexOf("http");
                        var url = httpVar == -1 ? 'http://' + item.route : item.route;
                        var win = window.open(url, '_blank');
                        win.focus();
                    }
                })), _jsx(CustomDiv, {
                    'data-tip': item.route
                }, void 0, _jsx(_List.ListItem, {
                    className: 'urlListItem',
                    primaryText: _jsx('span', {
                        style: style.overflowText
                    }, void 0, item.route),
                    innerDivStyle: style.subListItemInner,
                    style: style.subListItem,
                    secondaryText: item.members.length,
                    onTouchTap: function onTouchTap() {
                        _this2.addActiveRoom(item);
                        _this2.props.showLeftSidebar(false);
                    }
                })), _ref2);
            }));
        }
    }]);

    return SubListItemURL;
}(_react.Component);

var CustomIconMenu = (0, _styledComponents2.default)(_IconMenu2.default)(_templateObject);

var CustomDiv = _styledComponents2.default.div(_templateObject2);

var style = {
    title: {
        color: _colors.teal300,
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5
    },
    overflowText: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: 200
    },
    subListItem: {
        fontSize: 13,
        color: 'white',
        fontWeight: 300
    },
    subListItemInner: {
        padding: '10px 15px'
    },
    subList: {
        backgroundColor: _colors.teal500,
        padding: 0
    },
    list: {
        padding: 0,
        // height: 800,
        backgroundColor: 'white'
    },
    listItem: {
        borderBottom: '1px solid ' + _colors.tealA100,
        color: _colors.teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: _colors.teal300,
        height: '100%',
        right: 0,
        top: 0
    },
    relativeWrap: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    memberNumb: {
        height: '100%',
        top: -7
    },
    counter: {
        fontSize: 10,
        color: _colors.teal50,
        fontWeight: 500,
        alignSelf: 'center',
        marginTop: -19
    },
    profileIcon: {
        color: _colors.teal50
    },
    innerDiv: {
        padding: '15px 16px 15px 65px'
    },
    avatar: {
        borderRadius: '100%',
        objectFit: 'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.5)',
        backgroundColor: 'white'
    },
    emptyMessage: {
        color: _colors.teal300,
        fontSize: 13,
        paddingLeft: 10,
        fontWeight: 300,
        marginBottom: 5
    },
    infoIcon: {
        position: 'relative',
        top: 13,
        marginLeft: 10,
        color: _colors.teal300
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        showLeftSidebar: _index.showLeftSidebar,
        addPrivateRoom: _index.addPrivateRoom,
        loadSpinner: _index.loadSpinner
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        privateRoom: state.privateRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(SubListItemURL);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _socket = __webpack_require__(157);

var _socket2 = _interopRequireDefault(_socket);

var _colors = __webpack_require__(2);

var _Snackbar = __webpack_require__(128);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _randomstring = __webpack_require__(147);

var _randomstring2 = _interopRequireDefault(_randomstring);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

var _withRouter = __webpack_require__(14);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _utils = __webpack_require__(5);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function (_Component) {
    _inherits(Wrapper, _Component);

    function Wrapper(props) {
        _classCallCheck(this, Wrapper);

        var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

        _this.state = {
            openSnackBar: false,
            SnackBarMessage: ''
        };

        _this.playSound = new buzz.sound(['../../../../../sound/ping.mp3', '../../../../../sound/ping.ogg', '../../../../../sound/ping.wav'], {
            preload: true
        });

        _this.isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) ? true : false;

        _this.updateSocketID = _this.updateSocketID.bind(_this);
        _this.getMessage = _this.getMessage.bind(_this);
        _this.updateMessageVote = _this.updateMessageVote.bind(_this);
        _this.addPrivateRoom = _this.addPrivateRoom.bind(_this);
        _this.handlePrivateMessage = _this.handlePrivateMessage.bind(_this);
        _this.notifyMessage = _this.notifyMessage.bind(_this);
        _this.setSnackbarVal = _this.setSnackbarVal.bind(_this);
        return _this;
    }

    _createClass(Wrapper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.addEventListener('beforeunload', function () {
                if (_this2.props.activeRoomState) {
                    _this2.props.socketIO.emit("leaveRoom", {
                        room: _this2.props.activeRoomState,
                        user: _this2.props.profileuser
                    });
                }
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this3 = this;

            this.socket = (0, _socket2.default)(document.location.host);
            this.props.setSocketObject(this.socket);
            this.socket.emit("getRooms");
            this.socket.on("getMessage", this.getMessage);
            this.socket.on("updateMessageVote", this.updateMessageVote);
            this.socket.on("joinPrivateRoom", this.addPrivateRoom);
            this.socket.on("handlePrivateMessage", this.handlePrivateMessage);
            this.socket.on("notifyMessage", this.notifyMessage);

            this.socket.on('receiveRooms', function (data) {
                _this3.props.getRooms(data);
            });

            this.socket.on('refreshUrlList', function (data) {
                var _props = _this3.props,
                    getRooms = _props.getRooms,
                    updateActiveRoom = _props.updateActiveRoom,
                    activeRoomState = _props.activeRoomState;

                getRooms(data);
                if (activeRoomState) {
                    updateActiveRoom(data);
                }
            });

            this.socket.on('connect', function () {
                var socket = _this3.socket;
                _this3.props.setTemporaryUser({
                    socketID: _this3.socket.id,
                    username: 'Guest-' + _randomstring2.default.generate(10)
                });

                if (!window.localStorage.getItem("currentUser")) {
                    _axios2.default.post("/api/user/save", {
                        data: {
                            user: _this3.props.temporaryUser
                        }
                    }).then(function (response) {
                        _this3.props.setProfileUser(response.data);
                        window.localStorage.setItem("currentUser", JSON.stringify(response.data));
                        _this3.props.history.push("/");
                    }).catch(function (err) {
                        console.info(err);
                    });
                } else {
                    var user = JSON.parse(window.localStorage.getItem("currentUser"));
                    _axios2.default.post("/user", {
                        data: {
                            username: user && user.username,
                            socketID: socket.id
                        }
                    }).then(function (response) {
                        // RETURNED CURRENTLY LOGGED USER
                        _this3.props.setProfileUser(response.data);
                    }).catch(function (err) {
                        console.info(err);
                    });
                }
            });

            this.socket.on('reconnect', function () {
                var socket = _this3.socket;
                var cachedUser = window.localStorage.getItem('currentUser');
                if (cachedUser) {
                    cachedUser = JSON.parse(cachedUser);
                    _axios2.default.post("/api/update/socket", {
                        data: {
                            _id: cachedUser._id,
                            socketID: socket.id
                        }
                    }).then(function (response) {
                        _this3.updateSocketID(response.data._id);
                    }).catch(function (err) {
                        console.info("Update socket user failed", err);
                    });
                }
            });

            this.socket.on('updateRooms', function (data) {
                _this3.props.loadSpinner(false);
                _this3.props.updateRoomList(data);
            });

            this.socket.on('refreshRoomsOnJoin', function (data) {
                var _props2 = _this3.props,
                    joinRefreshRooms = _props2.joinRefreshRooms,
                    profileuser = _props2.profileuser,
                    activeRoom = _props2.activeRoom,
                    updateActiveRoom = _props2.updateActiveRoom;

                joinRefreshRooms(data.result);
                if (data.notifyID == profileuser._id) activeRoom(data.result);else updateActiveRoom(data.result);
            });

            this.socket.on("prependMessagesResponse", function (data) {
                if (data) {
                    _this3.props.prependMessages(data);
                    _this3.props.showPrependLoader(false);
                }
            });

            this.socket.on("prependPrivateMessagesResponse", function (data) {
                if (data) {
                    _this3.props.prependPrivateMessages(data);
                    _this3.props.showPrependLoader(false);
                }
            });

            this.socket.on('receiveInsertedRoomMessages', function (data) {
                var _props3 = _this3.props,
                    showLeftSidebar = _props3.showLeftSidebar,
                    leftSidebarVisibility = _props3.leftSidebarVisibility;

                if (data.length) {
                    var name = data[0].receiver.name;

                    _this3.props.addChatMessages({
                        receiver: _this3.props.activeRoomState && _this3.props.activeRoomState,
                        messages: data
                    });
                    _this3.setState({
                        openSnackBar: true,
                        SnackBarMessage: 'You joined ' + name + ' chat room'
                    });
                    setTimeout(function () {
                        var containerElement = document.querySelectorAll(".messagesListWrapper")[0].querySelector("div:first-child");
                        (0, _utils.scrollTo)(containerElement, containerElement.querySelector("div").offsetHeight, 250);
                    }, 250);
                } else {
                    var activeRoomState = _this3.props.activeRoomState;

                    _this3.props.addChatMessages(null);
                    _this3.setState({
                        openSnackBar: true,
                        SnackBarMessage: 'You joined ' + activeRoomState.name + ' chat room'
                    });
                }
                if (leftSidebarVisibility) showLeftSidebar(false);
            });

            this.socket.on('addActiveRoom', function (data) {
                if (data) {
                    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        _context.next = 2;
                                        return _this3.props.activeRoom(data);

                                    case 2:
                                        _this3.socket.emit("getInsertedRoomMessages", data.roomID);

                                    case 3:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, _this3);
                    }))();
                } else {
                    _this3.setState({
                        openSnackBar: true,
                        SnackBarMessage: 'Invalid URL'
                    });
                    _this3.props.loadSpinner(false);
                }
            });
        }
    }, {
        key: 'notifyMessage',
        value: function notifyMessage(data) {
            var _id = data._id,
                findActivatedChat = null;

            if (this.props.privateRoom) {
                findActivatedChat = this.props.privateRoom.usersID.indexOf(data._id);
            }

            if (!this.props.currentTab || this.props.currentTab == 1 && !this.props.privateRoom || this.props.currentTab == 1 && this.props.privateRoom && this.props.privateRoom.usersID.indexOf(_id) == -1) {
                this.setState({
                    openSnackBar: true,
                    SnackBarMessage: 'Received private message from ' + data.username
                });
            }

            if (this.props.privateRoom && findActivatedChat == -1) {
                this.props.addNotifyPrivateIdCollection(data._id);
                setTimeout(function () {
                    var containerElement = document.querySelectorAll(".privateUsersList")[1].querySelector("div:first-child");
                    (0, _utils.scrollTo)(containerElement, 0, 250);
                }, 250);
            } else if (!this.props.privateRoom) {
                this.props.addNotifyPrivateIdCollection(data._id);
                setTimeout(function () {
                    var containerElement = document.querySelectorAll(".privateUsersList")[1].querySelector("div:first-child");
                    (0, _utils.scrollTo)(containerElement, 0, 250);
                }, 250);
            }
        }
    }, {
        key: 'addPrivateRoom',
        value: function addPrivateRoom(data) {
            var result = data.result,
                messagesNumber = data.messagesNumber;

            if (!messagesNumber) messagesNumber = null;

            this.props.addPrivateRoom(_extends({}, result.room, { messagesNumber: messagesNumber }));
            if (result && messagesNumber) this.props.addPrivateMessages(_extends({}, result.messages, { messagesNumber: messagesNumber }));
            setTimeout(function () {
                var containerElement = document.querySelectorAll(".messagesListWrapper")[1].querySelector("div:first-child");
                (0, _utils.scrollTo)(containerElement, containerElement.querySelector("div").offsetHeight, 250);
            }, 250);
        }
    }, {
        key: 'getMessage',
        value: function getMessage(data) {
            var _props4 = this.props,
                profileuser = _props4.profileuser,
                enableSound = _props4.enableSound;

            this.props.insertMessage(data);
            if (data.sender.username != profileuser.username && enableSound && !this.isSafari) {
                this.playSound.play();
            }
            var elementParent = document.querySelectorAll(".messagesListWrapper"),
                elementHeight = elementParent[0].querySelector("div:first-child > div").offsetHeight;
            var topPosition = parseInt(elementParent[0].querySelector("div:first-child").scrollTop) + window.innerHeight - 160;
            if (elementHeight - topPosition < 150) {
                setTimeout(function () {
                    var containerElement = document.querySelectorAll(".messagesListWrapper")[0].querySelector("div:first-child");
                    (0, _utils.scrollTo)(containerElement, containerElement.querySelector("div").offsetHeight, 250);
                }, 250);
            } else {
                if (data.sender.username != profileuser.username) {
                    this.setState({
                        openSnackBar: true,
                        SnackBarMessage: 'Received new public message'
                    });
                }
            }
        }
    }, {
        key: 'handlePrivateMessage',
        value: function handlePrivateMessage(data) {
            var _props5 = this.props,
                profileuser = _props5.profileuser,
                enableSound = _props5.enableSound;

            this.props.addPrivateMessages(data);
            if (data.sender.username != profileuser.username && enableSound && !this.isSafari) {
                this.playSound.play();
            }
            setTimeout(function () {
                var containerElement = document.querySelectorAll(".messagesListWrapper")[1].querySelector("div:first-child");
                (0, _utils.scrollTo)(containerElement, containerElement.querySelector("div").offsetHeight, 250);
            }, 250);
        }
    }, {
        key: 'updateSocketID',
        value: function updateSocketID(data) {
            this.props.updateProfileSocket(data);
        }
    }, {
        key: 'updateMessageVote',
        value: function updateMessageVote(data) {
            this.props.updateMessage(data);
        }
    }, {
        key: 'setSnackbarVal',
        value: function setSnackbarVal(message) {
            this.setState({
                openSnackBar: true,
                SnackBarMessage: message
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props6 = this.props,
                setCurrentTab = _props6.setCurrentTab,
                showLeftSidebar = _props6.showLeftSidebar;


            return _jsx('div', {}, void 0, _jsx(_Snackbar2.default, {
                onClick: function onClick() {
                    setCurrentTab(1);
                    showLeftSidebar(true);
                },
                className: 'messageSnackBar',
                style: style.snackBar,
                bodyStyle: style.snackBarBody,
                contentStyle: style.snackBarContent,
                open: this.state.openSnackBar,
                message: this.state.SnackBarMessage,
                autoHideDuration: 3000,
                onRequestClose: function onRequestClose() {
                    _this4.setState({
                        openSnackBar: false,
                        SnackBarMessage: ''
                    });
                }
            }), this.props.children);
        }
    }]);

    return Wrapper;
}(_react.Component);

var style = {
    snackBarBody: {
        backgroundColor: _colors.teal600,
        opacity: '0.8'
    },
    snackBarContent: {
        color: _colors.teal50
    },
    snackBar: {
        zIndex: 999
    }
};

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        updateProfileSocket: _index.updateProfileSocket,
        setProfileUser: _index.setProfileUser,
        setSocketObject: _index.setSocketObject,
        setTemporaryUser: _index.setTemporaryUser,
        updateRoomList: _index.updateRoomList,
        activeRoom: _index.activeRoom,
        joinRefreshRooms: _index.joinRefreshRooms,
        addChatMessages: _index.addChatMessages,
        loadSpinner: _index.loadSpinner,
        insertMessage: _index.insertMessage,
        updateMessage: _index.updateMessage,
        addPrivateRoom: _index.addPrivateRoom,
        addPrivateMessages: _index.addPrivateMessages,
        addNotifyPrivateIdCollection: _index.addNotifyPrivateIdCollection,
        setCurrentTab: _index.setCurrentTab,
        showLeftSidebar: _index.showLeftSidebar,
        getRooms: _index.getRooms,
        prependMessages: _index.prependMessages,
        showPrependLoader: _index.showPrependLoader,
        updateActiveRoom: _index.updateActiveRoom,
        prependPrivateMessages: _index.prependPrivateMessages
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        privateRoom: state.privateRoom,
        toggleUserMenu: state.toggleUserMenu,
        currentTab: state.currentTab,
        temporaryUser: state.temporaryUser,
        enableSound: state.enableSound,
        leftSidebarVisibility: state.leftSidebarVisibility
    };
}

exports.default = (0, _withRouter2.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Wrapper));

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Loader2 = __webpack_require__(57);

var _Loader3 = _interopRequireDefault(_Loader2);

var _Dimmer2 = __webpack_require__(156);

var _Dimmer3 = _interopRequireDefault(_Dimmer2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(56);

__webpack_require__(155);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withRouter = __webpack_require__(14);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _LeftURLSidebar = __webpack_require__(79);

var _LeftURLSidebar2 = _interopRequireDefault(_LeftURLSidebar);

var _Content = __webpack_require__(77);

var _Content2 = _interopRequireDefault(_Content);

var _Header = __webpack_require__(76);

var _Header2 = _interopRequireDefault(_Header);

var _colors = __webpack_require__(2);

var _redux = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _Tabs = __webpack_require__(129);

var _MobileListURLDrawer = __webpack_require__(81);

var _MobileListURLDrawer2 = _interopRequireDefault(_MobileListURLDrawer);

var _reactMedia = __webpack_require__(150);

var _reactMedia2 = _interopRequireDefault(_reactMedia);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('div', {}, void 0, _jsx(_Loader3.default, {
    indeterminate: true,
    size: 'large'
}, void 0, 'Please wait...'));

var _ref2 = _jsx(_Header2.default, {});

var Homepage = function (_Component) {
    _inherits(Homepage, _Component);

    function Homepage(props) {
        _classCallCheck(this, Homepage);

        var _this = _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call(this, props));

        _this.state = {
            showMessageLoader: false
        };
        _this.changeMessageLoaderState = _this.changeMessageLoaderState.bind(_this);
        return _this;
    }

    _createClass(Homepage, [{
        key: 'changeMessageLoaderState',
        value: function changeMessageLoaderState(value) {
            this.setState({
                showMessageLoader: value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                currentTab = _props.currentTab,
                privateNotifyCollection = _props.privateNotifyCollection,
                showLeftSidebar = _props.showLeftSidebar,
                spinner = _props.spinner;

            var hasUnreadMessagesClass = privateNotifyCollection.length ? 'hasUnreadMessagesClass' : '';
            return _jsx(_Dimmer3.default.Dimmable, {
                dimmed: spinner,
                style: style.outerDiv
            }, void 0, _jsx(_Dimmer3.default, {
                active: spinner,
                inverted: true
            }, void 0, _ref), _ref2, _jsx(_Tabs.Tabs, {
                className: 'tabsBlock',
                tabItemContainerStyle: { backgroundColor: _colors.teal500 },
                inkBarStyle: { backgroundColor: _colors.lime200 },
                style: { height: '100%' },
                value: currentTab,
                onChange: function onChange(currentTab) {
                    _this2.props.setCurrentTab(currentTab);
                }
            }, void 0, _jsx(_Tabs.Tab, {
                value: 0,
                label: 'Url rooms & messages',
                buttonStyle: { fontSize: 12 }
            }, void 0, _jsx('div', {
                className: 'tab',
                style: style.tab
            }, void 0, !currentTab && _jsx(_reactMedia2.default, {
                query: '(max-width: 647px)',
                render: function render() {
                    return _jsx(_MobileListURLDrawer2.default, {
                        tab: currentTab,
                        changeMessageLoaderState: _this2.changeMessageLoaderState
                    });
                }
            }), _jsx(_LeftURLSidebar2.default, {
                tab: currentTab,
                changeMessageLoaderState: this.changeMessageLoaderState
            }), _jsx(_Content2.default, {
                currentTab: currentTab,
                tab: 0,
                showMessageLoader: this.state.showMessageLoader
            }))), _jsx(_Tabs.Tab, {
                className: hasUnreadMessagesClass,
                value: 1,
                label: 'Private messages',
                buttonStyle: { fontSize: 12 },
                onActive: function onActive() {
                    if (privateNotifyCollection.length) {
                        showLeftSidebar(true);
                    }
                }
            }, void 0, _jsx('div', {
                className: 'tab',
                style: style.tab
            }, void 0, currentTab && _jsx(_reactMedia2.default, {
                query: '(max-width: 647px)',
                render: function render() {
                    return _jsx(_MobileListURLDrawer2.default, {
                        tab: currentTab,
                        changeMessageLoaderState: _this2.changeMessageLoaderState
                    });
                }
            }), _jsx(_LeftURLSidebar2.default, {
                tab: currentTab,
                changeMessageLoaderState: this.changeMessageLoaderState
            }), _jsx(_Content2.default, {
                currentTab: currentTab,
                tab: 1,
                changeMessageLoaderState: this.changeMessageLoaderState
            })))));
        }
    }]);

    return Homepage;
}(_react.Component);

var style = {
    outerDiv: {
        width: '100%',
        height: '100%'
    },
    homepageWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    tab: {
        display: 'flex'
    }
};

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setCurrentTab: _index.setCurrentTab,
        showLeftSidebar: _index.showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms,
        currentTab: state.currentTab,
        privateNotifyCollection: state.privateNotifyCollection,
        spinner: state.spinner
    };
}

exports.default = (0, _withRouter2.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Homepage));

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withRouter = __webpack_require__(14);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _RaisedButton = __webpack_require__(30);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _CircularProgress = __webpack_require__(27);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _colors = __webpack_require__(2);

var _utils = __webpack_require__(5);

var _index = __webpack_require__(4);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginComponent = function (_Component) {
    _inherits(LoginComponent, _Component);

    function LoginComponent(props) {
        _classCallCheck(this, LoginComponent);

        var _this = _possibleConstructorReturn(this, (LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call(this, props));

        _this.state = {
            disabledForm: false,
            warning: false
        };
        _this.handleLogin = _this.handleLogin.bind(_this);
        _this.validateEmailError = _this.validateEmailError.bind(_this);
        _this.showWarning = _this.showWarning.bind(_this);
        return _this;
    }

    _createClass(LoginComponent, [{
        key: 'handleLogin',
        value: function handleLogin(event) {
            var _this2 = this;

            event.preventDefault();
            var _refs = this.refs,
                email = _refs.email,
                password = _refs.password;

            email = email.value.trim();
            password = password.value.trim();
            if (email && password && (0, _utils.validateEmail)(email)) {
                this.setState({
                    disabledForm: true,
                    warning: false
                });

                _axios2.default.post("/login", {
                    data: {
                        email: email,
                        password: password
                    }
                }).then(function (response) {
                    _this2.props.setProfileUser(response.data);
                    window.localStorage.setItem("currentUser", JSON.stringify(response.data));
                    setTimeout(function () {
                        _this2.props.history.push("/");
                    }, 2000);
                }).catch(function (err) {
                    setTimeout(function () {
                        _this2.setState({
                            disabledForm: false,
                            warning: true
                        });
                    }, 2000);
                });

                this.refs.email.value = '';
                this.refs.password.value = '';
            }
        }
    }, {
        key: 'showProgressCircle',
        value: function showProgressCircle() {
            if (this.state.disabledForm) {
                return _jsx(_CircularProgress2.default, {
                    style: style.progress,
                    size: 60,
                    thickness: 7,
                    color: _colors.teal500
                });
            }
        }
    }, {
        key: 'validateEmailError',
        value: function validateEmailError(event) {
            if (event.target.value.length && !(0, _utils.validateEmail)(event.target.value)) {
                this.setState({
                    validEmail: true
                });
            } else {
                this.setState({
                    validEmail: false
                });
            }
        }
    }, {
        key: 'showWarning',
        value: function showWarning() {
            if (this.state.warning) {
                return _jsx('p', {
                    style: style.warning
                }, void 0, 'Wrong username or password');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var emailError = this.state.validEmail ? 'emailError' : '';
            var disabledForm = this.state.disabledForm ? 'hidden loginForm' : 'loginForm';
            return _jsx('div', {
                className: 'loginWrapper',
                style: style.loginWrapper
            }, void 0, _jsx('div', {
                style: style.imageWrapper
            }, void 0, _jsx('img', {
                style: style.websiteLogo,
                src: '../../../../../images/forum_final_1_white.png'
            })), _jsx('div', {
                style: style.centerBlock
            }, void 0, _jsx('div', {
                style: style.elementWrapper
            }, void 0, this.showProgressCircle(), this.showWarning(), _jsx('form', {
                onSubmit: this.handleLogin,
                style: style.form,
                className: disabledForm
            }, void 0, _react2.default.createElement('input', {
                className: emailError,
                ref: 'email',
                type: 'text',
                placeholder: 'Enter email',
                style: style.input,
                onChange: this.validateEmailError
            }), _react2.default.createElement('input', {
                ref: 'password',
                type: 'password',
                placeholder: 'Enter password',
                style: style.input
            }), _jsx(_RaisedButton2.default, {
                label: 'Login',
                style: { width: '100%' },
                labelColor: _colors.teal50,
                backgroundColor: _colors.teal500,
                type: 'submit'
            })))), _jsx('div', {
                style: { flexGrow: 1 }
            }));
        }
    }]);

    return LoginComponent;
}(_react.Component);

var style = {
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    websiteLogo: {
        position: 'absolute',
        width: 160,
        cursor: 'default'
    },
    warning: {
        color: _colors.teal50,
        fontSize: 12,
        alignSelf: 'flex-end',
        cursor: 'default'
    },
    form: {
        width: '100%'
    },
    progress: {
        position: 'absolute'
    },
    input: _defineProperty({
        backgroundColor: 'white',
        display: 'block',
        borderRadius: 2,
        marginBottom: 20,
        height: 36,
        outline: 'none',
        width: '100%',
        fontSize: 14,
        paddingLeft: 10,
        boxSizing: 'border',
        color: _colors.teal500,
        border: '1px solid rgba(0, 0, 0, 0.2)'
    }, 'boxSizing', 'border-box'),
    buttons: {
        width: '100%',
        marginBottom: 20
    },
    elementWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 270
    },
    centerBlock: {
        width: '100%',
        backgroundColor: _colors.teal50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    loginWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: _colors.teal500,
        position: 'relative'
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setProfileUser: _index.setProfileUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        temporaryUser: state.temporaryUser,
        profileuser: state.profileuser
    };
}

exports.default = (0, _withRouter2.default)((0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(LoginComponent));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withRouter = __webpack_require__(14);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _RaisedButton = __webpack_require__(30);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _colors = __webpack_require__(2);

var _index = __webpack_require__(4);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loginpage = function (_Component) {
    _inherits(Loginpage, _Component);

    function Loginpage(props) {
        _classCallCheck(this, Loginpage);

        var _this = _possibleConstructorReturn(this, (Loginpage.__proto__ || Object.getPrototypeOf(Loginpage)).call(this, props));

        _this.homepageRedirect = _this.homepageRedirect.bind(_this);
        _this.loginRedirect = _this.loginRedirect.bind(_this);
        _this.registerRedirect = _this.registerRedirect.bind(_this);
        return _this;
    }

    _createClass(Loginpage, [{
        key: 'homepageRedirect',
        value: function homepageRedirect() {
            var _this2 = this;

            _axios2.default.post("/api/user/save", {
                data: {
                    user: this.props.temporaryUser
                }
            }).then(function (response) {
                _this2.props.setProfileUser(response.data);
                window.localStorage.setItem("currentUser", JSON.stringify(response.data));
                _this2.props.history.push("/");
            }).catch(function (err) {
                console.info(err);
            });
        }
    }, {
        key: 'loginRedirect',
        value: function loginRedirect() {
            this.props.history.push("/login");
        }
    }, {
        key: 'registerRedirect',
        value: function registerRedirect() {
            this.props.history.push("/register");
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {
                className: 'loginWrapper',
                style: style.loginWrapper
            }, void 0, _jsx('div', {
                style: style.imageWrapper
            }, void 0, _jsx('img', {
                style: style.websiteLogo,
                src: '../../../../../images/forum_final_1_white.png'
            })), _jsx('div', {
                style: style.centerBlock
            }, void 0, _jsx('div', {
                style: style.elementWrapper
            }, void 0, _jsx(_RaisedButton2.default, {
                label: 'Continue as ' + (this.props.temporaryUser && this.props.temporaryUser.username),
                onTouchTap: this.homepageRedirect,
                style: style.guestButton,
                backgroundColor: 'white',
                labelColor: _colors.teal500
            }), _jsx(_RaisedButton2.default, {
                label: 'Login',
                style: style.buttons,
                labelColor: _colors.teal50,
                backgroundColor: _colors.teal500,
                onTouchTap: this.loginRedirect
            }), _jsx(_RaisedButton2.default, {
                label: 'Register',
                style: { width: '100%' },
                labelColor: _colors.teal50,
                backgroundColor: _colors.teal500,
                onTouchTap: this.registerRedirect
            }))), _jsx('div', {
                style: { flexGrow: 1 }
            }));
        }
    }]);

    return Loginpage;
}(_react.Component);

var style = {
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    websiteLogo: {
        position: 'absolute',
        width: 160,
        cursor: 'default'
    },
    guestButton: {
        width: '100%',
        marginBottom: 20
    },
    buttons: {
        width: '100%',
        marginBottom: 20
    },
    elementWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 270
    },
    centerBlock: {
        width: '100%',
        backgroundColor: _colors.teal50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.3), inset 0 -2px 4px 0 rgba(0,0,0,0.3)',
        flexGrow: 1
    },
    loginWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: _colors.teal500,
        position: 'relative'
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setProfileUser: _index.setProfileUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        temporaryUser: state.temporaryUser,
        profileuser: state.profileuser,
        socketIO: state.socketobject
    };
}

exports.default = (0, _withRouter2.default)((0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Loginpage));

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _withRouter = __webpack_require__(14);

var _withRouter2 = _interopRequireDefault(_withRouter);

var _RaisedButton = __webpack_require__(30);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _CircularProgress = __webpack_require__(27);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _colors = __webpack_require__(2);

var _utils = __webpack_require__(5);

var _index = __webpack_require__(4);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterComponent = function (_Component) {
    _inherits(RegisterComponent, _Component);

    function RegisterComponent(props) {
        _classCallCheck(this, RegisterComponent);

        var _this = _possibleConstructorReturn(this, (RegisterComponent.__proto__ || Object.getPrototypeOf(RegisterComponent)).call(this, props));

        _this.state = {
            disabledForm: false,
            validEmail: false,
            validPassword: false,
            warning: false
        };
        _this.handleRegistration = _this.handleRegistration.bind(_this);
        _this.showProgressCircle = _this.showProgressCircle.bind(_this);
        _this.validateEmailError = _this.validateEmailError.bind(_this);
        _this.validatePassword = _this.validatePassword.bind(_this);
        _this.showWarning = _this.showWarning.bind(_this);
        return _this;
    }

    _createClass(RegisterComponent, [{
        key: 'handleRegistration',
        value: function handleRegistration(event) {
            var _this2 = this;

            event.preventDefault();
            var _refs = this.refs,
                username = _refs.username,
                email = _refs.email,
                password = _refs.password,
                confirmPass = _refs.confirmPass;

            username = username.value.trim();
            email = email.value.trim();
            password = password.value.trim();
            confirmPass = confirmPass.value.trim();
            if (username && password && confirmPass && password == confirmPass && (0, _utils.validateEmail)(email)) {
                this.setState({
                    validEmail: false,
                    validPassword: false,
                    disabledForm: true,
                    warning: false
                });

                _axios2.default.post("/register", {
                    data: {
                        username: username,
                        email: email,
                        password: password,
                        confirmPass: confirmPass,
                        socketID: this.props.temporaryUser.socketID
                    }
                }).then(function (response) {
                    _this2.props.setProfileUser(response.data);
                    window.localStorage.setItem("currentUser", JSON.stringify(response.data));
                    setTimeout(function () {
                        _this2.props.history.push("/");
                    }, 2000);
                }).catch(function (err) {
                    setTimeout(function () {
                        _this2.setState({
                            disabledForm: false,
                            warning: true
                        });
                    }, 2000);
                });

                this.refs.username.value = '';
                this.refs.email.value = '';
                this.refs.password.value = '';
                this.refs.confirmPass.value = '';
            }
        }
    }, {
        key: 'validateEmailError',
        value: function validateEmailError(event) {
            if (event.target.value.length && !(0, _utils.validateEmail)(event.target.value)) {
                this.setState({
                    validEmail: true
                });
            } else {
                this.setState({
                    validEmail: false
                });
            }
        }
    }, {
        key: 'validatePassword',
        value: function validatePassword(event) {
            if (event.target.value != this.refs.password.value && event.target.value && this.refs.password.value) {
                this.setState({
                    validPassword: true
                });
            } else {
                this.setState({
                    validPassword: false
                });
            }
        }
    }, {
        key: 'showProgressCircle',
        value: function showProgressCircle() {
            if (this.state.disabledForm) {
                return _jsx(_CircularProgress2.default, {
                    style: style.progress,
                    size: 60,
                    thickness: 7,
                    color: _colors.teal500
                });
            }
        }
    }, {
        key: 'showWarning',
        value: function showWarning() {
            if (this.state.warning) {
                return _jsx('p', {
                    style: style.warning
                }, void 0, 'Username or Email already exist');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var emailError = this.state.validEmail ? 'emailError' : '';
            var passwordError = this.state.validPassword ? 'passwordError' : '';
            var disabledForm = this.state.disabledForm ? 'hidden loginForm' : 'loginForm';
            return _jsx('div', {
                className: 'loginWrapper',
                style: style.loginWrapper
            }, void 0, _jsx('div', {
                style: style.imageWrapper
            }, void 0, _jsx('img', {
                style: style.websiteLogo,
                src: '../../../../../images/forum_final_1_white.png'
            })), _jsx('div', {
                style: style.centerBlock
            }, void 0, _jsx('div', {
                style: style.elementWrapper
            }, void 0, this.showProgressCircle(), this.showWarning(), _jsx('form', {
                onSubmit: this.handleRegistration,
                style: style.form,
                className: disabledForm
            }, void 0, _react2.default.createElement('input', {
                ref: 'username',
                type: 'text',
                placeholder: 'Username',
                style: style.input,
                maxLength: '35'
            }), _react2.default.createElement('input', {
                className: emailError,
                ref: 'email',
                type: 'text',
                placeholder: 'Enter email',
                style: style.input,
                onChange: this.validateEmailError
            }), _react2.default.createElement('input', {
                ref: 'password',
                type: 'password',
                placeholder: 'Enter password',
                style: style.input
            }), _react2.default.createElement('input', {
                className: passwordError,
                ref: 'confirmPass',
                type: 'password',
                placeholder: 'Confirm password',
                style: style.input,
                onChange: this.validatePassword
            }), _jsx(_RaisedButton2.default, {
                label: 'Register',
                style: { width: '100%' },
                labelColor: _colors.teal50,
                backgroundColor: _colors.teal500,
                type: 'submit'
            })))), _jsx('div', {
                style: { flexGrow: 1 }
            }));
        }
    }]);

    return RegisterComponent;
}(_react.Component);

var style = {
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    websiteLogo: {
        position: 'absolute',
        width: 160,
        cursor: 'default'
    },
    warning: {
        color: _colors.teal50,
        fontSize: 12,
        alignSelf: 'flex-end',
        cursor: 'default'
    },
    form: {
        width: '100%'
    },
    progress: {
        position: 'absolute'
    },
    input: _defineProperty({
        backgroundColor: 'white',
        display: 'block',
        borderRadius: 2,
        marginBottom: 20,
        height: 36,
        outline: 'none',
        width: '100%',
        fontSize: 14,
        paddingLeft: 10,
        boxSizing: 'border',
        color: _colors.teal500,
        border: '1px solid rgba(0, 0, 0, 0.2)'
    }, 'boxSizing', 'border-box'),
    buttons: {
        width: '100%',
        marginBottom: 20
    },
    elementWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 270
    },
    centerBlock: {
        width: '100%',
        backgroundColor: _colors.teal50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    loginWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: _colors.teal500,
        position: 'relative'
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        setProfileUser: _index.setProfileUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        temporaryUser: state.temporaryUser,
        profileuser: state.profileuser
    };
}

exports.default = (0, _withRouter2.default)((0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(RegisterComponent));

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find2 = __webpack_require__(13);

var _find3 = _interopRequireDefault(_find2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    &:hover{\n        background-color: #F6F6F6 !important;\n    }\n'], ['\n    &:hover{\n        background-color: #F6F6F6 !important;\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 42,\n        height: 42,\n        position: \'absolute\',\n        borderRadius: \'100%\',\n        border: `2px dotted ${lime500}`,\n        left: -1,\n        top: -1,\n'], ['\n    width: 42,\n        height: 42,\n        position: \'absolute\',\n        borderRadius: \'100%\',\n        border: \\`2px dotted $\\{lime500}\\`,\n        left: -1,\n        top: -1,\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _accountCircle = __webpack_require__(16);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _colors = __webpack_require__(2);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _chat = __webpack_require__(133);

var _chat2 = _interopRequireDefault(_chat);

var _starBorder = __webpack_require__(143);

var _starBorder2 = _interopRequireDefault(_starBorder);

var _star = __webpack_require__(142);

var _star2 = _interopRequireDefault(_star);

var _HiddenControlsContainer = __webpack_require__(90);

var _HiddenControlsContainer2 = _interopRequireDefault(_HiddenControlsContainer);

var _MobileRatingMenu = __webpack_require__(93);

var _MobileRatingMenu2 = _interopRequireDefault(_MobileRatingMenu);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _moment = __webpack_require__(144);

var _moment2 = _interopRequireDefault(_moment);

var _index = __webpack_require__(4);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_chat2.default, {});

var Message = function (_Component) {
    _inherits(Message, _Component);

    function Message(props) {
        _classCallCheck(this, Message);

        var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

        _this.state = {
            hover: false
        };
        _this.showMobileRatingMenu = _this.showMobileRatingMenu.bind(_this);
        _this.showDesktopRatingMenu = _this.showDesktopRatingMenu.bind(_this);
        _this.addPrivateChat = _this.addPrivateChat.bind(_this);
        return _this;
    }

    _createClass(Message, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (window.innerWidth <= 575) {
                this.setState({
                    mobileRating: true
                });
            } else {
                this.setState({
                    mobileRating: false
                });
            }
        }
    }, {
        key: 'addPrivateChat',
        value: function addPrivateChat() {
            var _props = this.props,
                activeRoom = _props.activeRoom,
                setCurrentTab = _props.setCurrentTab;

            if (!this.props.private) {
                var sender = this.props.message.sender;

                var onlineUser = (0, _find3.default)(activeRoom.members, function (o) {
                    return o.username == sender.username;
                });
                if (onlineUser) {
                    this.props.addPrivateRoom(sender);
                    this.props.socketIO.emit("joinPrivate", {
                        sender: this.props.profileuser._id,
                        receiver: sender._id,
                        users: [this.props.profileuser, sender]
                    });
                    setCurrentTab(1);
                } else {}
            }
        }
    }, {
        key: 'showMobileRatingMenu',
        value: function showMobileRatingMenu() {
            var user = this.props.message.message.user;

            if (this.props.show && user._id != this.props.profileUserID) return _jsx(_MobileRatingMenu2.default, {
                message: this.props.message
            });
        }
    }, {
        key: 'showDesktopRatingMenu',
        value: function showDesktopRatingMenu() {
            var user = this.props.message.message.user;

            if (user._id != this.props.profileUserID && this.state.hover) {
                return _jsx(_HiddenControlsContainer2.default, {
                    message: this.props.message,
                    profileUserID: this.props.profileUserID
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$message = this.props.message,
                sender = _props$message.sender,
                created = _props$message.created,
                message = _props$message.message,
                rating = _props$message.rating,
                ratingUsers = _props$message.ratingUsers,
                activeRoom = this.props.activeRoom,
                matchUser = (0, _find3.default)(ratingUsers, function (o) {
                return o._id == _this2.props.profileuser._id;
            }),
                positiveFeedback = rating >= 5 ? 'positiveFeedback' : '',
                onlineUser = (0, _find3.default)(activeRoom.members, function (o) {
                return o._id == sender._id;
            });
            //style.avatar.fill = (onlineUser) ? lime200 : teal500;

            return _jsx(StyledList, {
                style: style.li,
                className: 'messageListItem',
                onMouseEnter: function onMouseEnter() {
                    _this2.setState({
                        hover: true
                    });
                },
                onMouseLeave: function onMouseLeave() {
                    _this2.setState({
                        hover: false
                    });
                }
            }, void 0, _jsx('div', {
                style: Object.assign({ backgroundColor: this.state.hover && _colors.teal100 || 'transparent' }, style.contactOuterBlock)
            }, void 0, _jsx('div', {
                style: style.contactBlock
            }, void 0, onlineUser && _jsx('div', {
                className: 'rotatingOnlineBlock',
                style: style.online
            }), _jsx(_accountCircle2.default, {
                style: style.avatar
            }), !this.props.private && sender._id != this.props.profileuser._id && !!onlineUser && _jsx(_IconButton2.default, {
                style: {
                    visibility: this.state.hover && 'visible' || 'hidden',
                    position: 'absolute',
                    top: 35
                },
                iconStyle: style.contactIcon,
                onTouchTap: this.addPrivateChat
            }, void 0, _ref))), _jsx('div', {
                style: style.messageContent
            }, void 0, _jsx('p', {
                style: style.title
            }, void 0, sender && sender.username), _jsx('p', {
                style: style.content
            }, void 0, message && message.text), _jsx('div', {
                style: style.bottomWrap
            }, void 0, _jsx('p', {
                style: style.time
            }, void 0, (0, _moment2.default)(created).fromNow()), !this.props.private && _jsx('p', {
                style: style.rating
            }, void 0, !matchUser && _jsx(_starBorder2.default, {
                className: positiveFeedback,
                style: style.voteStar
            }) || _jsx(_star2.default, {
                style: style.voteStar,
                className: positiveFeedback
            }), _jsx('span', {
                className: positiveFeedback
            }, void 0, rating)))), !this.props.private && this.showMobileRatingMenu(), !this.props.private && this.showDesktopRatingMenu());
        }
    }]);

    return Message;
}(_react.Component);

var StyledList = _styledComponents2.default.li(_templateObject);

var OnlineDiv = _styledComponents2.default.div(_templateObject2);

var style = {
    voteStar: {
        color: _colors.teal400,
        fontSize: 12,
        marginTop: 0,
        marginBottom: 7,
        marginRight: 3,
        width: 15,
        height: 15
    },
    bottomWrap: {
        display: 'flex'
    },
    avatar: {
        width: 40,
        height: 40,
        fill: _colors.teal500
    },
    li: {
        display: 'flex',
        padding: '0px 16px',
        position: 'relative'
    },
    listItem: {
        position: 'relative'
    },
    itemListDiv: {
        padding: '0px 16px'
    },
    contactOuterBlock: {
        paddingTop: 5,
        transition: 'transition: background-color 250ms cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    contactBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
    },
    messageContent: {
        padding: '5px 10px'
    },
    title: {
        color: _colors.teal900,
        fontWeight: 700,
        fontSize: 14,
        marginTop: 5,
        marginBottom: 7
    },
    content: {
        color: _colors.teal800,
        fontSize: '14px',
        marginTop: 0,
        marginBottom: 7,
        lineHeight: '20px',
        fontWeight: 400
    },
    rating: {
        color: _colors.teal400,
        fontSize: 12,
        marginTop: 0,
        marginBottom: 0,
        width: 'auto',
        marginLeft: 15,
        display: 'flex'
    },
    time: {
        color: _colors.teal400,
        fontSize: 12,
        marginTop: 0,
        marginBottom: 7,
        width: 'auto'
    },
    contactIcon: {
        color: 'white'
    },
    online: {
        width: 42,
        height: 42,
        position: 'absolute',
        borderRadius: '100%',
        border: '2px dotted ' + _colors.lime500,
        left: -1,
        top: -1
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        addPrivateRoom: _index.addPrivateRoom,
        setCurrentTab: _index.setCurrentTab
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        activeRoom: state.activeRoom,
        profileuser: state.profileuser,
        privateMessages: state.privateMessages,
        privateRoom: state.privateRoom,
        socketIO: state.socketobject
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Message);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(15);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _Loader2 = __webpack_require__(57);

var _Loader3 = _interopRequireDefault(_Loader2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      @media screen and (-webkit-min-device-pixel-ratio:0), @media screen and(-webkit-min-device-pixel-ratio:0){\n        & > div:first-child{\n            margin-bottom: -16px !important;\n        }       \n    }\n      & > div:last-child{\n            z-index: 999;\n      }\n         \n      &.showHomepageInfo{\n            background-image: url(\'../../../../../images/homepage-illustration.png\');\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: bottom;\n            @media (min-width: 1000px){\n                background-size: cover;\n            }\n            @media (max-height: 515px){\n                background-size: cover !important; \n            }\n      }\n'], ['\n      @media screen and (-webkit-min-device-pixel-ratio:0), @media screen and(-webkit-min-device-pixel-ratio:0){\n        & > div:first-child{\n            margin-bottom: -16px !important;\n        }       \n    }\n      & > div:last-child{\n            z-index: 999;\n      }\n         \n      &.showHomepageInfo{\n            background-image: url(\'../../../../../images/homepage-illustration.png\');\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: bottom;\n            @media (min-width: 1000px){\n                background-size: cover;\n            }\n            @media (max-height: 515px){\n                background-size: cover !important; \n            }\n      }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    &.showHomepageInfo{\n        margin-top: 0px;\n        height: 100%;\n        padding-top: 25px !important;\n        padding-bottom: 150px;\n        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0.64) 63%, rgba(255,255,255,0) 100%); \n        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#00ffffff\',GradientType=0 );\n    }\n'], ['\n    &.showHomepageInfo{\n        margin-top: 0px;\n        height: 100%;\n        padding-top: 25px !important;\n        padding-bottom: 150px;\n        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0.64) 63%, rgba(255,255,255,0) 100%); \n        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); \n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#ffffff\', endColorstr=\'#00ffffff\',GradientType=0 );\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n        position: absolute;\n        color: ', ';\n        left: 0;\n        right: 0;\n        margin: auto;\n        text-align: center;\n        justify-content: center;\n        align-self: center;\n        top: 45%;\n        cursor: default;\n'], ['\n        position: absolute;\n        color: ', ';\n        left: 0;\n        right: 0;\n        margin: auto;\n        text-align: center;\n        justify-content: center;\n        align-self: center;\n        top: 45%;\n        cursor: default;\n']);

__webpack_require__(56);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(148);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _List = __webpack_require__(7);

var _colors = __webpack_require__(2);

var _Message = __webpack_require__(88);

var _Message2 = _interopRequireDefault(_Message);

var _CircularProgress = __webpack_require__(27);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _InfoContainer = __webpack_require__(78);

var _InfoContainer2 = _interopRequireDefault(_InfoContainer);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _reactCustomScrollbars = __webpack_require__(54);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = __webpack_require__(4);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx('br', {});

var _ref2 = _jsx(_InfoContainer2.default, {});

var Messages = function (_Component) {
    _inherits(Messages, _Component);

    function Messages(props) {
        _classCallCheck(this, Messages);

        var _this = _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));

        _this.state = {
            windowFocus: true,
            currentMessagesPart: 1,
            currentPrivateMessagesPart: 1
        };
        _this.showMessages = _this.showMessages.bind(_this);
        _this.infiniteScrollPublic = _this.infiniteScrollPublic.bind(_this);
        _this.infiniteScrollPrivate = _this.infiniteScrollPrivate.bind(_this);
        _this.resetMessageSettingsState = _this.resetMessageSettingsState.bind(_this);
        _this.resetPrivateMessageSettings = _this.resetPrivateMessageSettings.bind(_this);
        return _this;
    }

    _createClass(Messages, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (this.props.tab == nextProps.currentTab) {
                if (this.props.prependLoader != nextProps.prependLoader) return true;
                if (!(0, _isEqual3.default)(nextProps.activeRoom, this.props.activeRoom)) return true;
                if (this.props.tab == 1 && !(0, _isEqual3.default)(nextProps.privateRoom, this.props.privateRoom)) return true;
                if (!(0, _isEqual3.default)(nextProps.showMessageLoader, this.props.showMessageLoader)) return true;
                if (this.props.tab == 0 && this.props.chatMessages && nextProps.chatMessages && !(0, _isEqual3.default)(this.props.chatMessages.messages, nextProps.chatMessages.messages)) return true;
                if (this.props.tab == 0 && nextProps.chatMessages != this.props.chatMessages) return true;
                if (this.props.tab == 1 && nextProps.privateRoom) return true;
                return false;
            }
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.socketIO.on("resetMessageSettings", this.resetMessageSettingsState);
            this.props.socketIO.on("resetPrivateMessageSettings", this.resetPrivateMessageSettings);
            if (this.props.tab == 0) {
                var scroller = _reactDom2.default.findDOMNode(this.scrollElement);
                scroller.firstChild.addEventListener("scroll", this.infiniteScrollPublic);
            } else if (this.props.tab == 1) {
                var scroller = _reactDom2.default.findDOMNode(this.scrollElement);
                scroller.firstChild.addEventListener("scroll", this.infiniteScrollPrivate);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var scroller = _reactDom2.default.findDOMNode(this.scrollElement);
            scroller.firstChild.removeEventListener("scroll", this.infiniteScrollPublic);
            this.props.socketIO.removeListener("resetMessageSettings", this.resetMessageSettingsState);
        }
    }, {
        key: 'resetMessageSettingsState',
        value: function resetMessageSettingsState() {
            this.setState({
                currentMessagesPart: 1,
                currentPrivateMessagesPart: 1
            });
        }
    }, {
        key: 'resetPrivateMessageSettings',
        value: function resetPrivateMessageSettings() {
            this.setState({
                currentPrivateMessagesPart: 1
            });
        }
    }, {
        key: 'infiniteScrollPublic',
        value: function infiniteScrollPublic(event) {
            var _props = this.props,
                activeRoom = _props.activeRoom,
                chatMessages = _props.chatMessages,
                socketIO = _props.socketIO,
                showPrependLoader = _props.showPrependLoader,
                prependLoader = _props.prependLoader;

            if (event.target.scrollTop == 0) {
                var updatedMessagePart = this.state.currentMessagesPart + 1;
                if (activeRoom && chatMessages && chatMessages.messages.length != chatMessages.messagesNumber) {
                    socketIO.emit("prependMessagesRequest", {
                        messagesPart: updatedMessagePart,
                        roomID: activeRoom.roomID
                    });

                    if (!prependLoader) {
                        showPrependLoader(true);
                        this.setState({
                            currentMessagesPart: updatedMessagePart
                        });
                    }
                }
            }
        }
    }, {
        key: 'infiniteScrollPrivate',
        value: function infiniteScrollPrivate(event) {
            var _props2 = this.props,
                activeRoom = _props2.activeRoom,
                privateRoom = _props2.privateRoom,
                privateMessages = _props2.privateMessages,
                socketIO = _props2.socketIO,
                showPrependLoader = _props2.showPrependLoader,
                prependLoader = _props2.prependLoader;

            if (event.target.scrollTop == 0) {
                var updatedMessagePart = this.state.currentPrivateMessagesPart + 1;
                if (activeRoom && privateRoom && privateMessages && privateMessages.messages && privateMessages.messages.length != privateMessages.messagesNumber) {
                    socketIO.emit("prependPrivateMessagesRequest", {
                        messagesPart: updatedMessagePart,
                        roomID: privateRoom.privateRoomID
                    });

                    if (!prependLoader) {
                        showPrependLoader(true);
                        this.setState({
                            currentPrivateMessagesPart: updatedMessagePart
                        });
                    }
                }
            }
        }
    }, {
        key: 'showMessages',
        value: function showMessages() {
            var _props3 = this.props,
                tab = _props3.tab,
                activeRoom = _props3.activeRoom,
                chatMessages = _props3.chatMessages,
                profileuser = _props3.profileuser,
                privateRoom = _props3.privateRoom,
                privateMessages = _props3.privateMessages;

            if (activeRoom && chatMessages && tab == 0) {
                return chatMessages.messages.map(function (item) {
                    return _jsx(_Message2.default, {
                        message: item,
                        show: true,
                        profileUserID: profileuser._id
                    }, item._id);
                });
            } else if (activeRoom && privateRoom && tab == 1) {
                if (privateMessages && privateMessages.messages && privateMessages.messages.length) {
                    return privateMessages.messages.map(function (item) {
                        return _jsx(_Message2.default, {
                            'private': true,
                            message: item,
                            profileUserID: profileuser._id
                        }, item._id);
                    });
                }
            } else if (activeRoom && !chatMessages && tab == 0 && !this.props.showMessageLoader) {
                return _jsx(EmptyDivMessage, {}, void 0, 'Write first messaege in ', activeRoom.name, ' room', _ref, 'Ask question or just share your thoughts');
            } else if (!this.props.showMessageLoader) {
                return _ref2;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props4 = this.props,
                tab = _props4.tab,
                showMessageLoader = _props4.showMessageLoader,
                prependLoader = _props4.prependLoader,
                homepageClass = !this.props.activeRoom || tab == 1 && !this.props.privateRoom ? 'showHomepageInfo messagesListWrapper' : 'messagesListWrapper privateMessageWrapper',
                customListClass = !this.props.activeRoom || tab == 1 && !this.props.privateRoom ? 'showHomepageInfo' : '';


            return _jsx('div', {
                style: style.outerDivBlock
            }, void 0, showMessageLoader && _jsx(_CircularProgress2.default, {
                color: _colors.teal300,
                style: style.loader,
                size: 60,
                thickness: 7
            }), _jsx(_Loader3.default, {
                active: prependLoader,
                style: { top: 20 }
            }), _react2.default.createElement(
                MessagesListWrapper,
                {
                    ref: function ref(input) {
                        _this2.scrollElement = input;
                    },
                    className: homepageClass,
                    style: style.messagesListWrapper,
                    autoHide: true,
                    autoHideTimeout: 1000,
                    autoHideDuration: 200
                },
                _jsx(CustomList, {
                    className: customListClass
                }, void 0, this.showMessages())
            ));
        }
    }]);

    return Messages;
}(_react.Component);

var MessagesListWrapper = (0, _styledComponents2.default)(_reactCustomScrollbars.Scrollbars)(_templateObject);

var CustomList = (0, _styledComponents2.default)(_List.List)(_templateObject2);

var EmptyDivMessage = _styledComponents2.default.div(_templateObject3, _colors.teal600);

var style = _defineProperty({
    loader: {
        marginTop: -23
    },
    outerDivBlock: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    messagesList: {
        lineHeight: '13px',
        padding: '5px 5px 8px'
    },
    messagesListWrapper: {
        //overflowY: 'scroll',
        overflowX: 'hidden',
        flexGrow: 1,
        paddingTop: 15
    },
    messageItem: {
        fontSize: 13,
        display: 'inline-block',
        borderRadius: 5,
        marginBottom: 10,
        borderTopLeftRadius: 0,
        backgroundColor: 'peru'
    },
    messageItemRight: {
        fontSize: 13,
        display: 'inline-block',
        borderRadius: 5,
        marginBottom: 10,
        borderTopRightRadius: 0,
        backgroundColor: 'white',
        color: 'rgba(0,0,0,0.8)'
    }
}, 'loader', {
    alignSelf: 'center',
    position: 'absolute',
    top: '45%'
});

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        showPrependLoader: _index.showPrependLoader
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        activeRoom: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        chatMessages: state.chatmessages,
        privateMessages: state.privateMessages,
        privateRoom: state.privateRoom,
        prependLoader: state.prependLoader
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find2 = __webpack_require__(13);

var _find3 = _interopRequireDefault(_find2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _keyboardArrowUp = __webpack_require__(52);

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

var _keyboardArrowDown = __webpack_require__(51);

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _infoOutline = __webpack_require__(49);

var _infoOutline2 = _interopRequireDefault(_infoOutline);

var _block = __webpack_require__(50);

var _block2 = _interopRequireDefault(_block);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_keyboardArrowUp2.default, {});

var _ref2 = _jsx(_keyboardArrowDown2.default, {});

var _ref3 = _jsx(_infoOutline2.default, {});

var _ref4 = _jsx(_block2.default, {});

var HiddenControlsContainer = function (_Component) {
    _inherits(HiddenControlsContainer, _Component);

    function HiddenControlsContainer(props) {
        _classCallCheck(this, HiddenControlsContainer);

        var _this = _possibleConstructorReturn(this, (HiddenControlsContainer.__proto__ || Object.getPrototypeOf(HiddenControlsContainer)).call(this, props));

        _this.state = {
            up: false,
            down: false
        };
        _this.message = _this.props.message;
        _this.votePositive = _this.votePositive.bind(_this);
        _this.voteNegative = _this.voteNegative.bind(_this);
        _this.copyContent = _this.copyContent.bind(_this);
        return _this;
    }

    _createClass(HiddenControlsContainer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (this.message.ratingUsers.length) {
                var findUser = (0, _find3.default)(this.message.ratingUsers, function (o) {
                    return o._id == _this2.props.profileUser._id;
                });
                if (findUser && findUser.vote) {
                    switch (findUser.vote) {
                        case 'up':
                            this.setState({
                                up: true,
                                down: false
                            });
                            break;
                        case 'down':
                            this.setState({
                                up: false,
                                down: true
                            });
                            break;
                    }
                }
            }
        }
    }, {
        key: 'votePositive',
        value: function votePositive() {
            console.info("Voted positive");

            if (!this.state.up && !this.state.down) {
                this.setState({
                    up: true,
                    down: false
                });
            } else if (this.state.down) {
                this.setState({
                    up: false,
                    down: false
                });
            }

            this.props.profileUser.vote = 'up';
            this.props.socketIO.emit("voting", {
                vote: 'up',
                roomID: this.props.activeRoomState.roomID,
                messageID: this.message._id,
                user: this.props.profileUser
            });
        }
    }, {
        key: 'voteNegative',
        value: function voteNegative() {
            console.info("Voted Negative");

            if (!this.state.up && !this.state.down) {
                this.setState({
                    up: false,
                    down: true
                });
            } else if (this.state.up) {
                this.setState({
                    up: false,
                    down: false
                });
            }

            this.props.profileUser.vote = 'down';
            this.props.socketIO.emit("voting", {
                vote: 'down',
                roomID: this.props.activeRoomState.roomID,
                messageID: this.message._id,
                user: this.props.profileUser
            });
        }
    }, {
        key: 'copyContent',
        value: function copyContent() {
            var text = this.props.message.message.text;
        }
    }, {
        key: 'render',
        value: function render() {
            var disableUpClass = this.state.up ? 'disableList' : '',
                disableDownClass = this.state.down ? 'disableList' : '';
            return _jsx('div', {
                className: 'desktopRatingIcons',
                style: style.outerDiv
            }, void 0, _jsx('ul', {
                className: 'hiddenControls',
                style: style.hiddenControls
            }, void 0, _jsx('li', {
                className: disableUpClass,
                style: Object.assign(style.li, {})
            }, void 0, _jsx(_IconButton2.default, {
                disabled: this.state.up,
                onTouchTap: this.votePositive,
                tooltip: 'Vote positive',
                tooltipPosition: 'top-center',
                iconStyle: style.smallIcon,
                style: style.small
            }, void 0, _ref)), _jsx('li', {
                className: disableDownClass,
                style: Object.assign(style.li, {})
            }, void 0, _jsx(_IconButton2.default, {
                disabled: this.state.down,
                onTouchTap: this.voteNegative,
                tooltip: 'Vote negative',
                tooltipPosition: 'top-center',
                iconStyle: style.smallIcon,
                style: style.small
            }, void 0, '>', _ref2)), _jsx('li', {
                style: style.li
            }, void 0, _jsx(_IconButton2.default, {
                tooltip: 'Report Comment',
                tooltipPosition: 'top-center',
                iconStyle: style.smallIcon,
                style: style.small
            }, void 0, _ref3)), _jsx('li', {
                style: style.li
            }, void 0, _jsx(_IconButton2.default, {
                tooltip: 'Block User',
                tooltipPosition: 'top-left',
                iconStyle: style.smallIcon,
                style: style.small
            }, void 0, _ref4))));
        }
    }]);

    return HiddenControlsContainer;
}(_react.Component);

var style = {
    smallIcon: {
        width: 20,
        height: 20,
        fill: '#AEABAB'
    },
    small: {
        width: 30,
        height: 30,
        padding: 0
    },
    outerDiv: {
        position: 'absolute',
        top: -25,
        right: 30
    },
    li: {
        padding: '0 2px'
    },
    hiddenControls: {
        listStyle: 'none',
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 5,
        border: '1px solid #D9D7D7',
        paddingLeft: 0
    }
};

function mapStateToProps(state) {
    return {
        socketIO: state.socketobject,
        profileUser: state.profileuser,
        activeRoomState: state.activeRoom,
        privateNotifyCollection: state.privateNotifyCollection
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(HiddenControlsContainer);

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find2 = __webpack_require__(13);

var _find3 = _interopRequireDefault(_find2);

var _inputText;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FloatingActionButton = __webpack_require__(127);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _send = __webpack_require__(139);

var _send2 = _interopRequireDefault(_send);

var _reactRedux = __webpack_require__(1);

var _TextField = __webpack_require__(31);

var _TextField2 = _interopRequireDefault(_TextField);

var _colors = __webpack_require__(2);

var _utils = __webpack_require__(5);

__webpack_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_send2.default, {});

var MessageForm = function (_Component) {
    _inherits(MessageForm, _Component);

    function MessageForm(props) {
        _classCallCheck(this, MessageForm);

        var _this = _possibleConstructorReturn(this, (MessageForm.__proto__ || Object.getPrototypeOf(MessageForm)).call(this, props));

        _this.sendMessage = _this.sendMessage.bind(_this);
        _this.state = {
            inputValue: ''
        };
        _this.inputOnChange = _this.inputOnChange.bind(_this);
        _this.submitOnEnter = _this.submitOnEnter.bind(_this);
        return _this;
    }

    _createClass(MessageForm, [{
        key: 'sendMessage',
        value: function sendMessage(event) {
            var _this2 = this;

            event.preventDefault();
            var tab = this.props.tab;

            if (tab == 0) {
                if (this.state.inputValue.trim()) {
                    this.props.socketIO.emit("sendMessage", {
                        room: this.props.activeRoom,
                        sender: this.props.profileuser,
                        message: {
                            user: this.props.profileuser,
                            text: this.state.inputValue.trim(),
                            created: new Date().getTime()
                        }
                    });
                }
            } else if (tab == 1) {
                var receiver = (0, _find3.default)(this.props.privateRoom.users, function (o) {
                    return o._id != _this2.props.profileuser._id;
                });
                var createdTime = new Date().getTime();
                if (this.state.inputValue.trim()) {
                    this.props.socketIO.emit("sendPrivateMessage", {
                        sender: this.props.profileuser,
                        privateRoomID: this.props.privateRoom.privateRoomID,
                        receiverID: receiver._id && receiver._id || '',
                        message: {
                            text: this.state.inputValue.trim(),
                            created: createdTime
                        },
                        created: createdTime
                    });
                }
            }
            this.setState({
                inputValue: ''
            });
        }
    }, {
        key: 'inputOnChange',
        value: function inputOnChange(event) {
            this.setState({
                inputValue: event.target.value
            });
        }
    }, {
        key: 'submitOnEnter',
        value: function submitOnEnter(event) {
            if (event.key === 'Enter') {
                this.sendMessage(event);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                tab = _props.tab,
                privateRoom = _props.privateRoom;

            return _jsx('div', {
                style: style.wrapper
            }, void 0, _jsx('form', {
                action: 'javascript:void(0)',
                className: !this.props.activeRoom || tab == 1 && !privateRoom ? 'disabledForm' : '',
                style: style.form,
                onSubmit: this.sendMessage
            }, void 0, _jsx(_TextField2.default, {
                value: this.state.inputValue,
                hintText: 'Type message...',
                multiLine: true,
                rowsMax: 2,
                style: { width: '100%', fontSize: 14 },
                textareaStyle: { color: _colors.teal900 },
                underlineFocusStyle: { borderColor: _colors.teal200 },
                hintStyle: { color: _colors.teal200 },
                onChange: function onChange(event) {
                    _this3.inputOnChange(event);

                    var scrollerElement = document.querySelectorAll(".messagesListWrapper")[tab].querySelector("div:first-child"),
                        containerElement = scrollerElement.querySelector("div").offsetHeight,
                        scrollPosition = scrollerElement.scrollTop + window.innerHeight - 160;

                    if (containerElement - scrollPosition > 30) (0, _utils.scrollTo)(scrollerElement, scrollerElement.querySelector("div").offsetHeight, 250);
                },
                onKeyPress: this.submitOnEnter,
                onFocus: function onFocus() {
                    var scrollerElement = document.querySelectorAll(".messagesListWrapper")[tab].querySelector("div:first-child");
                    (0, _utils.scrollTo)(scrollerElement, scrollerElement.querySelector("div").offsetHeight, 250);
                }
            }), _jsx(_FloatingActionButton2.default, {
                type: 'submit',
                mini: true,
                style: { marginLeft: 15 },
                backgroundColor: _colors.teal500,
                onTouchTap: this.sendMessage
            }, void 0, _ref)));
        }
    }]);

    return MessageForm;
}(_react.Component);

var style = {
    disabled: {
        opacity: '0.3',
        pointerEvents: 'none'
    },
    wrapper: {
        backgroundColor: 'white',
        height: 55,
        width: '100%',
        marginBottom: 88,
        borderTop: '1px solid rgba(0,0,0,0.05)'
    },
    uploadButton: {
        verticalAlign: 'middle'
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    inputText: (_inputText = {
        outline: 'none',
        border: '2px solid white',
        height: 60,
        fontSize: 16,
        boxSizing: 'border-box',
        flexGrow: 1
    }, _defineProperty(_inputText, 'fontSize', 14), _defineProperty(_inputText, 'color', _colors.teal700), _defineProperty(_inputText, 'resize', 'none'), _defineProperty(_inputText, 'padding', '10px 20px'), _defineProperty(_inputText, 'lineHeight', '20px'), _defineProperty(_inputText, 'backgroundColor', 'transparent'), _inputText),
    addIcon: {
        fill: 'white'
    },
    sendIcon: {
        fill: _colors.teal700
    },
    buttonStyle: {
        height: 60,
        border: '2px solid white',
        borderRight: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        minWidth: 60
    },
    sendButtonStyle: {
        height: 60,
        border: '2px solid white',
        borderLeft: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        minWidth: 60,
        backgroundColor: _colors.teal50
    }
};

function mapStateToProps(state) {
    return {
        activeRoom: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        privateRoom: state.privateRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MessageForm);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Messages = __webpack_require__(89);

var _Messages2 = _interopRequireDefault(_Messages);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessagesContainer = function MessagesContainer(props) {
    return _jsx('div', {
        className: 'messagesContainer',
        style: style.wrapper
    }, void 0, _react2.default.createElement(_Messages2.default, props));
};

var style = {
    wrapper: {
        flexGrow: 1
    }
};

exports.default = MessagesContainer;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find2 = __webpack_require__(13);

var _find3 = _interopRequireDefault(_find2);

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _IconButton = __webpack_require__(6);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _IconMenu = __webpack_require__(28);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(29);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _moreVert = __webpack_require__(135);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _keyboardArrowUp = __webpack_require__(52);

var _keyboardArrowUp2 = _interopRequireDefault(_keyboardArrowUp);

var _keyboardArrowDown = __webpack_require__(51);

var _keyboardArrowDown2 = _interopRequireDefault(_keyboardArrowDown);

var _infoOutline = __webpack_require__(49);

var _infoOutline2 = _interopRequireDefault(_infoOutline);

var _block = __webpack_require__(50);

var _block2 = _interopRequireDefault(_block);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref = _jsx(_IconButton2.default, {}, void 0, _jsx(_moreVert2.default, {
    color: _colors.teal400
}));

var _ref2 = _jsx(_keyboardArrowUp2.default, {});

var _ref3 = _jsx(_keyboardArrowDown2.default, {});

var _ref4 = _jsx(_MenuItem2.default, {
    primaryText: 'Report comment',
    leftIcon: _jsx(_infoOutline2.default, {})
});

var _ref5 = _jsx(_MenuItem2.default, {
    primaryText: 'Block user',
    leftIcon: _jsx(_block2.default, {})
});

var MobileRatingMenu = function (_Component) {
    _inherits(MobileRatingMenu, _Component);

    function MobileRatingMenu(props) {
        _classCallCheck(this, MobileRatingMenu);

        var _this = _possibleConstructorReturn(this, (MobileRatingMenu.__proto__ || Object.getPrototypeOf(MobileRatingMenu)).call(this, props));

        _this.state = {
            up: false,
            down: false
        };
        _this.message = _this.props.message;
        _this.votePositive = _this.votePositive.bind(_this);
        _this.voteNegative = _this.voteNegative.bind(_this);
        return _this;
    }

    _createClass(MobileRatingMenu, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (this.message.ratingUsers.length) {
                var findUser = (0, _find3.default)(this.message.ratingUsers, function (o) {
                    return o._id == _this2.props.profileUser._id;
                });
                if (findUser && findUser.vote) {
                    switch (findUser.vote) {
                        case 'up':
                            this.setState({
                                up: true,
                                down: false
                            });
                            break;
                        case 'down':
                            this.setState({
                                up: false,
                                down: true
                            });
                            break;
                    }
                }
            }
        }
    }, {
        key: 'votePositive',
        value: function votePositive() {
            console.info("Voted positive");

            if (!this.state.up && !this.state.down) {
                this.setState({
                    up: true,
                    down: false
                });
            } else if (this.state.down) {
                this.setState({
                    up: false,
                    down: false
                });
            }

            this.props.profileUser.vote = 'up';
            this.props.socketIO.emit("voting", {
                vote: 'up',
                roomID: this.props.activeRoomState.roomID,
                messageID: this.message._id,
                user: this.props.profileUser
            });
        }
    }, {
        key: 'voteNegative',
        value: function voteNegative() {
            console.info("Voted Negative");

            if (!this.state.up && !this.state.down) {
                this.setState({
                    up: false,
                    down: true
                });
            } else if (this.state.up) {
                this.setState({
                    up: false,
                    down: false
                });
            }

            this.props.profileUser.vote = 'down';
            this.props.socketIO.emit("voting", {
                vote: 'down',
                roomID: this.props.activeRoomState.roomID,
                messageID: this.message._id,
                user: this.props.profileUser
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx(_IconMenu2.default, {
                className: 'showMore',
                style: style.showMore,
                iconButtonElement: _ref,
                anchorOrigin: { horizontal: 'right', vertical: 'top' },
                targetOrigin: { horizontal: 'right', vertical: 'top' }
            }, void 0, _jsx(_MenuItem2.default, {
                disabled: this.state.up,
                onTouchTap: this.votePositive,
                primaryText: 'Vote positive',
                leftIcon: _ref2
            }), _jsx(_MenuItem2.default, {
                disabled: this.state.down,
                onTouchTap: this.voteNegative,
                primaryText: 'Vote negative',
                leftIcon: _ref3
            }), _ref4, _ref5);
        }
    }]);

    return MobileRatingMenu;
}(_react.Component);

var style = {
    showMore: {
        marginLeft: 'auto',
        alignSelf: 'center'
    }
};

function mapStateToProps(state) {
    return {
        socketIO: state.socketobject,
        profileUser: state.profileuser,
        activeRoomState: state.activeRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MobileRatingMenu);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _accountCircle = __webpack_require__(16);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _modeComment = __webpack_require__(134);

var _modeComment2 = _interopRequireDefault(_modeComment);

var _List = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateUserBadgeListItem = function (_Component) {
    _inherits(PrivateUserBadgeListItem, _Component);

    function PrivateUserBadgeListItem(props) {
        _classCallCheck(this, PrivateUserBadgeListItem);

        var _this = _possibleConstructorReturn(this, (PrivateUserBadgeListItem.__proto__ || Object.getPrototypeOf(PrivateUserBadgeListItem)).call(this, props));

        _this.addPrivateChat = _this.addPrivateChat.bind(_this);
        _this.deleteNotification = _this.deleteNotification.bind(_this);
        return _this;
    }

    _createClass(PrivateUserBadgeListItem, [{
        key: 'deleteNotification',
        value: function deleteNotification(user) {
            this.props.deleteFromNotifyCollection(user._id);
        }
    }, {
        key: 'addPrivateChat',
        value: function addPrivateChat(user) {
            this.props.addPrivateRoom(user);
            this.props.socketIO.emit("joinPrivate", {
                sender: this.props.profileuser._id,
                receiver: user._id,
                users: [this.props.profileuser, user]
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                item = _props.item,
                checkNotifications = _props.checkNotifications,
                showLeftSidebar = _props.showLeftSidebar,
                addPrivateMessages = _props.addPrivateMessages;

            return _jsx(_List.ListItem, {
                className: 'userListItem',
                hoverColor: 'rgba(0,0,0,0.025)',
                primaryText: item.username,
                style: style.listItem,
                innerDivStyle: style.innerDiv,
                onTouchTap: function onTouchTap() {
                    addPrivateMessages(null);
                    _this2.addPrivateChat(item);
                    _this2.deleteNotification(item);
                    showLeftSidebar(false);
                },
                leftIcon: _jsx(_accountCircle2.default, {
                    style: style.avatar
                }),
                rightIcon: _jsx('div', {
                    style: style.notificationRightBlock
                }, void 0, _jsx('div', {
                    style: style.notificationBlockWrapper
                }, void 0, _jsx(_modeComment2.default, {
                    style: style.messageIcon
                }), _jsx('span', {
                    style: style.notificationNumber
                }, void 0, checkNotifications.length)))
            }, item._id);
        }
    }]);

    return PrivateUserBadgeListItem;
}(_react.Component);

;

var style = {
    badgeInnerStyle: {
        top: -24,
        left: -8
    },
    badgeStyle: {
        top: 15,
        right: 14,
        fontSize: 10,
        width: 20,
        height: 20,
        backgroundColor: _colors.amber500,
        color: 'white'
    },
    avatar: {
        fill: _colors.teal500,
        width: 30,
        height: 30,
        margin: 8
    },
    contact: {
        fill: _colors.teal50
    },
    listItem: {
        borderBottom: '1px solid ' + _colors.tealA100,
        color: _colors.teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14
    },
    innerDiv: {
        padding: '15px 16px 15px 65px'
    },
    contactBtn: {
        width: 46,
        height: 46,
        marginRight: -4,
        backgroundColor: _colors.teal300
    },
    notificationRightBlock: {
        width: 46,
        height: 46,
        margin: 0,
        marginRight: -4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationNumber: {
        position: 'absolute',
        top: 5,
        fontSize: 11,
        color: 'white',
        alignSelf: 'center',
        justifySelf: 'center',
        textAlign: 'center',
        display: 'block',
        left: 0,
        right: 0
    },
    messageIcon: {
        fill: _colors.lime500,
        height: 30,
        width: 30
    },
    notificationBlockWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        addPrivateRoom: _index.addPrivateRoom,
        addPrivateMessages: _index.addPrivateMessages,
        deleteFromNotifyCollection: _index.deleteFromNotifyCollection,
        showLeftSidebar: _index.showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        profileuser: state.profileuser,
        socketIO: state.socketobject
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(PrivateUserBadgeListItem);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(2);

var _accountCircle = __webpack_require__(16);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

var _List = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _redux = __webpack_require__(3);

var _index = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrivateUserListItem = function (_Component) {
    _inherits(PrivateUserListItem, _Component);

    function PrivateUserListItem(props) {
        _classCallCheck(this, PrivateUserListItem);

        var _this = _possibleConstructorReturn(this, (PrivateUserListItem.__proto__ || Object.getPrototypeOf(PrivateUserListItem)).call(this, props));

        _this.addPrivateChat = _this.addPrivateChat.bind(_this);
        return _this;
    }

    _createClass(PrivateUserListItem, [{
        key: 'addPrivateChat',
        value: function addPrivateChat(user) {
            if (!this.props.privateRoom) {
                this.props.addPrivateRoom(user);
                this.props.socketIO.emit("joinPrivate", {
                    sender: this.props.profileuser._id,
                    receiver: user._id,
                    users: [this.props.profileuser, user]
                });
            } else {
                if (this.props.privateRoom.usersID.indexOf(user._id) == -1) {
                    this.props.addPrivateRoom(user);
                    this.props.socketIO.emit("joinPrivate", {
                        sender: this.props.profileuser._id,
                        receiver: user._id,
                        users: [this.props.profileuser, user]
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                item = _props.item,
                addPrivateMessages = _props.addPrivateMessages;

            return _jsx(_List.ListItem, {
                className: 'userListItem',
                hoverColor: 'rgba(0,0,0,0.025)',
                primaryText: item.username,
                style: style.listItem,
                innerDivStyle: Object.assign(style.innerDiv),
                leftIcon: _jsx(_accountCircle2.default, {
                    style: style.avatar
                }),
                onTouchTap: function onTouchTap() {
                    addPrivateMessages(null);
                    _this2.addPrivateChat(item);
                    _this2.props.showLeftSidebar(false);
                }
            }, item._id);
        }
    }]);

    return PrivateUserListItem;
}(_react.Component);

;

var style = {
    avatar: {
        fill: _colors.teal500,
        width: 30,
        height: 30,
        margin: 8
    },
    contact: {
        fill: _colors.teal50
    },
    listItem: {
        borderBottom: '1px solid ' + _colors.tealA100,
        color: _colors.teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14
    },
    innerDiv: {
        padding: '15px 16px 15px 65px'
    }
};

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        addPrivateRoom: _index.addPrivateRoom,
        addPrivateMessages: _index.addPrivateMessages,
        showLeftSidebar: _index.showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        privateRoom: state.privateRoom
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(PrivateUserListItem);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find2 = __webpack_require__(13);

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activeuser = function activeuser() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'ACTIVE_ROOM':
            return action.data;
        case 'UPDATE_ACTIVE_ROOM':
            if (action.data.length) {
                var room = (0, _find3.default)(action.data, function (o) {
                    return o.name == state.name;
                });
                if (room) {
                    var matchRoom = (0, _find3.default)(room.rooms, function (o) {
                        return o.roomID == state.roomID;
                    });
                    if (matchRoom) return matchRoom;
                }
            } else if (state && action.data && action.data.roomID == state.roomID) return action.data;
            return state;
        case 'CLOSE_ACTIVE_ROOM':
            return null;
        default:
            return state;
    }
};

exports.default = activeuser;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(15);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _uniqWith2 = __webpack_require__(47);

var _uniqWith3 = _interopRequireDefault(_uniqWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var addPrivateMessages = function addPrivateMessages() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_PRIVATE_MESSAGES':
            if (action.data == null) return null;

            if (!state) {
                return {
                    privateRoomID: action.data.privateRoomID,
                    messagesNumber: action.data.messagesNumber || 1,
                    messages: action.data.messages || [action.data]
                };
            } else {
                return {
                    privateRoomID: state.privateRoomID,
                    messagesNumber: state.messagesNumber + 1,
                    messages: (0, _uniqWith3.default)([].concat(_toConsumableArray(state.messages), [action.data]), _isEqual3.default)
                };
            }
        case 'PREPEND_PRIVATE_MESSAGES':
            return {
                privateRoomID: state.privateRoomID,
                messagesNumber: state.messagesNumber,
                messages: (0, _uniqWith3.default)([].concat(_toConsumableArray(action.data), _toConsumableArray(state.messages)), _isEqual3.default)
            };
        default:
            return state;
    }
};

exports.default = addPrivateMessages;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEqual2 = __webpack_require__(15);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _uniqWith2 = __webpack_require__(47);

var _uniqWith3 = _interopRequireDefault(_uniqWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var chatmessages = function chatmessages() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE_MESSAGE':
            if (state) {
                return {
                    room: state.room,
                    messagesNumber: state.messagesNumber,
                    messages: state.messages.map(function (message) {
                        if (message._id == action.data._id) {
                            message = action.data;
                        }
                        return message;
                    })
                };
            }

        case 'CLOSE_ACTIVE_ROOM':
            return null;

        case 'ADD_MESSAGE':
            if (state) {
                return {
                    room: state.room,
                    messagesNumber: state.messagesNumber + 1,
                    messages: (0, _uniqWith3.default)([].concat(_toConsumableArray(state.messages), [action.data]), _isEqual3.default)
                };
            } else return {
                room: action.data.receiver,
                messageNumber: 1,
                messages: [action.data]
            };

        case 'ADD_CHAT':
            if (action.data) {
                return {
                    room: action.data.receiver,
                    messagesNumber: action.data.messagesNumber || null,
                    messages: [].concat(_toConsumableArray(action.data.messages))
                };
            }
            return false;

        case 'PREPEND_MESSAGES':
            return {
                room: state.room,
                messagesNumber: state.messagesNumber,
                messages: (0, _uniqWith3.default)([].concat(_toConsumableArray(action.data), _toConsumableArray(state.messages)), _isEqual3.default)
            };

        default:
            return state;
    }
};

exports.default = chatmessages;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var currentTab = function currentTab() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments[1];

    switch (action.type) {
        case 'SET_TAB':
            return action.data;
        default:
            return state;
    }
};

exports.default = currentTab;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var enableSound = function enableSound() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var action = arguments[1];

    switch (action.type) {
        case 'ENABLE_SOUND':
            return action.data;
        default:
            return state;
    }
};

exports.default = enableSound;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(3);

var _rooms = __webpack_require__(107);

var _rooms2 = _interopRequireDefault(_rooms);

var _activeRoom = __webpack_require__(96);

var _activeRoom2 = _interopRequireDefault(_activeRoom);

var _profileuser = __webpack_require__(106);

var _profileuser2 = _interopRequireDefault(_profileuser);

var _socketobject = __webpack_require__(109);

var _socketobject2 = _interopRequireDefault(_socketobject);

var _chatmessages = __webpack_require__(98);

var _chatmessages2 = _interopRequireDefault(_chatmessages);

var _setTemporayUser = __webpack_require__(108);

var _setTemporayUser2 = _interopRequireDefault(_setTemporayUser);

var _spinner = __webpack_require__(110);

var _spinner2 = _interopRequireDefault(_spinner);

var _addPrivateMessages = __webpack_require__(97);

var _addPrivateMessages2 = _interopRequireDefault(_addPrivateMessages);

var _privateRoom = __webpack_require__(105);

var _privateRoom2 = _interopRequireDefault(_privateRoom);

var _privateNotifyCollection = __webpack_require__(104);

var _privateNotifyCollection2 = _interopRequireDefault(_privateNotifyCollection);

var _leftSidebarVisibility = __webpack_require__(102);

var _leftSidebarVisibility2 = _interopRequireDefault(_leftSidebarVisibility);

var _currentTab = __webpack_require__(99);

var _currentTab2 = _interopRequireDefault(_currentTab);

var _enableSound = __webpack_require__(100);

var _enableSound2 = _interopRequireDefault(_enableSound);

var _prependLoader = __webpack_require__(103);

var _prependLoader2 = _interopRequireDefault(_prependLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    temporaryUser: _setTemporayUser2.default,
    spinner: _spinner2.default,
    rooms: _rooms2.default,
    activeRoom: _activeRoom2.default,
    profileuser: _profileuser2.default,
    socketobject: _socketobject2.default,
    chatmessages: _chatmessages2.default,
    privateMessages: _addPrivateMessages2.default,
    privateRoom: _privateRoom2.default,
    privateNotifyCollection: _privateNotifyCollection2.default,
    leftSidebarVisibility: _leftSidebarVisibility2.default,
    currentTab: _currentTab2.default,
    enableSound: _enableSound2.default,
    prependLoader: _prependLoader2.default
});

exports.default = reducers;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var leftSidebarVisibility = function leftSidebarVisibility() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var action = arguments[1];

    switch (action.type) {
        case 'LEFT_SIDEBAR_VISIBILITY':
            return action.data;
        default:
            return state;
    }
};

exports.default = leftSidebarVisibility;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var prependLoader = function prependLoader() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case 'SHOW_PREPEND_LOADER':
            return action.data;
        default:
            return state;
    }
};

exports.default = prependLoader;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var privateNotifyCollection = function privateNotifyCollection() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TO_PRIVATE_NOTIFY_COLLECTION':
            return [].concat(_toConsumableArray(state), [action.data]);
        case 'DELETE_FROM_NOTIFY_COLLECTION':
            return state.filter(function (itemID) {
                return itemID != action.data;
            });
        default:
            return state;
    }
};

exports.default = privateNotifyCollection;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var privateRoom = function privateRoom() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_PRIVATE_ROOM':
            return action.data;
        default:
            return state;
    }
};

exports.default = privateRoom;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var profileuser = function profileuser() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'PROFILE_USER':
            return action.data;
        case 'UPDATE_SOCKET':
            var thisState = state;
            thisState.socketID = action.data;
            return thisState;
        default:
            return state;
    }
};

exports.default = profileuser;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(5);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var rooms = function rooms() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'JOIN_REFRESH_ROOMS':
            var exist = '';
            state.forEach(function (item) {
                if (item.name == action.data.name) exist = item;
            });
            if (exist) {
                return state.map(function (item) {
                    if (item.name == exist.name) {
                        item.membersNumber = 0;
                        item.rooms = item.rooms.map(function (room) {
                            if (room._id == action.data._id) room = action.data;
                            item.membersNumber += room.members.length;
                            return room;
                        }).sort((0, _utils.sort_by)('members', false, function (a) {
                            return a.length;
                        }));
                    }
                    return item;
                }).sort((0, _utils.sort_by)('membersNumber'));
            }

        case 'UPDATE_ROOM_LIST':
            var exist = '';
            state.forEach(function (item) {
                if (item.name == action.data.name) exist = item.name;
            });

            if (exist) {
                return state.map(function (item) {
                    if (item.name == exist) {
                        var sameRoute = false;
                        item.rooms = item.rooms.map(function (room) {
                            if (room.route == action.data.route) {
                                sameRoute = true;
                                room = action.data;
                            }
                            return room;
                        });

                        if (!sameRoute) {
                            item.rooms.push(action.data);
                            item.membersNumber += action.data.members.length;
                        } else item.membersNumber = action.data.members.length;
                        item.rooms = item.rooms.sort((0, _utils.sort_by)('members', false, function (a) {
                            return a.length;
                        }));
                    }
                    return item;
                }).sort((0, _utils.sort_by)('membersNumber'));
            } else {
                return [].concat(_toConsumableArray(state), [{
                    name: action.data.name,
                    membersNumber: action.data.members.length,
                    image: action.data.image && action.data.image || null,
                    rooms: [action.data]
                }]);
            }
        case 'GET_ROOMS':
            return action.data;
        default:
            return state;
    }
};

exports.default = rooms;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var setTemporaryUser = function setTemporaryUser() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TEMP_USER':
            return action.data;
        default:
            return state;
    }
};

exports.default = setTemporaryUser;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var socketobject = function socketobject() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case 'SOCKET_OBJECT':
            return action.data;
        default:
            return state;
    }
};

exports.default = socketobject;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var spinner = function spinner() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SPINNER':
            return action.data;
        default:
            return state;
    }
};

exports.default = spinner;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoose = __webpack_require__(33);
var userModel = __webpack_require__(25);
var passwordHash = __webpack_require__(53);

module.exports = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var username, email, password, socketID, result, newUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        username = data.username, email = data.email, password = data.password, socketID = data.socketID;
                        _context.next = 3;
                        return userModel.find({ $or: [{ username: username }, { email: email }] });

                    case 3:
                        result = _context.sent;

                        if (result.length) {
                            _context.next = 13;
                            break;
                        }

                        newUser = new userModel({
                            username: username,
                            email: email,
                            socketID: socketID,
                            password: passwordHash.generate(password)
                        });
                        _context.next = 8;
                        return newUser.save();

                    case 8:
                        result = _context.sent;

                        if (!result) {
                            _context.next = 11;
                            break;
                        }

                        return _context.abrupt('return', {
                            _id: result._id,
                            username: result.username,
                            socketID: result.socketID
                        });

                    case 11:
                        _context.next = 14;
                        break;

                    case 13:
                        throw new Error("User exist");

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoose = __webpack_require__(33);
var userModel = __webpack_require__(25);

module.exports = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var _result;

        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return userModel.findOne({ username: data.username }, {
                            _id: 1,
                            socketID: 1,
                            username: 1
                        });

                    case 2:
                        result = _context.sent;

                        result.socketID = data.socketID;
                        _context.next = 6;
                        return result.save();

                    case 6:
                        result = _context.sent;

                        if (!result) {
                            _context.next = 9;
                            break;
                        }

                        return _context.abrupt('return', (_result = result, _id = _result._id, username = _result.username, socketID = _result.socketID, savedSettings = _result.savedSettings, _result));

                    case 9:
                        return _context.abrupt('return');

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var passwordHash = __webpack_require__(53);
var userModel = __webpack_require__(25);

module.exports = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var email, password, user, userObject;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        email = data.email, password = data.password;
                        _context.next = 3;
                        return userModel.findOne({ email: email });

                    case 3:
                        user = _context.sent;

                        if (!user) {
                            _context.next = 13;
                            break;
                        }

                        if (!passwordHash.verify(password, user.password)) {
                            _context.next = 10;
                            break;
                        }

                        userObject = {
                            _id: user._id,
                            username: user.username,
                            socketID: user.socketID
                        };
                        return _context.abrupt('return', userObject);

                    case 10:
                        throw new Error("Wrong username or password");

                    case 11:
                        _context.next = 14;
                        break;

                    case 13:
                        throw new Error("Wrong username or password");

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Roboto', sans-serif;\n}\nhtml,\nbody,\n#reactApp {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\nhtml,\nbody {\n  overflow: hidden;\n}\nbody {\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n#reactApp > div {\n  width: 100%;\n  height: 100%;\n}\n.headerAvatar {\n  margin-left: 10px;\n}\n.hasUnreadMessagesClass {\n  -webkit-animation: tabAnimation 3000ms linear infinite;\n  animation: tabAnimation 3000ms linear infinite;\n}\n@-webkit-keyframes tabAnimation {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: #26A69A;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n@keyframes tabAnimation {\n  0% {\n    background-color: transparent;\n  }\n  50% {\n    background-color: #26A69A;\n  }\n  100% {\n    background-color: transparent;\n  }\n}\n.subList {\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.subList > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #26A69A;\n}\n.subList > div:last-child {\n  border-bottom: none;\n}\n.subList .urlListItem > div > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.subList .urlListItem > div > div > div:last-child {\n  font-size: 10px !important;\n  line-height: 20px !important;\n  margin: 0px 0px 0px auto !important;\n  color: rgba(255, 255, 255, 0.95) !important;\n  font-weight: 300 !important;\n}\n.ListItem {\n  background-color: white !important;\n}\n.desktopRatingIcons {\n  display: none;\n}\n.disableList {\n  pointerEvents: all;\n}\n.disableList button {\n  opacity: 0.2;\n}\n.loginForm {\n  opacity: 1;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.loginForm.hidden {\n  opacity: 0.1;\n  pointer-events: none;\n}\n.loginForm input {\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.loginForm input:focus {\n  border: 1px solid #009688 !important;\n  color: #009688 !important;\n}\n.emailError,\n.passwordError {\n  border-color: #F44336 !important;\n  color: #F44336 !important;\n}\n.messageSnackBar > button {\n  color: white !important;\n}\n@media (max-width: 575px) {\n  .mainHeader > a {\n    margin-left: 20px !important;\n  }\n  .mainHeader .userBlock {\n    margin-right: 0px !important;\n  }\n  .lastHeaderIcon {\n    margin-right: 10px !important;\n    display: none !important;\n  }\n  .messagingContent > div:first-child {\n    overflow: hidden !important;\n  }\n  .iconsWrapper {\n    display: none !important;\n  }\n  .headerRightIcons {\n    right: 0 !important;\n  }\n  .homepageWrapper > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n  }\n}\n@media (min-width: 576px) {\n  .mainHeader + div > div:last-child {\n    height: 100% !important;\n  }\n  .mainHeader + div > div:last-child > div {\n    height: 100%;\n  }\n  .mainHeader + div > div:last-child > div > div.tab {\n    height: 100%;\n  }\n  .desktopRatingIcons {\n    display: block;\n  }\n  .showMore {\n    display: none !important;\n  }\n  .homepageWrapper {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .homepageWrapper > div {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    overflow-x: visible !important;\n    width: 100% !important;\n  }\n  .lastHeaderIcon {\n    margin-right: 35px !important;\n  }\n  .messagesBack {\n    display: none !important;\n  }\n  .headerAvatar {\n    margin-left: 20px !important;\n  }\n  .mobileHeadIcons {\n    display: none !important;\n  }\n}\n@media (max-width: 647px) {\n  .formWrapper form > div:first-child {\n    width: 100% !important;\n  }\n  .tabsBlock > div:first-child,\n  .tabsBlock > div:nth-child(2) {\n    position: relative;\n    z-index: 999;\n  }\n  .mainHeader {\n    position: relative;\n    z-index: 999;\n  }\n  .mainHeader a {\n    margin-left: 0px !important;\n  }\n  .mainHeader + div {\n    height: 100%;\n  }\n  .mainHeader + div > div:last-child {\n    height: 100%;\n  }\n  .mainHeader + div > div:last-child > div {\n    height: 100%;\n  }\n  .mainHeader + div > div:last-child > div > .tab {\n    height: 100%;\n  }\n  .tab .leftSidebar {\n    min-width: 100% !important;\n    height: 100% !important;\n    display: none !important;\n  }\n  .tab .leftSidebar.hideLeftSidebar {\n    display: none;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "textarea {\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\ntextarea::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: white;\n  font-weight: 300;\n}\ntextarea::-moz-placeholder {\n  /* Firefox 19+ */\n  color: white;\n  font-weight: 300;\n}\ntextarea:-ms-input-placeholder {\n  /* IE 10+ */\n  color: white;\n  font-weight: 300;\n}\ntextarea:-moz-placeholder {\n  /* Firefox 18- */\n  color: white;\n  font-weight: 300;\n}\n.membersMessageForm textarea {\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.membersMessageForm textarea::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #4DB6AC;\n  font-weight: 300;\n}\n.membersMessageForm textarea::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #4DB6AC;\n  font-weight: 300;\n}\n.membersMessageForm textarea:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #4DB6AC;\n  font-weight: 300;\n}\n.membersMessageForm textarea:-moz-placeholder {\n  /* Firefox 18- */\n  color: #4DB6AC;\n  font-weight: 300;\n}\n.addButton > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.disabledForm {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.focusFormInput {\n  background-color: rgba(255, 255, 255, 0.6) !important;\n}\n", ""]);

// exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".messagesListWrapper {\n  min-height: calc(100% - 70px);\n}\n.messagesContainer {\n  height: calc(-71%) !important;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n.hiddenControls li {\n  border-right: 1px solid #D9D7D7;\n}\n.hiddenControls li:last-child {\n  border-right: none !important;\n}\n.positiveFeedback {\n  color: #FFC107 !important;\n}\n.showHomepageInfo > div:first-child {\n  overflow: hidden !important;\n}\n.messageListItem .rotatingOnlineBlock {\n  -webkit-animation: rotateOnlineAvatar 3000ms linear infinite;\n  animation: rotateOnlineAvatar 3000ms linear infinite;\n}\n.messageListItem:hover .rotatingOnlineBlock {\n  border: 2px dotted white !important;\n}\n@-webkit-keyframes rotateOnlineAvatar {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n}\n@keyframes rotateOnlineAvatar {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n  }\n}\n", ""]);

// exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #4DB6AC;\n  font-weight: 300;\n}\ninput::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #4DB6AC;\n  font-weight: 300;\n}\ninput:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #4DB6AC;\n  font-weight: 300;\n}\ninput:-moz-placeholder {\n  /* Firefox 18- */\n  color: #4DB6AC;\n  font-weight: 300;\n}\n@media (min-width: 648px) {\n  .mobileNavIcon {\n    display: none !important;\n  }\n}\n@media (min-width: 576px) {\n  .formURL {\n    width: 100% !important;\n  }\n  .messagesForward {\n    display: none !important;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(20)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./main.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./main.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(20)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./messageForm.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/postcss-loader/index.js!./messageForm.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("create-react-class/factory");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyObject");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("import-export");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FloatingActionButton");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Tabs");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Toggle");

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Action/settings");

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Communication/chat");

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Editor/mode-comment");

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/Navigation/more-vert");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/info-outline");

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/perm-identity");

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/search");

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/content/send");

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/menu");

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/more-vert");

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/toggle/star");

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/toggle/star-border");

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = require("normalize.css/normalize.css");

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = require("prop-types/factory");

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = require("randomstring");

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = require("react-media");

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/es/BrowserRouter");

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/es/Link");

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/es/Route");

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-css/components/dimmer.css");

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer");

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
module.exports = __webpack_require__(58);


/***/ })
/******/ ]);