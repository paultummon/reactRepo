const request = require('superagent');
const port = 3030

// import request from 'superagent';

const getAllClients = () => {
  const url=`http://localhost:${port}`;
  console.log('THIS IS PORT ====>', port)
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