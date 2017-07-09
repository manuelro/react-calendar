import React, { Component } from 'react'

import Day from './Day'

const style = {}

export default class Week extends Component{
  render(){
    const days = this.props.weeks || []
    const dayItems = days.map( (day, index) => <Day key={index} day={day}/> )

    return (
      <div style={style}>{dayItems}</div>
    )
  }
}
