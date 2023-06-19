// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: false}

  subscribe = () => {
    this.setState({isLoggedIn: true})
  }

  subscribed = () => {
    this.setState({isLoggedIn: false})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you happy learning</p>
        {isLoggedIn && (
          <button type="button" onClick={this.subscribed}>
            Subscribed
          </button>
        )}
        {!isLoggedIn && (
          <button type="button" onClick={this.subscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
