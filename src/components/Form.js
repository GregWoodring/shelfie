import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageUrl: '',
            productName: '',
            price: 0
        }
    }

    cancelClick = () => {
        this.setState({
            imageUrl: '',
            productName: '',
            price: 0
        })
    }

    render(){
        return(
            <div className="Form">
                <div className="form_img_preview"></div>
                <p>Image URL:</p>
                <input 
                    type="text"
                    value={this.state.imageUrl}
                    onChange={e => this.setState({imageUrl: e.target.value})}/>
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
                    <button>Add to Inventory</button>
                </div>

            </div>
        )
    }
}