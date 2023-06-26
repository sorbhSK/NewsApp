import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props
    return (
            <div>
                <div className="card">
                  <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                  </div>
                    <img style={{height:"310px"}}  src={imageUrl} alt="..." className='card-img-top' />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                        <p className="card-text">{description}.</p>
                        <p className="card-text"><small className='text-muted'>By {author ? author :"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="card-link btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
    )
  }
}

export default NewsItem
