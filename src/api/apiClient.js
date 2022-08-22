import axios, { AxiosRequestConfig } from 'axios'

export const instance = axios.create({
  responseType: 'json',
})

export const getRequest = (url, config) => instance.get(url, config)

export const deleteRequest = (url, config) => instance.delete(url, config)

export const postRequest = (url, data, config) => instance.post(url, data, config)

export const putRequest = (url, data, config) => instance.put(url, data, config)

export const patchRequest = (url, data, config) => instance.patch(url, data, config)
