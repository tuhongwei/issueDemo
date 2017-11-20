webpackJsonp([0,1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var tpl = __webpack_require__(1),
	html = tpl(),
	test = document.getElementById("test");
	test.innerHTML = html;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var $imports = __webpack_require__(2);
	module.exports = function ($data) {
	    'use strict';
	    $data = $data || {};
	    var $$out = '';
	    $$out += '<!-- 这是需要移除的注释 -->\r\n<div>\r\n\t<p>首先感谢作者对于我上一个issue关于嵌套问题的解答\uFF0C我已经明白了问题所在\uFF0C已解决\u3002</p>\r\n\t<p>第一次在github上提issue\uFF0C我为重现问题专门写了这个demo</p>\r\n\t<img ';
	    $$out += 'src="' + __webpack_require__(5) + '"';
	    $$out += '> \r\n\t<p>这里img中的src如果是以./或../开题的相对路径形式就会报错\uFF0C如果是绝对路径或以/开题就没问题</p>\r\n</div>';
	    return $$out;
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/*! art-template@runtime | https://github.com/aui/art-template */

	var detectNode = __webpack_require__(4);
	var runtime = Object.create(detectNode ? global : window);
	var ESCAPE_REG = /["&'<>]/;

	/**
	 * 编码模板输出的内容
	 * @param  {any}        content
	 * @return {string}
	 */
	runtime.$escape = function (content) {
	    return xmlEscape(toString(content));
	};

	/**
	 * 迭代器，支持数组与对象
	 * @param {array|Object} data 
	 * @param {function}     callback 
	 */
	runtime.$each = function (data, callback) {
	    if (Array.isArray(data)) {
	        for (var i = 0, len = data.length; i < len; i++) {
	            callback(data[i], i);
	        }
	    } else {
	        for (var _i in data) {
	            callback(data[_i], _i);
	        }
	    }
	};

	// 将目标转成字符
	function toString(value) {
	    if (typeof value !== 'string') {
	        if (value === undefined || value === null) {
	            value = '';
	        } else if (typeof value === 'function') {
	            value = toString(value.call(value));
	        } else {
	            value = JSON.stringify(value);
	        }
	    }

	    return value;
	};

	// 编码 HTML 内容
	function xmlEscape(content) {
	    var html = '' + content;
	    var regexResult = ESCAPE_REG.exec(html);
	    if (!regexResult) {
	        return content;
	    }

	    var result = '';
	    var i = void 0,
	        lastIndex = void 0,
	        char = void 0;
	    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {

	        switch (html.charCodeAt(i)) {
	            case 34:
	                char = '&#34;';
	                break;
	            case 38:
	                char = '&#38;';
	                break;
	            case 39:
	                char = '&#39;';
	                break;
	            case 60:
	                char = '&#60;';
	                break;
	            case 62:
	                char = '&#62;';
	                break;
	            default:
	                continue;
	        }

	        if (lastIndex !== i) {
	            result += html.substring(lastIndex, i);
	        }

	        lastIndex = i + 1;
	        result += char;
	    }

	    if (lastIndex !== i) {
	        return result + html.substring(lastIndex, i);
	    } else {
	        return result;
	    }
	};

	module.exports = runtime;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

	// Only Node.JS has a process variable that is of [[Class]] process
	try {
	 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
	} catch(e) {}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5d55a0e6514e94e47cf6c98d493e69e3.png";

/***/ })
]);