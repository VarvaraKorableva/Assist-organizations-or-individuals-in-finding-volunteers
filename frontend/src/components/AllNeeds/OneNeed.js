import './OneNeed.css'
import React from 'react'
import { Link } from 'react-router-dom'


function OneNeed({oneNeed}) {

    return (
      <li className="one-need">
        <h3 className="one-need__title">{oneNeed.name}</h3>
        <p className="one-need__text">{oneNeed.description}</p>
        <p className="one-need__text one-need__text-title">Valid from:</p>
        <p className="one-need__text">{oneNeed.valid_from}</p>
        <p className="one-need__text one-need__text-title">Valid until:</p>
        <p className="one-need__text">{oneNeed.valid_till}</p>
        <p className="one-need__text one-need__text-title">Action number: {oneNeed.id}</p>
        <div className="one-need__btn">
            <Link className="one-need__link" to="/volunteers-form">
                Respond
            </Link>
        </div>    
      </li>
    );
}

export default OneNeed;