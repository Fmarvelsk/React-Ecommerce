import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
//import Order from './order'

function Orders() {
  const [{ carts, user }, dispatch] = useStateValue();
  const [orders, newOrders] = useState([]);

  useEffect(() => {
      if(user){
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            newOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))}
        else {
            newOrders([])
        }
        console.log(user?.uid)

  }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
               {orders}
            </div>
        </div>
    )
}

export default Orders
