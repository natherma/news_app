import React, { Component } from 'react';

export default class Newitem extends Component {
    render() {
      let {title,description,imgUrl,url} = this.props;
      return(
        <div className="card" style={{width: "18rem",borderRadius:"1rem"}}>
        <img className="card-img-top" src={imgUrl} alt="Incident" style={{borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-outline-primary" target={'_blank'} rel="noreferrer">Read More</a>
        </div>
      </div>
      )
  }
}
