const functions = require('firebase-functions');
const express = require('express');
const cors =  require('cors')
const stripe = require('stripe')('sk_test_51HST2ACrAbXD0UyyCxwhNZaDyfKwN43d0acdLtImmiCp07tyCGZ5UF3fCaCRANS5JIqX4iR8rghPDffykLswEsaS00VlHv8xsi')


const app = express()

//const port = process.env.PORT || 4000;

app.use(cors( { origin: true}));
app.use(express.json())

app.get('/', (req, res, next) => {
    res.status(200).send('hello')
})
app.post('/payments/create', (req, res, next) => {
    const response = req.query.total;
    console.log(response)
    stripe.paymentIntents.create({
        amount : response,
        currency : "usd"
    }).then( result => {
        res.status(201).send({
            clientSession : result.client_secret
        })
        
    }).catch( err => console.log(err))
    
}) /**
app.post('/payments/create', async (req, res) => {
    const totals = req.query.total;
    console.log(totals)
    const response = await stripe.paymentIntents.create({
     amount : totals,
     currency : "usd"   
    })

    res.status(200).send({
        clientSession : response.client_secrets
    })
})**/
//app.listen(port, () => {
  // console.log(`Listening to port ${ port }`) 
//})

exports.api = functions.https.onRequest(app)
//http://localhost:5001/ecommerce-62924/us-central1/api