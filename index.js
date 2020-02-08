const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 5000;

app.use(bodyParser.json())


app.get('/', (req, res, next) => {
    res.send('Welcome to now!!');
})

app.get('/users/karunakar', (req, res) => {
    res.json(
        { 
        name: 'karunakar',
        location: 'Hyderabad',
        job: 'Senior developer',
        salary: '9LPA',
        age: 31,
        color: 'Darkest possible',
        affairs: 'Prasanthi, pallavi',
        company: 'Ahex technologies',
        nextCompany: 'Trianz',
        birthPlace: 'Gajwel',
        finalPlace: 'Graveyard'
        }
    );
})

app.get('/users/ashok', (req, res) => {
    res.json({
        name: 'Ashok Sir',
        location: 'Bengaluru',
        job: 'Senior developer',
        salary: '9LPA',
        age: 27,
        color: 'Fair enough',
        affairs: 'Many but will not reveal',
        company: 'Amagi media labs',
        nextCompany: 'Amazon',
        birthPlace: 'Chennai'
    });
});

app.get('/users', (req, res) => {
    res.json([
    {name: 'Zameer', location: 'Bengaluru'},
    {name: 'Ashok', location: 'Bengaluru'},
    {name: 'Sherif', location: 'Bengaluru'},
    {name: 'Amritesh', location: 'Hyderabad'},
    {name: 'Karunakar', location: 'Hyderabad'},
    {name: 'Ram singh', location: 'Hyderabad'}
    ])
})

app.post('/user', (req, res) => {
    const {name, location} = req.body;
    console.log('req.body: ',  req.body);
    res.send({status: 'User created!', name, location});
})

app.listen(port, () => {
    console.log('App listeing on '+ port);
})