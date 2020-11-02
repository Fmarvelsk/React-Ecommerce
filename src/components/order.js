import React from 'react';
import moment from 'moment';
import Currency from 'react-currency-format';

function Order({ props }) {
    return (
        <div className='props'>
            <h2>Order</h2>
            <p>{moment.unix(props.data?.created_At).format("MMMM Do YYYY, h:mma")}</p>
            <p className="props__id">
                <small>{props.id}</small>
            </p>
            <p>{}</p>
            {props.data?.carts.map( (items, index) => 
                <div className="checkout_product" key={index}>
                <img className="checkout_image" src={items.image} alt=""/>
                <div className="checkout_productInfo">
                <p className="checkout_title">{items.title}</p>
                 <p className="checkout_price"><small>$</small><strong>{items.price}</strong></p>
            </div>
            </div>
            )}
             <Currency renderText={(value) => (
                <>
                <p> Total product amount : <strong>{value}</strong> 
           </p> 
                </>
            )} 
            decimalScale={2}
            value={props.data?.amount }
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}/>
           
        </div>
    )
}

export default Order
