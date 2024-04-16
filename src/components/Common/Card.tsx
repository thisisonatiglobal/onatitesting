import React from 'react';

const CardComponent = ({HOVER, description }) => {
  return (
    <div className="card">
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>

    <h1>{HOVER}</h1>
    <p>
        {description}
    </p>
</div>
  );
};

export default CardComponent;
