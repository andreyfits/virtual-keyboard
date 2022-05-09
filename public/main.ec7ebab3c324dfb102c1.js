/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-color: #f5f5f5;\n  font-family: monospace;\n  font-size: 20px;\n  color: #090808; }\n\n.main-container {\n  max-width: 798px;\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  padding: 25px 50px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 18px;\n  justify-content: center; }\n  .main-container .textarea {\n    width: 100%;\n    height: 300px;\n    margin: 0 auto;\n    padding: 5px;\n    font: inherit;\n    resize: none;\n    outline: 0;\n    border: 3px solid #705f5f;\n    border-radius: 16px;\n    background-color: #ffffff; }\n  .main-container .keyboard {\n    width: 698px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7px;\n    justify-content: center;\n    background-color: #ffffff; }\n    .main-container .keyboard .key {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 40px;\n      width: 40px;\n      font: inherit;\n      font-family: sans-serif;\n      cursor: pointer;\n      transition: 0.3s all;\n      border: 2px solid #625353;\n      border-radius: 10%;\n      background-color: #fafaf7; }\n      .main-container .keyboard .key.active {\n        transform: scale(1);\n        border: 2px solid #625353;\n        text-align: center;\n        background-color: #cbcbb8;\n        font-size: 22px;\n        color: #112691; }\n      .main-container .keyboard .key.backspace, .main-container .keyboard .key.shiftLeft, .main-container .keyboard .key.shiftRight, .main-container .keyboard .key.capsLock, .main-container .keyboard .key.enter {\n        width: 87px; }\n      .main-container .keyboard .key.space {\n        width: 322px; }\n      .main-container .keyboard .key.guide {\n        font-size: 27px; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAGxB;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EAEvB,sBAAiB;EACjB,eAAU;EAEZ,cAAc,EAAA;;AAGhB;EACE,gBAAuC;EACvC,WAAW;EACX,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,uBAAuB,EAAA;EAVzB;IAaI,WAAW;IACX,aAAa;IACb,cAAc;IACd,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB,EAAA;EAtB7B;IA0BI,YAA2B;IAC3B,aAAa;IACb,eAAe;IACf,QAAQ;IACR,uBAAuB;IACvB,yBAAyB,EAAA;IA/B7B;MAkCM,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,YAAY;MACZ,WAAW;MACX,aAAa;MACb,uBAAuB;MACvB,eAAe;MACf,oBAAoB;MACpB,yBAAyB;MACzB,kBAAkB;MAClB,yBAAyB,EAAA;MA7C/B;QAgDQ,mBAAmB;QACnB,yBAAyB;QACzB,kBAAkB;QAClB,yBAAyB;QACzB,eAAe;QACf,cAAc,EAAA;MArDtB;QA6DQ,WAAW,EAAA;MA7DnB;QAiEQ,YAAyB,EAAA;MAjEjC;QAqEQ,eAAe,EAAA","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background-color: #f5f5f5;\n  font: {\n    family: monospace;\n    size: 20px;\n  }\n  color: #090808;\n}\n\n.main-container {\n  max-width: 40px * 15 + 7px * 14 + 100px;\n  width: 100%;\n  height: auto;\n  margin: 0 auto;\n  padding: 25px 50px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 18px;\n  justify-content: center;\n\n  .textarea {\n    width: 100%;\n    height: 300px;\n    margin: 0 auto;\n    padding: 5px;\n    font: inherit;\n    resize: none;\n    outline: 0;\n    border: 3px solid #705f5f;\n    border-radius: 16px;\n    background-color: #ffffff;\n  }\n\n  .keyboard {\n    width: 40px * 15 + 7px * 14;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 7px;\n    justify-content: center;\n    background-color: #ffffff;\n\n    .key {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 40px;\n      width: 40px;\n      font: inherit;\n      font-family: sans-serif;\n      cursor: pointer;\n      transition: 0.3s all;\n      border: 2px solid #625353;\n      border-radius: 10%;\n      background-color: #fafaf7;\n\n      &.active {\n        transform: scale(1);\n        border: 2px solid #625353;\n        text-align: center;\n        background-color: #cbcbb8;\n        font-size: 22px;\n        color: #112691;\n      }\n\n      &.backspace,\n      &.shiftLeft,\n      &.shiftRight,\n      &.capsLock,\n      &.enter {\n        width: 87px;\n      }\n\n      &.space {\n        width: 40px * 7 + 7px * 6;\n      }\n\n      &.guide {\n        font-size: 27px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/js/keyMap.js":
/*!*********************************!*\
  !*** ./src/assets/js/keyMap.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keyBtn = [
    {
        keyCode: 'Backquote',
        ru: 'ё',
        RU: 'Ё',
        en: '`',
        EN: '~',
    },
    {
        keyCode: 'Digit1',
        ru: '1',
        RU: '!',
        en: '1',
        EN: '!',
    },
    {
        keyCode: 'Digit2',
        ru: '2',
        RU: '"',
        en: '2',
        EN: '@',
    },
    {
        keyCode: 'Digit3',
        ru: '3',
        RU: '№',
        en: '3',
        EN: '#',
    },
    {
        keyCode: 'Digit4',
        ru: '4',
        RU: ';',
        en: '4',
        EN: '$',
    },
    {
        keyCode: 'Digit5',
        ru: '5',
        RU: '%',
        en: '5',
        EN: '%',
    },
    {
        keyCode: 'Digit6',
        ru: '6',
        RU: ':',
        en: '6',
        EN: '^',
    },
    {
        keyCode: 'Digit7',
        ru: '7',
        RU: '?',
        en: '7',
        EN: '&',
    },
    {
        keyCode: 'Digit8',
        ru: '8',
        RU: '*',
        en: '8',
        EN: '*',
    },
    {
        keyCode: 'Digit9',
        ru: '9',
        RU: '(',
        en: '9',
        EN: '(',
    },
    {
        keyCode: 'Digit0',
        ru: '0',
        RU: ')',
        en: '0',
        EN: ')',
    },
    {
        keyCode: 'Minus',
        ru: '-',
        RU: '_',
        en: '-',
        EN: '_',
    },
    {
        keyCode: 'Equal',
        ru: '=',
        RU: '+',
        en: '=',
        EN: '+',
    },
    {
        keyCode: 'Backspace',
        ru: '⬅',
        RU: '⬅',
        en: '⬅',
        EN: '⬅',
    },
    {
        keyCode: 'Tab',
        ru: 'Tab',
        RU: 'Tab',
        en: 'Tab',
        EN: 'Tab',
    },
    {
        keyCode: 'KeyQ',
        ru: 'й',
        RU: 'Й',
        en: 'q',
        EN: 'Q',
    },
    {
        keyCode: 'KeyW',
        ru: 'ц',
        RU: 'Ц',
        en: 'w',
        EN: 'W',
    },
    {
        keyCode: 'KeyE',
        ru: 'у',
        RU: 'У',
        en: 'e',
        EN: 'E',
    },
    {
        keyCode: 'KeyR',
        ru: 'к',
        RU: 'К',
        en: 'r',
        EN: 'R',
    },
    {
        keyCode: 'KeyT',
        ru: 'е',
        RU: 'Е',
        en: 't',
        EN: 'T',
    },
    {
        keyCode: 'KeyY',
        ru: 'н',
        RU: 'Н',
        en: 'y',
        EN: 'Y',
    },
    {
        keyCode: 'KeyU',
        ru: 'г',
        RU: 'Г',
        en: 'u',
        EN: 'U',
    },
    {
        keyCode: 'KeyI',
        ru: 'ш',
        RU: 'Ш',
        en: 'i',
        EN: 'I',
    },
    {
        keyCode: 'KeyO',
        ru: 'щ',
        RU: 'Щ',
        en: 'o',
        EN: 'O',
    },
    {
        keyCode: 'KeyP',
        ru: 'з',
        RU: 'З',
        en: 'p',
        EN: 'P',
    },
    {
        keyCode: 'BracketLeft',
        ru: 'х',
        RU: 'Х',
        en: '[',
        EN: '{',
    },
    {
        keyCode: 'BracketRight',
        ru: 'ъ',
        RU: 'Ъ',
        en: ']',
        EN: '}',
    },
    {
        keyCode: 'Backslash',
        ru: '\\',
        RU: '/',
        en: '\\',
        EN: '|',
    },
    {
        keyCode: 'Delete',
        ru: 'Del',
        RU: 'Del',
        en: 'Del',
        EN: 'Del',
    },
    {
        keyCode: 'CapsLock',
        ru: 'CapsLk',
        RU: 'CapsLk',
        en: 'CapsLk',
        EN: 'CapsLk',
    },
    {
        keyCode: 'KeyA',
        ru: 'ф',
        RU: 'Ф',
        en: 'a',
        EN: 'A',
    },
    {
        keyCode: 'KeyS',
        ru: 'ы',
        RU: 'Ы',
        en: 's',
        EN: 'S',
    },
    {
        keyCode: 'KeyD',
        ru: 'в',
        RU: 'В',
        en: 'd',
        EN: 'D',
    },
    {
        keyCode: 'KeyF',
        ru: 'а',
        RU: 'А',
        en: 'f',
        EN: 'F',
    },
    {
        keyCode: 'KeyG',
        ru: 'п',
        RU: 'П',
        en: 'g',
        EN: 'G',
    },
    {
        keyCode: 'KeyH',
        ru: 'р',
        RU: 'Р',
        en: 'h',
        EN: 'H',
    },
    {
        keyCode: 'KeyJ',
        ru: 'о',
        RU: 'О',
        en: 'j',
        EN: 'J',
    },
    {
        keyCode: 'KeyK',
        ru: 'л',
        RU: 'Л',
        en: 'k',
        EN: 'K',
    },
    {
        keyCode: 'KeyL',
        ru: 'д',
        RU: 'Д',
        en: 'l',
        EN: 'L',
    },
    {
        keyCode: 'Semicolon',
        ru: 'ж',
        RU: 'Ж',
        en: ';',
        EN: ':',
    },
    {
        keyCode: 'Quote',
        ru: 'э',
        RU: 'Э',
        en: '\'',
        EN: '"',
    },
    {
        keyCode: 'Enter',
        ru: 'Enter',
        RU: 'Enter',
        en: 'Enter',
        EN: 'Enter',
    },
    {
        keyCode: 'ShiftLeft',
        ru: 'Shift',
        RU: 'Shift',
        en: 'Shift',
        EN: 'Shift',
    },
    {
        keyCode: 'KeyZ',
        ru: 'я',
        RU: 'Я',
        en: 'z',
        EN: 'Z',
    },
    {
        keyCode: 'KeyX',
        ru: 'ч',
        RU: 'Ч',
        en: 'x',
        EN: 'X',
    },
    {
        keyCode: 'KeyC',
        ru: 'с',
        RU: 'С',
        en: 'c',
        EN: 'C',
    },
    {
        keyCode: 'KeyV',
        ru: 'м',
        RU: 'М',
        en: 'v',
        EN: 'V',
    },
    {
        keyCode: 'KeyB',
        ru: 'и',
        RU: 'И',
        en: 'b',
        EN: 'B',
    },
    {
        keyCode: 'KeyN',
        ru: 'т',
        RU: 'Т',
        en: 'n',
        EN: 'N',
    },
    {
        keyCode: 'KeyM',
        ru: 'ь',
        RU: 'Ь',
        en: 'm`',
        EN: 'M',
    },
    {
        keyCode: 'Comma',
        ru: 'б',
        RU: 'Б',
        en: ',',
        EN: '<',
    },
    {
        keyCode: 'Period',
        ru: 'ю',
        RU: 'Ю',
        en: '.',
        EN: '>',
    },
    {
        keyCode: 'Slash',
        ru: '.',
        RU: ',',
        en: '/',
        EN: '?',
    },
    {
        keyCode: 'ArrowUp',
        ru: '↑',
        RU: '↑',
        en: '↑',
        EN: '↑',
    },
    {
        keyCode: 'ShiftRight',
        ru: 'Shift',
        RU: 'Shift',
        en: 'Shift',
        EN: 'Shift',
    },
    {
        keyCode: 'ControlLeft',
        ru: 'Ctrl',
        RU: 'Ctrl',
        en: 'Ctrl',
        EN: 'Ctrl',
    },
    {
        keyCode: 'MetaLeft',
        ru: 'Win',
        RU: 'Win',
        en: 'Win',
        EN: 'Win',
    },
    {
        keyCode: 'AltLeft',
        ru: 'Alt',
        RU: 'Alt',
        en: 'Alt',
        EN: 'Alt',
    },
    {
        keyCode: 'Space',
        ru: ' ',
        RU: ' ',
        en: ' ',
        EN: ' ',
    },
    {
        keyCode: 'AltRight',
        ru: 'Alt',
        RU: 'Alt',
        en: 'Alt',
        EN: 'Alt',
    },
    {
        keyCode: 'ArrowLeft',
        ru: '←',
        RU: '←',
        en: '←',
        EN: '←',
    },
    {
        keyCode: 'ArrowDown',
        ru: '↓',
        RU: '↓',
        en: '↓',
        EN: '↓',
    },
    {
        keyCode: 'ArrowRight',
        ru: '→',
        RU: '→',
        en: '→',
        EN: '→',
    },
    {
        keyCode: 'ControlRight',
        ru: 'Ctrl',
        RU: 'Ctrl',
        en: 'Ctrl',
        EN: 'Ctrl',
    },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyBtn);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/keyMap.js */ "./src/assets/js/keyMap.js");



