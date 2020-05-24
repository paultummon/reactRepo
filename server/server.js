const express = require('express');
const app = express();
const cors = require('cors');    

app.use(cors()); 

app.get('/clients', (req, res) => {
    const clients = [{clientFirstName: 'Jenny', clientLastName: 'Jossey' }, {clientFirstName: 'Jilly', clientLastName: 'Kilhooly' }, {clientFirstName: 'Raven', clientLastName: 'Karmicheal' }]
   res.json(clients);
});

app.listen(3000, () => console.log('Server listening on port 3000'));