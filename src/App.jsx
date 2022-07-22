import React, { Component } from 'react'
import AllBtn from './Components/AllBtn'
// import Main1 from './Components/Main1'
// import Main2 from './Components/Main2'
// import Main3 from './Components/Main3'
// import Main4 from './Components/Main4'
// import Main5 from './Components/Main5'
// import Main6 from './Components/Main6'
// import Main7 from './Components/Main7'
// import Main8 from './Components/Main8'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <center>
          <h1>React Practice</h1>
        </center>

        <div>
          <AllBtn />
        </div>
        {/* <div>
          <Main1 name={'Dhruv'} age={22} />
        </div> */}

        {/* <div>
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

        <div>
          <Main6 />
        </div>

        <div>
          <Main7 />
        </div>

        <div>
          <Main8 />
        </div> */}
      </>
    )
  }
}

export default App
