import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Typography from 'typography'
import SternGrove from 'typography-theme-stern-grove'

const typography = new Typography(SternGrove)
typography.injectStyles()  

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
