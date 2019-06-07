import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Product(props){

    
    return(
        <div className="product">
            <img 
                src={props.imageURL}
                className="product_img" 
                alt="product" />
            <div className="product_box">
                <p>{props.productName}</p>
                <p>{props.price}</p>
            </div>
            <div className="product_button_box">
                <button
                    className="product_button_button"
                    onClick={() => props.deleteProduct(props.id)}
                >Delete</button>
                <Link to={`/edit/${props.id}`}><button
                    className="product_button_button"
                >Edit</button></Link>
            </div>
        </div>
    )
    
}