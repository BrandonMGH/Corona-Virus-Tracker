import React from 'react'
import ReactDOM from 'react-dom'

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