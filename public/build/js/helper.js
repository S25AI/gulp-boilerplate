'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
	function Helper() {
		_classCallCheck(this, Helper);
	}

	_createClass(Helper, [{
		key: 'elt',
		value: function elt() {
			var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
			var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
			var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

			var elem = document.createElement(el);
			elem.className = cls;
			elem.textContent = text;
			return elem;
		}
	}]);

	return Helper;
}();

exports.default = Helper;