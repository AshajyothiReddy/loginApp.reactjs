// Write your code here
import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          {isLoggedIn ? (
            <Message messageText="Wlecome User" />
          ) : (
            <Message messageText="Please Login" />
          )}
          {isLoggedIn && <Logout onClickButton={this.onClickButton} />}
          {!isLoggedIn && <Login onClickButton={this.onClickButton} />}
        </div>
      </div>
    )
  }
}

export default Home
