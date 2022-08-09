import { makeAutoObservable } from 'mobx'
import JWTdecode from 'jwt-decode'

export default class MentorsStore {
	constructor() {
		this._isAuth = false
		this._mentors = []
		this._role = {}
		this._users = []

		makeAutoObservable(this)
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}
	setMentors(bool) {
		this._mentors = bool
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
	get role() {
		return this._role
	}
	get users() {
		return this._users
	}
}
