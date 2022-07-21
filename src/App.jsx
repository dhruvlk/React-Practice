import React, { Component } from 'react'
import Main1 from './Components/Main1'
import Main2 from './Components/Main2'
import Main3 from './Components/Main3'
import Main4 from './Components/Main4'
import Main5 from './Components/Main5'

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

        <div>
          <Main2 />
        </div>

        <div>
          <h1>If condition</h1>
          <Main3 />
        </div>

        <div>
          <Main4 />
        </div>

        <div>
          <Main5 />
        </div>
      </>
    )
  }
}

export default App
