import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageURL: '',
            productName: '',
            price: 0,
            isEdit: false
        }
    }

    componentDidMount(){
        if(this.props.match.params.id){
            axios.get(`api/products/${this.props.match.params.id}`).then(res => {
                this.setState({
                    imageURL: res.data.image_url,
                    productName: res.data.product_name,
                    price: res.data.price,
                    isEdit: true
                })
                console.log(res)
            })
        }
    }

    cancelClick = () => {
        this.setState({
            imageUrl: '',
            productName: '',
            price: 0
        })
    }

    addClick = () => {
        axios.post('/api/products', {
            imageURL: this.state.imageURL,
            productName: this.state.productName,
            price: this.state.price
        }).then(res => {
            alert('Product Added')
        }).catch(err => {
            alert('Problem adding product to server');
            console.log('Problem adding product to server Error:', err)
        });
        this.cancelClick();
    }

    editClick = () => {
        axios.put(`/api/products/${this.props.match.params.id}`, {
            imageURL: this.state.imageURL,
            productName: this.state.productName,
            price: this.state.price
        }).then(res => {
            alert('Product Updated');
        }).catch(err => {
            alert('Problem editing product');
            console.log('Problem editing product Error:', err);
        });
        this.cancelClick();
    }

    render(){
        let image = this.state.imageURL ? this.state.imageURL : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXQ0NCqqKi6ubnBwMCnpaXPz8+wrq64tratq6vHxsa0srLMzMyrqanLysq/vb3Ew8PptXwOAAACvElEQVR4nO3a3Y6rIBSG4WIRFSre/91OK9rdKYgdbbYs8z7JnExP+ALC4udyAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2Mr5Kubd0c36mt5qrWJa2/7opn1Hn0g3O0XE/pZJeDvDSK1SI/TJHt28/epcvrv66Abudl1JeD26gbs1Kwmboxu4l1sJqHR3dBO3qIdhXtXtWkLVPCuATso36bxJrvCrvamNjDKnM1viTSGNgDGbq2A+UXyV48zOhKb0iPkK5gO69OVjZ76HoyPkDV9IOBwdIst/IaE/OkRWlW+8abz3zcpkVB0dIiuX0D7Xc5ctdaQmbH6v5d1yRS4zYRtvkq7tmRKaVL25VBxITNimC2qX7kWBCdu5EHOdt9b6bg7cJyPKS6jnb3Aw6lHTaWXmRf2aqvHkJZyO05z9F0fbqRtTq4a8hKHD3uaVKWKqyhOX0I5nE3XzNiBN+HeiE6Ul1KHMjDsrdO0Qf4niEo7DsY7XvnbsxF5+wnb8v4uDhOiXOLq0hGEm9YmEYfjG9am0hOFQIlVnL/1ynoRm4ZfzJDxXHybKs6mYk58wzKVdImHYEsfFt7SEOly3xLVLWA9r+evhNBiXaprE8JWWcN5avNWl89H2CepSpcL35trXiPNTmi7xUENewjDXXPrXWbOZtv3n2B/qeUffqfHmVOubn257EzsLiQnncXrX+6Zp/PP+7CznNC9HUb+lA4pMqNrUfdJCQJkJ1S2OOJzqzPuxPLzfWyxeFgtNeGcqV9f15f7nKpN5sCg3odLKWlvd/1T2sr/shGvv9D5RdsLuCwnLfjS0cJ30FwsXVcXY/56m7EGaPPr9G1P8A8W9X2LZX+HI7XqbWPZzoUntTau3aI0vfohOXH/doi98FgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPiffgCv1BfNcLZ8TgAAAABJRU5ErkJggg=='
        return(
            <div className="Form">
                <div className="form_img_preview">
                    <img src={image} alt="product" />
                </div>
                <p>Image URL:</p>
                <input 
                    type="text"
                    value={this.state.imageURL}
                    onChange={e => this.setState({imageURL: e.target.value})}/>
                <p>Product Name:</p>
                <input 
                    type="text"
                    value={this.state.productName}
                    onChange={e => this.setState({productName: e.target.value})} />
                <p>Price:</p>
                <input 
                    type="text" 
                    pattern="[0-9]*"
                    value={this.state.price}
                    onChange={e => this.setState({price: +e.target.value})} />

                <div className="form_button_box">
                    <button
                        onClick={this.cancelClick}
                    >Cancel</button>
                    <button
                        onClick={this.state.isEdit? this.editClick : this.addClick}
                    >{this.state.isEdit ? 'Edit Inventory' : 'Add to Inventory'}</button>
                </div>

            </div>
        )
    }
}