let lang;

if (localStorage.getItem('lang') === 'en') {
    lang = 'en';
} else if (localStorage.getItem('lang') === 'ru') {
    lang = 'ru';
} else {
    lang = 'en';
}

/*********** CREATE SCREEN, KEYBOARD AND DESCRIPTION **********/
const main = document.createElement('main');
main.classList.add('main');
main.classList.add('main-container');
document.body.append(main);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.name = 'display';
textarea.autofocus = true;
document.body.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

const guide = document.createElement('p');
guide.className = 'desc';
guide.innerHTML = 'Для смены языка нажмите Ctrl + Alt <br> Клавиатура писалась на Linux Ubuntu';
document.body.append(guide);

const heading = document.createElement('h1');
heading.textContent = 'RSS Virtual Keyboard';
main.appendChild(heading);
main.appendChild(textarea);
main.appendChild(keyboard);
main.appendChild(guide);

let langStorage = 'lang';
let keys = [];

let isCapsOn = false;
let isShiftOn = false;

function createButtons(array) {
    document.querySelectorAll('.key').forEach(el => el.remove());
    array.forEach(element => {
        let key = document.createElement('div');
        key.className = keyCodeClassName(element.keyCode);
        key.classList.add('key');
        key.id = element.keyCode;
        if (lang === 'ru') {
            if (isCapsOn === false && isShiftOn === false) {
                key.innerHTML = element.ru;
            } else if (isCapsOn === false && isShiftOn === true) {
                key.innerHTML = element.RU;
            } else if (isCapsOn === true && isShiftOn === false) {
                key.innerHTML = element.RU;
            } else {
                key.innerHTML = element.ru;
            }
        } else {
            if (isCapsOn === false && isShiftOn === false) {
                key.innerHTML = element.en;
            } else if (isCapsOn === false && isShiftOn === true) {
                key.innerHTML = element.EN;
            } else if (isCapsOn === true && isShiftOn === false) {
                key.innerHTML = element.EN;
            } else {
                key.innerHTML = element.en;
            }
        }
        keyboard.append(key);
        keys = document.querySelectorAll('.key');
    });
}

createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

let keysDown = {};
let isControlDown = false;

document.addEventListener('keydown', function(event) {
    if (!(event.key in keysDown)) {
        keysDown[event.key] = true;
    }
    event.preventDefault();
    textarea.focus();

    let string = textarea.value;
    let pos = textarea.selectionStart;
    let posEnd = textarea.selectionEnd;

    keys.forEach(el => {
        if (el.id === event.code) {
            el.classList.add('active');
            if (el.id === 'Tab') {
                textarea.value += '\t';
            } else if (el.id === 'CapsLock') {
                el.classList.add('active');
                isCapsOn = !isCapsOn;
                createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                keys = document.querySelectorAll('.key');
                keys.forEach(el => {
                    if (el.id === event.code) {
                        el.classList.add('active');
                    }
                });
            } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                isShiftOn = true;
                createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                keys = document.querySelectorAll('.key');
                keys.forEach(el => {
                    if (el.id === event.code) {
                        el.classList.add('active');
                    }
                });
            } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
                isControlDown = true;
            } else if (el.id === 'AltLeft' || el.id === 'AltRight') {
                if (isControlDown === true) {
                    if (lang === 'ru') {
                        lang = 'en';
                        localStorage.setItem(langStorage, 'en');
                    } else {
                        lang = 'ru';
                        localStorage.setItem(langStorage, 'ru');
                    }
                    createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                    keys = document.querySelectorAll('.key');
                }
            } else if (el.id === 'Enter') {
                textarea.value += '\n';
            } else if (el.id === 'Delete') {
                if (pos >= 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(pos + 1, string.length);
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                }
                textarea.selectionStart = pos;
                textarea.selectionEnd = pos;
            } else if (el.id === 'Backspace') {
                if (pos > 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos - 1) + string.slice(pos, string.length);
                    textarea.selectionStart = pos - 1;
                    textarea.selectionEnd = pos - 1;
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                    textarea.selectionStart = pos;
                    textarea.selectionEnd = pos;
                }
            } else {
                textarea.value += el.textContent;
            }
        }
    });
});

