import React from 'react';
import { useStateValue } from '../StateProvider';

function CheckoutProduct () {
    //eslint-disable-next-line
    const [{carts}, dispatch] = useStateValue();

        return(
            <div>
                    {carts.map( items => 
                           <div className="checkout_product" key={items.id}>

                               <img className="checkout_image" src={items.image} alt=""/>
                               <div class="checkout_productInfo">
                               <p className="checkout_title">{items.title}</p>
                                <p className="checkout_price"><small>$</small><strong>{items.price}</strong></p>
                                
                                <button className="product_button" onClick = { ( (carts) =>{
                                        dispatch({
                                            type: 'Remove from basket',
                                            id: carts.id
                                        })
                                } )}>Remove from basket</button>
                               {console.log()}
                               </div>
                               
                                </div> 
                                
                    ) }
            </div>
        )
}

export default CheckoutProduct;