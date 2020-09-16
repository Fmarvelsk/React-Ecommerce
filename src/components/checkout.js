import React from 'react';
import Subtotal from './subTotal';
import CheckProduct from './checkoutProduct';
import { useStateValue } from '../StateProvider';


function Checkout (){
    //eslint-disable-next-line
    const [{carts}, dispatch ] = useStateValue()
    console.log(carts)
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ads" src="https://ng.jumia.is/cms/Homepage/2020/W37/cb-lloyd-min.jpg  " alt=""/>
                <div>
            <h2 className="checkout_title">Your Shopping Orders</h2>  
           
            </div>
            <div>
            <CheckProduct />
            </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
            </div>
    )
}
export default Checkout;