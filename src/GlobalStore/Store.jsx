import { makeAutoObservable } from 'mobx'
import JWTdecode from 'jwt-decode'

export default class Store {
	constructor() {
		this._isAuth = false
		this._isActive = false
		this._user = {}
		this._token = ''
		this._page = 1
		this._totalCount = 0
		this._limit = 10
		this._role = {}
		this._users = []
		this._admin = ''
		this._quantityOfClasses = []
		this._mentors = []
		this._selectedMentor = {}
		this._typeCourse = []
		this._selectedTypeCourse = []
		this._courses = []
		this._courseType = []
		this._allCourses = []
		this._students = []
		this._selectedCourse = {}
		this._selectedStudents = {}
		makeAutoObservable(this)
	}
	setIsActive(bool) {
		this._isActive = bool
	}
	setIsAuth(bool) {
		this._isAuth = bool
	}
	setUser(user) {
		this._user = user
	}
	setUsers() {
		let i = null
		if (
			sessionStorage.getItem('token') !== null &&
			sessionStorage.getItem('token') !== undefined
		) {
			let token = sessionStorage.getItem('token').replace(/^"(.*)"$/, '$1')
			this._token = token
			i = JWTdecode(token)
		}

		this._users = i
		return i
	}
	setToken(token) {
		this._token = token
	}
	setAdmin(admin) {
		this._admin = admin
	}
	setPage(page) {
		this._page = page
	}
	setTotalCount(count) {
		this._totalCount = count
	}

	setMentors(mentors) {
		this._mentors = mentors
	}
	setSelectedMentor(mentor) {
		this._selectedMentor = mentor
	}
	setTypeCourse(typeCourse) {
		this._typeCourse = typeCourse
	}
	setSelectedTypeCourse(selectedTypeCourse) {
		this._selectedTypeCourse = selectedTypeCourse
	}
	setCourses(courses) {
		this._courses = courses
	}
	setAllCourse(data) {
		this._allCourses = data
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
	get isActive() {
		return this._isActive
	}
	get isAuth() {
		return this._isAuth
	}
	get user() {
		return this._user
	}
	get token() {
		return this._token
	}
	get admin() {
		return this._admin
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
	get allCourses() {
		return this._allCourses
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
	get typeCourse() {
		return this._typeCourse
	}
	get selectedTypeCourse() {
		return this._selectedTypeCourse
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
