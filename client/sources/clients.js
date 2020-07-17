const request = require('superagent');

const getAllClients = () => {
  const url=`http://localhost:3030`;
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