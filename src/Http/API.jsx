import axios from 'axios'
import { $authHost, $host } from './index'

// get list
export const fetchCourseType = async () => {
	const { data } = await $authHost.get('http://159.89.0.88/api/course/type/')

	return data
}
export const fetchCourses = async page => {
	const { data } = await $authHost.get(
		`course/?page=${page !== undefined ? page : 1}`
	)
	return data
}
export const fetchArchiveCourses = async page => {
	const { data } = await $authHost.get(
		`course/archive/?page=${page !== undefined ? page : 1}`
	)
	return data
}
export const fetchStudents = async () => {
	const { data } = await $authHost.get(`student/`)
	return data
}
export const fetchMentors = async () => {
	const { data } = await $authHost.get('mentor/')
	return data
}
export const fetchQuantity = async () => {
	const { data } = await $authHost.get('classquantity/')
	return data
}

// post
export const createCourseType = async type => {
	const { data } = await $authHost.post(`course/type/`, type)
	return data
}
export const createCourse = async course => {
	const { data } = await $authHost.post('course/create/', course)
	return data
}
export const createMentorsQuantity = async quantity => {
	const { data } = await $authHost.post('classquantity/create/', quantity)
	return data
}
export const createMentor = async mentor => {
	const { data } = await $authHost.post('mentor/create/', mentor)
	return data
}
export const createStudent = async mentor => {
	const { data } = await $authHost.post('student/create/', mentor)
	return data
}

// get obj

export const fetchCoursePage = async id => {
	const data = await $authHost.get(`course/${id}/`)
	return data
}
export const fetchMentorQuantity = async id => {
	const { data } = await $authHost.get(`classquantity/${id}/`)
	return data
}
export const fetchMentorPage = async id => {
	const data = await $authHost.get(`mentor/${id}/`)
	return data
}
export const fetchStudentOne = async id => {
	const data = await $authHost.get(`student/${id}/`)
	return data
}

// put
export const updateCourse = async (id, course) => {
	const { data } = await $authHost.put(`course/${id}/update`, course)
	return data
}

export const updateMentor = async (id, mentor) => {
	const data = await $authHost.put(`mentor/${id}/update`, mentor)
	return data
}

export const updateStudent = async (id, course) => {
	const { data } = await $authHost.put(`student/${id}/update`, course)
	return data
}

// delete
export const deleteCourse = async id => {
	const { data } = await $authHost.delete(`course/${id}/move_to_archive/`)
	return data
}
export const deleteMentor = async id => {
	const data = await $authHost.delete(`mentor/${id}/delete/`)
	return data
}
export const deleteStudent = async id => {
	const data = await $authHost.delete(`student/${id}/delete/`)
	return data
}
export const deleteQuantity = async id => {
	const { data } = await $authHost.delete(`classquantity/${id}/`)
	return data
}
export const deleteCourseType = async id => {
	const { data } = await $authHost.delete(`course/type/${id}/`)
	return data
}

// admin

export const login = async user => {
	let data
	try {
		data = await $host.post('administrator/login/', user)
	} catch (e) {
		data = e.response
	}

	return await data
}
export const fetchSubAdmin = async () => {
	const { data } = await $authHost.get(`administrator/list_subadmin/`)
	return data
}

export const updateSubAdmin = async (id, course) => {
	const { data } = await $authHost.put(`course/${id}/update`, course)
	return data
}
export const createSubAdmin = async admin => {
	let data
	try {
		data = await $authHost.post('administrator/create_subadmin/', admin)
	} catch (e) {
		data = e.response.data
	}
	return data
}
export const deleteSubAdmin = async id => {
	const { data } = await $authHost.delete(`administrator/${id}/delete/`)
	return data
}
