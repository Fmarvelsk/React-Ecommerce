import React, { useState, useEffect } from 'react';
import '../payment.css'
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from './order';


function Orders() {
  const [{ carts, user }, dispatch] = useStateValue();
  const [orders, newOrders] = useState([]);

  useEffect( () => {
    if(user){  
    db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .onSnapshot(snapshot =>(
            console.log(snapshot),
                newOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))}

        else {
            newOrders([1, 2])
        }
        
        console.log(user?.uid)

  }, [user])

  if(user){

    return (
        <div className='orders_header'>
            <h1>Your Orders</h1>

            <div className=''>
                {orders?.map(order => (
                    <Order props ={order}/>
                ))}              
            </div>
        </div>
    )
                }
                else {
                    return(
                        <div className="orders_header">
                            <div className="props view_error">
                            <h2> Sign in to view your order </h2>
                            </div>
                        </div>
                    )
                }
}

export default Orders
