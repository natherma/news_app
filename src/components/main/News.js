import React, { Component } from 'react';
import Newitem from './Newitem.js';

let removeActiveClass = () => 
{
  document.querySelectorAll(`[href^='/']`).forEach(element => 
    {
      element.classList.remove("active");
    })
}

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {articles:[]};
  }
  async componentDidMount()
  {
    let response = await fetch(this.props.apiUrl);
    let data = await response.json();
    this.setState({articles:data.articles});
    if(window.location.pathname==='/')
    {
      removeActiveClass();
      document.querySelector('#home').classList.add('active');
    }
    else if(window.location.pathname==='/international')
    {
      removeActiveClass();
      document.querySelector('[href="/international"]').classList.add('active');
    }
    else if(window.location.pathname==='/crypto')
    {

      removeActiveClass();
      document.querySelector('[href="/crypto"]').classList.add('active');
    }
    else if(window.location.pathname==='/about')
    {
      removeActiveClass();
      document.querySelector('[href="/about"]').classList.add('active');
    }
  }
  render() {
    return (
      <div className='container mt-3'>
        <h1 className='my-3'>
           Newsnow - Top headlines - {this.props.location}
        </h1>
        <div className='row'>

        {this.state.articles.map(element => 
          {
            return <div className='col-md-4 col-sm-1 d-flex justify-content-center my-2' key={element.url}>
                 <Newitem  title = {element.title.slice(0,40)+"..."} description = {element.description.slice(0,90)+"..."} imgUrl = {element.urlToImage} url = {element.url} />
                 </div>
          })}
        </div>
      </div>
    );
  }
}

