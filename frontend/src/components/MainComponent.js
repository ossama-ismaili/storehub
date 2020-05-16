import React,{useState,useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Products from './ProductsComponent';
import Cart from './CartComponent';
import Contact from './ContactComponent';

function Main(){
    const [items,setItems]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/cart')
        .then(res=>{
            if(res.ok){
              return res.json();
            }
            else{
              throw new Error("Connect Failed");
            }
        })
        .then(data=>{
          setItems(data);
        })
        .catch(err=>console.log(err));
    });

    const addItem=(item)=>{
        fetch('http://localhost:3001/cart', {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
          }).then((response)=>{     
            return response.text();
          }, (error)=>{
            console.log(error);
          });
    }

    return(
        <div className="App-main">
            <Header />
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/products">
                    <Products onAddItem={addItem} />
                </Route>
                <Route path="/cart">
                    <Cart items={items} />
                </Route>
                <Route path="/aboutus">
                    <About />
                </Route>
                <Route path="/contactus">
                    <Contact />
                </Route>
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;
