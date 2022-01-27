import React, { Component } from 'react';

let removeActiveClass = () => 
{
  document.querySelectorAll(`[href^='/']`).forEach(element => 
    {
      element.classList.remove("active");
    })
}

export default class Aboutus extends Component {
   componentDidMount()
   {
    if(window.location.pathname==='/aboutus')
    {
      removeActiveClass();
      document.querySelector('[href="/aboutus"]').classList.add('active');
    }
   }
  render() {
    return (
        <div className='container mt-3'>
        <h1>
            About - Us
        </h1>
        <p>
            NewsNow provide you with daily dose of news about top categories like crypto and international, local news.
        </p>
        </div>
    );
  }
}
