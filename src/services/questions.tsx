import axios from 'axios'
import { BaseUrl } from 'const/baseUrl'
import { API } from 'const'

export const questionService = {
  create: async (data: any) => {
    let resp = ''
    const question = JSON.stringify(data)

    await axios
      .post(BaseUrl + `${API.QUESTIONS}`, question, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resp = response.data
      })
    return resp
  },

  delete: async (data: any) => {
    let resp = ''
    const question = JSON.stringify(data)

    await axios
      .post(BaseUrl + `${API.QUESTIONS}`, question, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resp = response.data
      })
    return resp
  },

  retrive: async (id?:any) => {
    let resp = ''
    await axios
      .get(BaseUrl + `${API.QUESTIONS}/?id=${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resp = response.data
      })
    return resp
  },
  all: async () => {
    let resp = ''
    await axios
      .get(BaseUrl + `${API.QUESTIONS}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resp = response.data
      })
    return resp
  },

  remove: async (id: any) => {
    let resp = ''

    await axios
      .delete(BaseUrl + `${API.QUESTIONS}/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resp = response.data
      })
    return resp
  },

  update: async (id: any, data: any) => {
    let resp = ''
    const question = JSON.stringify(data)

    await axios
      .put(BaseUrl + `${API.QUESTIONS}/${id}`, question, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resp = response.data
      })
    return resp
  },
}
