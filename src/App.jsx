import React, { Component } from 'react'
import Main1 from './Components/Main1'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <>
        <center>
          <h1>React Practice</h1>
        </center>
        <div>
          <Main1 name={'Dhruv'} age={22} />
        </div>
      </>
    )
  }
}

export default App
