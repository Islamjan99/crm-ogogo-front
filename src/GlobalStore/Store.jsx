import { makeAutoObservable } from 'mobx'
import JWTdecode from 'jwt-decode'

export default class Store {
	constructor() {
		this._isAuth = false
		this._mentors = [{ null: null, id: 1 }]
		this._role = {}
		this._users = []

		this._courses = []

		makeAutoObservable(this)
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}

	setMentors(mentors) {
		this._mentors = mentors
	}
	setCourses(courses) {
		this._courses = courses
	}

	setRole(role) {
		this._role = role
	}

	setUsers(role) {
		let i = null
		if (localStorage.getItem('token') !== null) {
			let token = localStorage.getItem('token')
			i = JWTdecode(token)
		}
		this._users = i
	}

	get isAuth() {
		return this._isAuth
	}

	get mentors() {
		return this._mentors
	}
	get courses() {
		return this._courses
	}

	get role() {
		return this._role
	}
	get users() {
		return this._users
	}
}
