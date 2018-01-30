import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './styles/bootstrap-reboot.css'

import SocialCard from './components/SocialCard'

const User = {
  personal: {
    name: 'Foo Bar',
    title: 'Bazz'
  },
  contact: {
    phone: '555-555-5555',
    fax: '555-555-5556',
    mobile: '555-555-5557'
  },
  address: {
    add1: '888 Fat st',
    add2: 'apt 888',
    city: 'New York',
    state: 'NY',
    zip: '10008'
  },
  www: {
    email: 'foo@bar.com',
    website: 'foobar.com'
  },
  social: [
    {
      network: 'facebook',
      link: 'https://facebook.com'
    },
    {
      network: 'twitter',
      link: 'https://twitter.com'
    }
  ]
}

const App = () => (
  <React.Fragment>
    <SocialCard user={User} />
  </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
