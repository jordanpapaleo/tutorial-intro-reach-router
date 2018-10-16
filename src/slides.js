import React from 'react'
import {format} from 'date-fns'
import {navigate} from '@reach/router'

export const NotFound = () => (
  <div className='class-section'>
    <h2>Something's Missing</h2>
    <p>This route you are looking for seems to have wandered off.</p>
    <p>We'll let someone its missing, but while we look maybe you should head on back</p>
  </div>
)

export const Slide1 = () => (
  <div className='class-section title-block'>
    <h1>Introduction to Reach Router</h1>

    <p>
      Jordan Papaleo <br />
      Coder && Sharer of Code 
    </p>
  </div>
)

export const Slide2 = () => (
  <div className='class-section'>
    <h2>About Me</h2>

    <ul>
      <li>I am a <em>stickler</em> for HTML semantics</li>
      <li>I am maybe OCD when it comes to alpha sorting just about <strong>anything</strong></li>
      <li>All of my code follows the <a target='_blank' href='https://standardjs.com'>JavaScript Standard Style</a></li>
      <li>I cannot type if someone is watching, so <em>when</em> I make a typo, please let me know</li>
      <li>Per above, I love using snippets when I code (I will gladly share any of my snippets during a break)</li>
      <li>I don't trust sugar</li>
    </ul>
  </div>
)

export const Slide3 = () => (
  <div className='class-section'>
    <h2>How to win this session</h2>

    <p>You will benefit the most in this session if:</p>

    <ul>
      <li>You hands down know HTML and CSS</li>
      <li>You can easily read and write JavaScript using ES6+</li>
      <li>You have experience with React</li>
      <li>You appreciate a good mustache</li>
    </ul>
  </div>
)

export const Slide4 = () => (
  <div className='class-section'>
    <h2>Goals</h2>

    <p>In the next 30 minutes I would like to introduce you to the Reach Router for React</p>

    <p>We will learn how to:</p>

    <ol>
      <li>setup basic routes with navigation</li>
      <li>display active links</li>
      <li>implement multiple routers on page</li>
    </ol>
  </div>
)

export const Slide5 = () => (
  <div className='class-section'>
    <h2>
      <a target='_blank' href='https://github.com/reach/router'>Reach Router</a>
    </h2>

    <p>
      A new-ish router by Ryan Florence (react-router) that puts a lot of focus
      on the accessible web.
    </p>

    <p>I know, it's almost 2019, here is <em>another</em> new shiny thing, can't we just pick one.</p>
    <p>Remember the React library is a render engine. It is not opinionated in how we manage state, make api calls, or navigate an app.</p>
    <p>We have to make the decision on what to use and what not to use.<br /><strong>Freedom is good!</strong></p>
  </div>
)

export const Slide6 = () => (
  <div className='class-section'>
    <h2>Setup</h2>

    <ol>
      <li>Open up your terminal</li>
      <li>Create a new project with Create React App</li>
      <li>npm install @reach/router</li>
      <li>Actually scratch that, there are too many cards here and I think we should clean this up before we get into routing</li>
      <li>Let's figure out a way we can easily <em>navigate</em> all this information</li>
      <li>Go to the <a href='https://codesandbox.io/s/github/jordanpapaleo/tutorial-intro-reach-router/tree/one' target='_blank'><strong>Coolest Sandbox EVER</strong></a></li>
    </ol>
  </div>
)

export const SubSlideA = () => (
  <div className='class-section sub-slide'>
    <h2>Fun stuff</h2>
  </div>
)

export const SubSlideB = () => (
  <div className='class-section sub-slide'>
    <h2>Important stuff</h2>
  </div>
)

export const Thankyou = ({date}) => (
  <div className='class-section'>
    <h2>Thanks for sharing some of your {format(new Date(+date), 'dddd')} with me</h2>

    <p><strong>Questions?</strong></p>

    <p>Next Steps:</p>

    <ul>
      <li>Investigate the <em>navigate</em> method and think of how you could use this to communicate out a 500 error</li>
      <li>Read about how paths are ranked by Reach</li>
      <li>Read about nested routes</li>
      <li>Try implementing animations when the URL changes</li>
    </ul>
  </div>
)
