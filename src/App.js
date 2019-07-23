import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Route,Switch} from 'react-router-dom'
import Category from './components/category'
import Products from './components/products'

const Home = ()=>{
  return(<div>
      <h2>Home</h2>
      </div>)
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <nav>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/category">Category</Link></li>
           <li><Link to="/product">Product</Link></li>
           </ul>
       </nav>
       < Switch>
          <Route exact={true} path="/" component={Home} />
           <Route path="/category" component={Category} />
           <Route path="/product" component={Products} />
           <Route path="/:id" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)}/> 
         </Switch>
      </div>
    );
  }
}

export default App;
