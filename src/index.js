import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import SocialCard from './components/SocialCard'

const App = () => (
  <React.Fragment>
    <SocialCard email='email' />
  </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
