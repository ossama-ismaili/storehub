import React from 'react';
import {Button, Media} from 'reactstrap';

const CartItem=({name,image,price})=>{
    const deleteItem=()=>{
        fetch('http://localhost:3001/cart', {
            method: "DELETE",
            body: JSON.stringify({name:name.toString()})
          }).then((response)=>{     
            return response.text();
          }, (error)=>{
            console.log(error);
        });
    }

    return(
        <Media className="App-cart-item">
            <Media left href="#">
                <Media object src={image} width="100px" height="120px" className="mr-3" alt="Product" />
            </Media>
            <Media body>
                <Media heading>{name}</Media>
                <span className="App-cart-item-price">Price : {price}$</span>
            </Media>
            <Media right>
                <Button className="ml-3" color="success"><strong>Buy Now</strong></Button>
                <Button className="ml-3" color="danger" onClick={()=>deleteItem()}><strong>Delete</strong></Button>
            </Media>
        </Media>
    );
}

function Cart({items}) {
    const renderItems=(items.map(item=>(<CartItem image={item.image} name={item.name} price={item.price} />)))

    return(
        <div className="App-cart">
             <div className="container">
             <h1 className="App-cart-title">Your Cart</h1> 
                 <div className="row App-cart-content">
                    {renderItems}  
                 </div>
             </div>
        </div>
    );
}

export default Cart;