import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const fetchMentors = async () => {
	const { data } = await $host.get('mentor/')
	return data
}
export const fetchMentorsQuantity = async () => {
	const { data } = await $host.get('classquantity/')
	return data
}
export const createMentor = async mentor => {
	const { data } = await $host.post('mentor/create/', mentor)
	return data
}
export const updateMentor = async (id, mentor) => {
	const data = await $host.put(`mentor/${id}/update`, mentor)
	return data
}
export const deleteMentor = async id => {
	const data = await $host.delete(`mentor/${id}/delete`)
	return data
}
export const fetchCourses = async () => {
	const { data } = await $host.get(`course/`)
	return data
}
