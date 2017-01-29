'use strict';

export default class Helper {
	elt(el = 'div', cls = '', text = '') {
		let elem = document.createElement(el);
		elem.className = cls;
		elem.textContent = text;
		return elem;
	}
}