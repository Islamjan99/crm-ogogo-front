import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const fetchMentors = async () => {
	const { data } = await $host.get('mentor/')
	return data
}
export const createMentor = async mentor => {
	const { data } = await $host.post('mentor/create/', mentor)
	return data
}
export const updateMentor = async (id, mentor) => {
	const { data } = await $host.post(`mentor/${id}/update`, mentor)
	return data
}
