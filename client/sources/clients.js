const request = require('superagent');

// import request from 'superagent';

const getAllClients = () => {
  const url='http://localhost:3000';
  return request.get(`${url}/clients`)
    .accept('json')
    .then(res => {
      return res.body
    })
    .catch(error => {
      console.log('THIS IS THE ERROR FOR THE CALL ====>', error)
    })
}

export {
    getAllClients
}