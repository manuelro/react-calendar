import React, { Component } from 'react'

import MonthLabel from './MonthLabel'
import Week from './Week'

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '0.5em',
}

/*
  This function will get the weeks using Moment.js,
  starting from the given date and ending up in today's date
*/
function getWeeks(date){
  // Add logic here

  return [1, 2, 3, 4]
}

export default class Month extends Component{
  render(){
    const weeks = getWeeks()
    const weekItems = weeks.map( (week, index) => <Week key={index} week={week} /> )

    return (
      <div style={style}>
        <MonthLabel month={this.props.month} />
        <div>{weekItems}</div>
      </div>
    )
  }
}
