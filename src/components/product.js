import React,{Component} from 'react';
import { Link, Route } from 'react-router-dom';

export default class Product extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var product = this.props.data.find(p=>p.id==this.props.match.params.productId);
        var productData;

        if(product){
            productData = <div>
            <h3> {product.name} </h3>
            <p>{product.description}</p>
            <hr/>
            <h4>{product.status}</h4>  </div>;
        }
        else{
            productData = <h2> Sorry. Product doesnt exist </h2>;
        }
        return (
            <div>
            <div>
                {productData}
            </div>
            </div>
        )    
            }
}