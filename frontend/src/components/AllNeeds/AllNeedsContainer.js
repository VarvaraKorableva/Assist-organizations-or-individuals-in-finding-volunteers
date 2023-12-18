import './AllNeedsContainer.css'
import OneNeed from './OneNeed'
import React from 'react'


function AllNeedsContainer({allNeeds}) {

    return (
      <section className="all-needs-container">
        <h2>We need help, if you have time, respond to the request.</h2>
        <ul className="all-needs-container__container">
            {allNeeds.length > 0 && allNeeds.map((oneNeed)=> (
            <OneNeed
              key={oneNeed.id}
              oneNeed={oneNeed}/>
            ))}
        </ul>
      </section>
    );
}

export default AllNeedsContainer;