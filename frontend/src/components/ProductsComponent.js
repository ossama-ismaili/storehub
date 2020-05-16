import React, {useState,useEffect} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,ButtonGroup } from 'reactstrap';
import {CATEGORIES} from '../shared/categories';

const Product=({name,category,image,price,onAddItem,products})=>{
    const itemByName=(products.filter(product=>product.name===name)[0]);
    return(
        <div className="App-product">
            <div className="App-product-content">
                <Card className="App-product-card">
                    <CardImg top width="100%" src={image} alt="Product" />
                    <CardBody>
                        <CardTitle className="App-product-title"><h1 className="App-product-category">{category}</h1></CardTitle>
                        <CardSubtitle className="App-product-subtitle"><h2 className="App-product-name">{name}</h2></CardSubtitle>
                        <CardText><span className="text-danger">Price : {price}$</span></CardText>
                        <Button color="warning" onClick={()=>onAddItem(itemByName)}><strong>Add To Cart</strong></Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

function Products({onAddItem}) {
    const [products,setProducts]=useState([]);
    const [viewProducts,setViewProducts]=useState([]);
    const [categories,setCategories]=useState(CATEGORIES);

    useEffect(()=>{
        fetch('http://localhost:3001/products')
        .then(res=>{
            if(res.ok){
              return res.json();
            }
            else{
              throw new Error("Connect Failed");
            }
        })
        .then(data=>{
          setProducts(data);
        })
        .catch(err=>console.log(err));
    })

    const renderProducts=()=>{
        if(viewProducts.length>0){
            return viewProducts.map(product=>(<Product key={product.id} name={product.name} category={product.category} image={product.image} price={product.price} onAddItem={onAddItem} products={products} />))
        }
        else{
            return products.map(product=>(<Product key={product.id} name={product.name} category={product.category} image={product.image} price={product.price} onAddItem={onAddItem} products={products} />))
        }
    };

    const fileterByCategory=(category)=>{
        if(category==="ALL"){
            setViewProducts(products);
        }
        else{
            const productsFiltred=products.filter((product)=>product.category===category);
            setViewProducts(productsFiltred);
        }
    }

    const renderCategories=(
        categories.map(catg=><Button onClick={()=>fileterByCategory(catg)}>{catg}</Button>)
    );

    return(
        <div className='App-products'>
            <div className="container">
            <ButtonGroup>
                    <Button onClick={()=>fileterByCategory("ALL")}>ALL</Button>
                    {renderCategories}
            </ButtonGroup>
            <h1 className="App-products-title">OUR OFFERS</h1>
                <div className="row">
                    {renderProducts()}
                </div>
            </div>
        </div>
    );
}

export default Products;
