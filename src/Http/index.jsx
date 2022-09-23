import axios from 'axios'

const $host = axios.create({
	baseURL: 'http://159.89.0.88/api/',
})

const $authHost = axios.create({
	baseURL: 'http://159.89.0.88/api/',
})

const authInterceptor = config => {
	config.headers.Authorization = `Bearer ${sessionStorage
		.getItem('token')
		.replace(/^"(.*)"$/, '$1')}`
	return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
