import React from 'react'
import './style.css';
const Card = (props) => {
  let style={
    background: `url('${props.images}')`,
    backgroundSize: `cover`,
    backgroundRepeat: `no-repeat`,
  }
  return (
    <>
      <div className="card" style={style}>
        <div className='bottom'>
          <div className="info">
            <p className="title">{props.title}</p>
            <div className="source-season">
              <p className="source">{props.source}</p>
              <h1 className="season">Total Seasons:{props.seasons}</h1>
            </div>
          </div>
          <a href={props.link} target="__blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Card;
