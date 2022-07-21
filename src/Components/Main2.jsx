import React, { Component } from 'react'

const list = [
  {
    id: 1,
    firstName: 'Robin',
    lastName: 'Wieruch',
    year: 1988,
  },

  {
    id: 2,
    firstName: 'Dave',
    lastName: 'Davidds',
    year: 1990,
  },
]

export default class Main2 extends Component {
  render() {
    return (
      <>
        <h1>List Of Employees</h1>
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <div>{item.id}</div>
              <div>{item.firstName}</div>
              <div>{item.lastName}</div>
              <div>{item.year}</div>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
