import React, { Component } from 'react'
import './Style.css'
// import { render } from 'react-dom'
import Main1 from './Main1'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'
import Main6 from './Main6'
import Main7 from './Main7'
import Main8 from './Main8'

// import Demo1 from './Demo1'
// import Demo2 from './Demo2'
// import Demo3 from './Demo3'

class AllBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React',
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo4: false,
      showHideDemo5: false,
      showHideDemo6: false,
      showHideDemo7: false,
      showHideDemo8: false,
      showHideDemo9: false,
    }
    this.hideComponent = this.hideComponent.bind(this)
  }

  hideComponent(name) {
    console.log(name)
    switch (name) {
      case 'showHideDemo1':
        this.setState({ showHideDemo1: !this.state.showHideDemo1 })
        break
      case 'showHideDemo2':
        this.setState({ showHideDemo2: !this.state.showHideDemo2 })
        break
      case 'showHideDemo3':
        this.setState({ showHideDemo3: !this.state.showHideDemo3 })
        break
      case 'showHideDemo4':
        this.setState({ showHideDemo4: !this.state.showHideDemo4 })
        break
      case 'showHideDemo5':
        this.setState({ showHideDemo5: !this.state.showHideDemo5 })
        break
      case 'showHideDemo6':
        this.setState({ showHideDemo6: !this.state.showHideDemo6 })
        break
      case 'showHideDemo7':
        this.setState({ showHideDemo7: !this.state.showHideDemo7 })
        break
      case 'showHideDemo8':
        this.setState({ showHideDemo8: !this.state.showHideDemo8 })
        break
      default:
      // null
    }
  }

  render() {
    const {
      showHideDemo1,
      showHideDemo2,
      showHideDemo3,
      showHideDemo4,
      showHideDemo5,
      showHideDemo6,
      showHideDemo7,
      showHideDemo8,
    } = this.state
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo1')}
          >
            Task 1
          </button>
          &nbsp;&nbsp;
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo2')}
          >
            Task 2
          </button>
          &nbsp;&nbsp;
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo3')}
          >
            Task 3
          </button>
          &nbsp;&nbsp;
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo4')}
          >
            Task 4
          </button>
          &nbsp;&nbsp;
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo5')}
          >
            Task 5
          </button>
          &nbsp;&nbsp;
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo6')}
          >
            Task 6
          </button>
          &nbsp;&nbsp;
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo7')}
          >
            Task 7
          </button>
          &nbsp;&nbsp;
          <button
            className='BtnStyle'
            onClick={() => this.hideComponent('showHideDemo8')}
          >
            Task 8
          </button>
        </div>
        {showHideDemo1 && <Main1 name={'Dhruv'} age={22} />}
        {showHideDemo2 && <Main2 />}
        {showHideDemo3 && <Main3 isLoggedIn={false} />}
        {showHideDemo4 && <Main4 />}
        {showHideDemo5 && <Main5 />}
        {showHideDemo6 && <Main6 />}
        {showHideDemo7 && <Main7 />}
        {showHideDemo8 && <Main8 />}
      </div>
    )
  }
}

export default AllBtn
