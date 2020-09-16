import React from 'react';
import { useStateValue } from "../StateProvider"


function Product ({id, title, image, price, rating }) {
    // eslint-disable-next-line
        const [{ carts }, dispatch] = useStateValue()
        const addToCarts = () => {
            dispatch({
                type:'Add_to_carts',
                item:{
                    id: id,
                    title: title,
                    image:image, 
                    price:price,
                    rating: rating
                }
            })
    
        }
        return(
            <div className="product_items">
                <div className="product_rating">
                <p>{title}</p>
                <p><small>$</small><strong>{price}</strong></p>
                </div>
                <div>            
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    </div>
                <img src={image} alt="phones"></img>
            <button onClick={addToCarts}>Add to carts</button>
            </div>
        )
    }
    
export default Product;