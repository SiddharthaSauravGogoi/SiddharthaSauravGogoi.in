import React from "react"
import { Link } from "gatsby"

export default ({ children }) => (
  <div>
    <nav>
      <div className="brand">
        <Link to={`/`}>
          Home
        </Link>
      </div>
      <div className="nav-links">
        <Link to={`/blog/`} >
          Blog
        </Link>
      </div>
    </nav>
    {children}
  </div>
)