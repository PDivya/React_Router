import React,{Component} from 'react';
import { Link, Route } from 'react-router-dom';
import productsData from './productData';
import Product from './product'


export default class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>
                 <div>
                   <h3> Products</h3>
                   <ul> {this.getProductLink()} </ul>
                 </div>
                </div>
        
                <Route path={`${this.props.match.url}/:productId`}
                    render={ (props) => <Product data= {productsData} {...props} />}/>
                <Route exact path={this.props.match.url}
                    render={() => (
                    <div>Please select a product.</div>
                    )}
                />
            </div>
          )
    }
    getProductLink(){
        var linkList=productsData.map((product)=>{
            return(
                <li>
                  <Link to={`${this.props.match.url}/${product.id}`}>
                    {product.name}
                  </Link>
                </li>
                )
        })
        return linkList;
    }
}