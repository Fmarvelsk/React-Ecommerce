import React from 'react';
import Currency from 'react-currency-format'
import { useStateValue } from '../StateProvider';
import { getCarts } from '../reducer'

function SubTotal(){
    //eslint-disable-next-line
    const [{carts}, dispatch] = useStateValue()
    
    return(
        <div className="subtotal">
            <Currency renderText={(value) => (
                <>
                <p>
            Subtotal ({carts.length} items) : <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )} 
            decimalScale={2}
            value={getCarts(carts)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}/>
            <button>Proceed to checkout</button>
        </div>
    )
}
export default SubTotal;