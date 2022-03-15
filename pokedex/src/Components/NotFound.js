import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/NotFound.css'

export default function NotFound() {
  return (
    <main className='main-not-found'>
      <div className='not-found-wrapper'>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link className="not-found-link"to="/">Back to the homepage</Link>
      </div>
    
    </main>
  )
}
