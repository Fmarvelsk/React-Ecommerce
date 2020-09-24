import React, { useEffect, useState } from 'react';
import '../payment.css'
import { getCarts } from '../reducer';
import { useStateValue } from '../StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Currency from 'react-currency-format';
import axios from '../axios';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';

function Payment (){
    const [{ carts, user }, dispatch ] = useStateValue(),
        stripe = useStripe(),
        element = useElements(),
        history = useHistory(),
        [disabled, setDisabled] = useState(true),
        [error, setError] = useState(null),
        [succeed, setSucceeded] = useState(false),
        [processing, setProcessing] = useState(''), 
        [clientSession, setClient] = useState(true);

    useEffect( () => {
        const getclientSession = async () => {
            const response = await axios({
                method : "POST",
                url: `/payments/create?total=${getCarts(carts) * 100 }`
            });
            setClient(response.data.clientSession)
            
        }
        getclientSession()
           
    }, [carts])

    const handlePayment = async (e) => {
       
        e.preventDefault();
        setProcessing(true); 
        const payload = await stripe.confirmCardPayment(clientSession, {
            payment_method : {
                card : element.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            console.log(paymentIntent)
          db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                carts : carts,
                amount : paymentIntent.amount,
                created_At : paymentIntent.created
            })
            setSucceeded(true);
            setError(null)
            setProcessing(false);

            dispatch({
                type : "Remove carts",
            })

            history.replace('/orders')
        })

    }

    const cardChange = e => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message: '')
    }

    return (
        <div className="payment-section">
            <div className='payment-title'>
                <h1>Delivery Information</h1>
                </div>
                <div className= "flex-payment">
                <div className="payment-details">
                    
            <div className = "payment-detail">
            
                    <h3>
                        1. Customer Details
                    </h3>
            <p>User Email : {user?.email}</p>
            <p>No of items: {carts?.length} </p>
            <p>Address :</p>
            
            <div class="payment-method">
                
            <h3>
                   2. Payment Method
                </h3>
                <form className="card" onSubmit={handlePayment}>

                <CardElement onChange={cardChange} />
                <div className="total-payment">
                <Currency renderText={(value) => (
                <>
                <h4>
            Total Amount : <strong>{value}</strong>
                </h4>
                </>
            )} 
            decimalScale={2}
            value={getCarts(carts)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}/>
            
                <button disabled={processing || disabled || succeed }>Submit</button>

                <span>
                    {processing ? <p>Processing</p> : "Buy Now"}
                    </span>
                </div>
                
                {error && <div>{error}</div>} 
                </form>
                </div>
            </div>
           
                </div>

                <div className="payment-order">
                    <h3>
                        Your order ({carts?.length} items)
                    </h3>
                    {carts.map((cart, index) => 
                        <div className="info" key={index}> 
                        
                            <img src={cart.image} alt="image" />
                        
                    <div className="product-details"> 
                    <p>{cart.title}</p>
                    <p>$<strong>{cart.price}</strong></p>
                    </div>
                        </div>
                    )}
                </div>
            </div>
            </div> 
    )
}

export default Payment