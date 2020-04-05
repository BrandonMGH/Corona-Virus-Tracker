import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.min.css';

//** COMPONENTS **//
import App from './src/app.js'

const Index = () => {
 return (
    <div>
        <App />
    </div>
 )
  
}

ReactDOM.render(<Index />, document.getElementById('root'))