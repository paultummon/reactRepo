const express = require('express');
const app = express();
const cors = require('cors');  
const port = process.env.PORT

app.use(cors()); 

app.get('/clients', (req, res) => {
    const clients = [{clientFirstName: 'Jenny', clientLastName: 'Jossey' }, {clientFirstName: 'Jilly', clientLastName: 'Kilhooly' }, {clientFirstName: 'Raven', clientLastName: 'Karmicheal' }]
   res.json(clients);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));