import React, { Component } from 'react'

import Month from './Month'

/*
  This function will get the months using Moment.js,
  starting from the given date and ending up in today's date
*/
function getMonths(date){
  // Add logic here

  return [1, 2, 3]
}

export default class Calendar extends Component {
  render(){
    const months = getMonths()
    const monthItems = months.map( (month, index) => <Month key={index} month={month}/> )

    return (
      <div>
        Year {this.props.year}
        {monthItems}
      </div>
    )
  }
}
