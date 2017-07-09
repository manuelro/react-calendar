import React, { Component } from 'react'

import Day from './Day'

const style = {
  display: "block",
  overflow: "hidden",
}

function getDays(){
  // Add logic here

  return [1, 2, 3, 4, 5, 6, 7]
}

export default class Week extends Component{
  render(){
    const days = getDays()
    const dayItems = days.map( (day, index) => <Day key={index} day={day}/> )
    console.log(dayItems);
    return (
      <div style={style}>{dayItems}</div>
    )
  }
}
