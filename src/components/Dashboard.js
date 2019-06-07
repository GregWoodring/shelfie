import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            products: []
        }
    }

    componentWillMount(){
        axios.get('/api/products').then(res => {
            this.setState({
                products: res.data
            })
            console.log(res.data)
        }).catch(err => {
            console.log('Error fetching data from api/products in Dashboard Error:', err)
        })
    }

    deleteProduct = id => {
        axios.delete(`/api/products/${id}`).then(res => {
            this.setState({
                products: res.data
            })
            alert('Product deleted');
        }).catch(err => {
            alert('Problem deleting product');
            console.log('Problem deleting product Error:', err);
        })
    }

    renderProduct= () => {
        return this.state.products.map(item => {
            return (
            <Product 
                key={item.id}
                id={item.shelfie_product_id}
                productName={item.product_name}
                imageURL={item.image_url}
                price={item.price}
                deleteProduct={this.deleteProduct}
            />
            )
        })
    }

    render(){
        return(
            <div className="dashboard">
                {this.renderProduct()}
            </div>
        )
    }
}