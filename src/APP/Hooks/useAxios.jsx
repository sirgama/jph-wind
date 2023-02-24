import axios from 'axios';
import React from 'react'

const baseUrl ='https://jsonplaceholder.typicode.com'

const useAxios = () => {

  return async (obj) => {
    const { headers = {'Content-type': 'application/json; charset=UTF-8'}, method, data = {}, url } = obj;
    try {
        let res = await axios({
            headers: headers,
            method: method,
            url: `${baseUrl}/${url}`,
            data: data
        })
        return res.data
    } catch (error) {
        console.log(error)
        console.log(error.response.data.message)
        return 'error'
    }
  }
}

export default useAxios