document.addEventListener('keyup', function(event) {

    keys.forEach(el => {
        if (el.id === event.code) {
            el.classList.remove('active');
        }
    });

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        isShiftOn = false;
        createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
        keys = document.querySelectorAll('.key');
        keys.forEach(el => {
            if (el.id === event.code) {
                el.classList.remove('active');
            }
        });
    }

    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        isControlDown = false;
    }
});

keyboard.addEventListener('mousedown', function(event) {
    event.preventDefault();
    textarea.focus();

    let string = textarea.value;
    let pos = textarea.selectionStart;
    let posEnd = textarea.selectionEnd;

    keys.forEach(el => {
        if (el === event.target) {
            el.classList.add('active');
            if (el.id === 'Tab') {
                textarea.value += '\t';
            } else if (el.id === 'CapsLock') {
                isCapsOn = !isCapsOn;
                createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                keys = document.querySelectorAll('.key');
                keys.forEach(el => {
                    if (el.id === event.target) {
                        el.classList.add('active');
                    }
                });
            } else if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
                isShiftOn = true;
                createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                keys = document.querySelectorAll('.key');
                keys.forEach(el => {
                    if (el.id === event.target) {
                        el.classList.add('active');
                    }
                });
            } else if (el.id === 'ControlLeft' || el.id === 'ControlRight' || el.id === 'AltLeft' || el.id === 'AltRight') {
            } else if (el.id === 'Enter') {
                textarea.value += '\n';
            } else if (el.id === 'Delete') {
                if (pos >= 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(pos + 1, string.length);
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                }
                textarea.selectionStart = pos;
                textarea.selectionEnd = pos;
            } else if (el.id === 'Backspace') {
                if (pos > 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos - 1) + string.slice(pos, string.length);
                    textarea.selectionStart = pos - 1;
                    textarea.selectionEnd = pos - 1;
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                    textarea.selectionStart = pos;
                    textarea.selectionEnd = pos;
                }
            } else {
                textarea.value += el.textContent;
            }
        }
    });
});

keyboard.addEventListener('mouseup', function(event) {
    keys.forEach(el => {
        if (el === event.target) {
            el.classList.remove('active');
            if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
                isShiftOn = false;
                createButtons(_assets_js_keyMap_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                keys = document.querySelectorAll('.key');
            }
        }
    });
});

function keyCodeClassName(str) {
    let x = str.charAt(0).toLowerCase();
    return x + str.slice(1);
}

})();

/******/ })()
;
//# sourceMappingURL=main.ec7ebab3c324dfb102c1.js.map