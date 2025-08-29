import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>

      {/* Navigation */}
      <nav>
        <Link to="feature" style={{ marginRight: "10px" }}>Features</Link>
        <Link to="resume">Resume</Link>
      </nav>

      {/* Yaha pe nested routes render honge */}
      <Outlet />
    </div>
  )
}

export default Home
