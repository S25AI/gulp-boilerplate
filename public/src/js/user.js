'use strict';

export default class User {
	constructor(name, age, gender) {
		this.name = name || 'Anonym';
		this.age = age || 20;
		this.gender = gender || 'male';
	}

	sayHello(user) {
		return `${this.name} greetings ${user.name}`;
	}
}