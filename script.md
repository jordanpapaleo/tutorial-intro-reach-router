# Tutorial Reach Router

## 0:00 Dummy slide walk through actual

### Slide 1 Welcome

### Slide 2 About

- semantics like I use `<dl>` and stuff
- I wont PR comment on sorting... usually
- Standard: the semicolons are missing! Lets be honest, no one is really missing them
- Typing, but be kind ;p
- snippets are a great to be consistent and quickly pop out a ton of boilerplate code
- Sugar... enough said

### Slide 3

- Im really glad you guys are here and interested in this.  You will do best if:
  - **HTML & CSS** is the foundation ot everything we do.
  - **ES6** our code will be using `const` `arrow functions` `import` statements and `object destructuring`
  - **react** explain

### Slide 4

### Slide 5

- More about Ryan Florence
- More about reach router

### Slide 6

- Time to get serious
- Hahahahahaha

## 3:40 CodeSandbox

- `Make sure everyone is able to access the link`
- Once you are there go ahead and fork this sandbox
- Overview of dependencies
- Explain src structure

### 5:30 Goal 1: Basic Routing [tree/one]

#### Router Component

1. Import the Router component from the reach/router package

```javascript
import { Router } from '@reach/router'
```

This is a react React components

- The `<Router />` component 
  - Look at URL
  - anaylzes it and ranks the [route](https://reach.tech/router/ranking)
  - intelligently determines what content it should render as its child

#### Implement router and path attributes

- Add the router component and put all content within it
  - Demo it not working... with the missing path error
- Add the `path` attributes
  - show it still not working but no error, ask why
- Then change the URL and show it finally working

#### Add

```javascript
import { Router, Link } from '@reach/router'
```

- The `<Link />` component allows us access to app navigation and render an anchor tag.
- **MAKE A PLAIN OLD LINK TAG**
- `Inspect the link and show it is an anchor tag`
- Add some paths and inspect again: show `to` becomes `href`

```javascript
<nav className='slide-navigation'>
  <Link to='/slide-1'>Slide 1</Link>
  <Link to='/slide-2'>Slide 2</Link>
  <Link to='/slide-3'>Slide 3</Link>
  <Link to='/slide-4'>Slide 4</Link>
  <Link to='/slide-5'>Slide 5</Link>
  <Link to='/slide-6'>Slide 6</Link>
</nav>
```

- **UPDATE CSS FLEX LAYOUT**

- Make sure I go over all the `to` props on the `<Link />` being matched to the Slide.props.path
- Do the nav without the css rule
  - Look in css "looks likes someone planned this"

- Demo all the links
- Whats wrong with this:
  - nav with no visual queue as to what the active link is

## 10:00 Goal 2: Active Links [tree/two]

To add a visual queue to a link being active we need to use a property that is available on the `<Link />` component.  `getProps` allows us to provide a function that can be used to set specific properties on the rendered anchor tag.

```javascript
getProps={(anchorProps) => ({
  className: anchorProps.isCurrent ? 'active' : ''
})}
```

```javascript
{
  isCurrent: true if the location.pathname is exactly the same as the anchor’s href.
  isPartiallyCurrent: true if the location.pathname starts with the anchor’s href.
  href: the fully resolved href of the link.
  location: the app’s location.
}
```

Add the attribute and log out anchorProps and explain

- show an example of adding a `data-attr` or something
- the one we are interested with is `isCurrent`
- use className to set css class and style with css
- `inspect`

- isActiveFunction: write it in Flow

## 19:00 Goal 3: Multiple routers on page [tree/three]

- Give a use case
  - Provide supporting information for specific cases
- Add the sub slides

```javascript
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

<Router primary={false}>
  <SubSlideA path='/slide-1' />
  <SubSlideA path='/slide-2' />
  <SubSlideA path='/slide-3' />
  <SubSlideB path='/slide-4' />
  <SubSlideB path='/slide-5' />
  <SubSlideB path='/slide-6' />
</Router>
```

- Talk about primary Router and the window focus.
- Then add the primary attributes 

## 22:00 Goal 4? Routing Extra Credit [tree/four]

### Default Route

- A default route is kind of the catch all when on other route can be applied
- Think something like a 404 or something
- We can establish this by placing the `default` prop on a component within the router

```javascript
<NotFound default />

const NotFound = () => <p>Sorry, nothing here</p>
```

- Demo a 404 route catch

### Route Params

- Why do we need route params
  - Think restful front end urls
  - Allows us to pull information out of the URL as pass it as a component prop

```javascript
<Link to={`/thankyou/${Date.now()}`} getProps={({isCurrent}) => isActiveLink(isCurrent)}>Thanks</Link>

<Thankyou path='/thankyou/:date' />

export const Thankyou = ({date}) => (
  <div className='class-section'>
    <h2>Thanks for sharing some of your {format(new Date(+date), 'dddd')} with me.</h2>

    <p><strong>Questions?</strong></p>

    <p>Next Steps:</p>

    <ul>
      <li>Look up the navigate method and think of how you could use this to communicate out a 500 error</li>
      <li>Setup nested routes</li>
      <li>Read about how paths are ranked by Reach</li>
      <li>Try implementing animations when the URL changes</li>
    </ul>
  </div>
)
```

## 28:00 Closing [tree/five]

- Thats it!
- Any questions?
- Thanks again and feel free to reach out with questions