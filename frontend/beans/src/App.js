import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
//import {createStore} from 'redux';
//import allBeans from '../../backend/coffe-reducer'




// const store = createStore(allBeans);


export default class Coffemenu extends React.Component {
  
  state = {
    loading: true,
    coffe: null
  }

  async componentDidMount() {
    const url = "http://localhost:8080/api/coffe";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.menu)
    this.setState({ coffe: data.menu, loading: false });
  }
  
 
    
    render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.coffe) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>

   {    this.state.coffe.map(coffedrink =>
     <article key={coffedrink.id}>
      <p>{coffedrink.coffe}</p>
      <p>{coffedrink.description}</p>
      </article>
      )}
     
      </div>
    );
  }
}
    
 