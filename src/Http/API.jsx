import { $host } from './index'
import jwt_decode from 'jwt-decode'

// get list

export const check = async () => {
	const { data } = await $host.get('administrator/list_subadmin/')
	console.log(data)
	return jwt_decode(data.token)
}

export const fetchCourses = async () => {
	const { data } = await $host.get(`course/`)
	return data
}
export const fetchStudents = async () => {
	const { data } = await $host.get(`student/`)
	return data
}

// get post
export const createCourse = async course => {
	const { data } = await $host.post('course/create/', course)
	return data
}
export const login = async user => {
	const { data } = await $host.post('administrator/login/', user)
	return data
}
export const createMentorsQuantity = async quantity => {
	const { data } = await $host.post('classquantity/create/', quantity)
	return data
}
export const createMentor = async mentor => {
	const { data } = await $host.post('mentor/create/', mentor)
	return data
}

export const fetchMentors = async () => {
	const { data } = await $host.get('mentor/')
	return data
}

export const fetchQuantity = async () => {
	const { data } = await $host.get('classquantity/')
	return data
}

// get obj

export const fetchCoursePage = async id => {
	const data = await $host.get(`course/${id}/`)
	return data
}
export const fetchMentorQuantity = async id => {
	const { data } = await $host.get(`classquantity/${id}/`)
	return data
}
export const fetchMentorPage = async id => {
	const data = await $host.get(`mentor/${id}/`)
	return data
}
export const fetchStudentOne = async id => {
	const data = await $host.get(`student/${id}/`)
	return data
}

// put

export const updateCourse = async (id, course) => {
	const { data } = await $host.put(`course/${id}/`, course)
	return data
}

export const updateMentor = async (id, mentor) => {
	const data = await $host.put(`mentor/${id}/update`, mentor)
	return data
}

export const updateStudent = async (id, course) => {
	const { data } = await $host.put(`student/${id}/`, course)
	return data
}

// delete
export const deleteCourse = async id => {
	const { data } = await $host.delete(`course/${id}/`)
	return data
}
export const deleteMentor = async id => {
	const data = await $host.delete(`mentor/${id}/delete/`)
	return data
}
export const deleteQuantity = async id => {
	const { data } = await $host.delete(`classquantity/${id}/`)
	return data
}
