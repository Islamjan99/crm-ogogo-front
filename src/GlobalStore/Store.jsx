import { makeAutoObservable } from 'mobx'
import JWTdecode from 'jwt-decode'

export default class Store {
	constructor() {
		this._isAuth = true
		this._user = {}
		this._page = 1
		this._totalCount = 0
		this._limit = 9
		this._role = {}
		this._users = []
		this._quantityOfClasses = []
		this._mentors = []
		this._selectedMentor = []
		this._courses = []
		this._courseType = []
		this._students = []
		this._selectedCourse = {}
		this._selectedStudents = {}
		makeAutoObservable(this)
	}

	setIsAuth(bool) {
		this._isAuth = bool
	}
	setUser(bool) {
		this._user = bool
	}
	setPage(page) {
		this._page = page
	}
	setTotalCount(count) {
		this._totalCount = count
	}
	setIsAuth(bool) {
		this._isAuth = bool
	}

	setMentors(mentors) {
		this._mentors = mentors
	}
	setSelectedMentor(mentor) {
		this._selectedMentor = mentor
	}
	setCourses(courses) {
		this._courses = courses
	}
	setCourseType(type) {
		this._courseType = type
	}
	setStudents(students) {
		this._students = students
	}
	setSelectedStudents(student) {
		this._selectedStudents = student
	}
	setSelectedCourse(course) {
		this._selectedCourse = course
	}
	setQuantity(Quantity) {
		this._quantityOfClasses = Quantity
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
	get user() {
		return this._user
	}

	get mentors() {
		return this._mentors
	}
	get selectedMentor() {
		return this._selectedMentor
	}
	get courses() {
		return this._courses
	}
	get courseType() {
		return this._courseType
	}
	get students() {
		return this._students
	}
	get selectedStudents() {
		return this._selectedStudents
	}
	get selectedCourse() {
		return this._selectedCourse
	}
	get quantity() {
		return this._quantityOfClasses
	}
	get role() {
		return this._role
	}
	get users() {
		return this._users
	}

	get totalCount() {
		return this._totalCount
	}
	get page() {
		return this._page
	}
	get limit() {
		return this._limit
	}
}
