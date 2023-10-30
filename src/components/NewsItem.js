import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }}>
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
          <img
            src={
              !imageUrl
                ? "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6ced7f9785d1b0b85e4563b8b2be252b.png"
                : imageUrl
            }
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title ">
              {!title ? "this newshas been removed by admin" : title}...
            </h5>
            <p className="card-text">
              {!description
                ? "Description for this news is not availabel"
                : description}
              ...
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
