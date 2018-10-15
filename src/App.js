import './app.css'
import React from 'react'
import {Router, Link} from '@reach/router'
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6
} from './slides'

const App = () => (
  <div className='class-slides'>
    <nav className='slide-navigation'>
      <Link to='/slide-1'>Slide 1</Link>
      <Link to='/slide-2'>Slide 2</Link>
      <Link to='/slide-3'>Slide 3</Link>
      <Link to='/slide-4'>Slide 4</Link>
      <Link to='/slide-5'>Slide 5</Link>
      <Link to='/slide-6'>Slide 6</Link>
    </nav>

    <Router>
      <Slide1 path='slide-1' />
      <Slide2 path='slide-2' />
      <Slide3 path='slide-3'/>
      <Slide4 path='slide-4' />
      <Slide5 path='slide-5' />
      <Slide6 path='slide-6' />
    </Router>
  </div>
)

export default App
