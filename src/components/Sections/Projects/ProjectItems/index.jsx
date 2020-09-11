import React from 'react'
import SpaceXPng from '../../../../assets/spacex.png'

export default function ProjectItems() {
  return (
    <>
    <div className="project-row">
      <div className="project-display">
        <img src={SpaceXPng} alt="" className="project-display-img"/>
      </div>
      <div className="project-description">
        <h4> SpaceX launch dashboard</h4>
        <article>
          App that displays all the records of SpaceX launches. <br />
          <br/>
          Features:
          <ul className="project-feature-list">
            <li>Filter launches by Upcoming, Past, Successful status</li>
            <li>Click on a launch card to expand into details</li>
            <li>Filter results by date range</li>
            <li>Fully Responsive</li>
          </ul>
        </article>
      </div>
      
    </div>

    <div className="project-row">
      <div className="project-description">
        <h4> Weather PWA (WIP)</h4>
        <article>
          App that displays all the records of SpaceX launches. <br />
          <br/>
          Features:
          <ul className="project-feature-list">
            <li>Filter launches by Upcoming, Past, Successful status</li>
            <li>Click on a launch card to expand into details</li>
            <li>Filter results by date range</li>
            <li>Fully Responsive</li>
          </ul>
        </article>
      </div>
      <div className="project-display">
        Coming Soon...
      </div>
      
    </div>
    </>
  )
}
