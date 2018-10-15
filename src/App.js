import './app.css'
import React from 'react'
import {Router, Link} from '@reach/router'
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  SubSlideA,
  SubSlideB
} from './slides'

const App = () => (
  <div className='class-slides'>
    <nav className='slide-navigation'>
      <Link to='/slide-1' getProps={({isCurrent}) => isActiveLink(isCurrent)}>Slide 1</Link>
      <Link to='/slide-2' getProps={({isCurrent}) => isActiveLink(isCurrent)}>Slide 2</Link>
      <Link to='/slide-3' getProps={({isCurrent}) => isActiveLink(isCurrent)}>Slide 3</Link>
      <Link to='/slide-4' getProps={({isCurrent}) => isActiveLink(isCurrent)}>Slide 4</Link>
      <Link to='/slide-5' getProps={({isCurrent}) => isActiveLink(isCurrent)}>Slide 5</Link>
      <Link to='/slide-6' getProps={({isCurrent}) => isActiveLink(isCurrent)}>Slide 6</Link>
    </nav>

    <div>
      <Router primary>
        <Slide1 path='slide-1' />
        <Slide2 path='slide-2' />
        <Slide3 path='slide-3'/>
        <Slide4 path='slide-4' />
        <Slide5 path='slide-5' />
        <Slide6 path='slide-6' />
      </Router>

      <Router primary={false}>
        <SubSlideA path='/slide-1' />
        <SubSlideA path='/slide-2' />
        <SubSlideA path='/slide-3' />
        <SubSlideB path='/slide-4' />
        <SubSlideB path='/slide-5' />
        <SubSlideB path='/slide-6' />
      </Router>
    </div>
  </div>
)

function isActiveLink (isCurrent) {
  return {
    className: isCurrent ? 'active' : ''
  }
}

export default App
