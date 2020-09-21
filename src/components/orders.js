import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';

function Orders() {
    const [ {carts, user }, dispatch ] = useStateValue();
    const [orders, newOrders] = useState([])

useEffect( () => {
    let mounted = true;
    if( mounted ) {
    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => {(
        newOrders(snapshot.docs.map(doc => ( {
          id: doc.id,
          data : doc.data()
        }))
        
    ))
})
    }
    else {
        return newOrders([])
    }
    return () => mounted = false;
}, [user])
    return(
        <div className='orders__order'>
            {console.log(orders)}
            </div>
    )
}

export default Orders;