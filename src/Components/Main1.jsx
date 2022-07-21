import React, { Component } from 'react'

export default class Main1 extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React',
    }
  }
  render() {
    const { name, age } = this.props
    return (
      <>
        <h1>Name And Age As Props</h1>
        <div>
          <table>
            <tr>
              <td>Name is : {name}</td>
            </tr>
            <tr>
              <td>Age is : {age}</td>
            </tr>
          </table>
        </div>
      </>
    )
  }
}
