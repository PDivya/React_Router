import React,{Component} from 'react';
import { Link, Route } from 'react-router-dom';

export default class Category extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return( <div> <ul>
            <li><Link to={`${this.props.match.url}/shoes`}>Shoes</Link></li>
            <li><Link to={`${this.props.match.url}/boots`}>Boots</Link></li>
            <li><Link to={`${this.props.match.url}/footwear`}>Footwear</Link></li>
        
          </ul>
          <Route path={`${this.props.match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
          </div>)
        }
}
