import React from "react";

const New = ({ new1 }) => {
  const { urlToImage, url, title, description, source } = new1;

  return (
    <div className="col">
      <div className="card" style={{width: 18 + 'rem'}}>
        {(urlToImage) ? <img src={urlToImage} className="card-img-top" alt="..." /> : null } 
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          
          <a href={url} className="btn btn-primary" target="blank" rel="noopener noreferred">
            Go to {source.name} 
          </a>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default New;
