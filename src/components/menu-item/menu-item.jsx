import React from 'react';
import './menu-item.scss';

const MenuItem = (props) => {
  const { title, imageUrl, size } = props;
  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="title">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;