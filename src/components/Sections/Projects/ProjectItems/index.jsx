import React from 'react'
import SpaceXPng from '../../../../assets/spacex.png'

export default function ProjectItems() {
  return (
    <div className="project-row">
      <div className="project-display">
        <img src={SpaceXPng} alt="" className="project-display-img"/>
      </div>
      <div className="project-description">
        <article>
          Simple website that displays all the records of spacex launches. <br />
          <br/>
          Features:
          <ul className="project-feature-list">
            <li>Filter launches by Upcoming, Past, Successful status</li>
            <li>Click on a launch card to expand into details</li>
            <li>Filter results by date range</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
