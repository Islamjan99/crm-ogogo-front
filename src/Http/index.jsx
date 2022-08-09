import axios from 'axios'

const $host = axios.create({
	baseURL: 'https://629721168d77ad6f75fb59f5.mockapi.io/',
})

const $authHost = axios.create({
	baseURL: 'https://629721168d77ad6f75fb59f5.mockapi.io/',
})

const authInterceptor = config => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
