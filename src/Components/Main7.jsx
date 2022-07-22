import React, { Component } from 'react'

class Main7 extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }))
  }

  decrement() {
    this.setState((previousValue) => ({
      count: previousValue.count - 1,
    }))
  }

  render() {
    return (
      <>
        <h1>counter</h1>
        <div className='counter'>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </>
    )
  }
}

export default Main7
