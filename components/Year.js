import React, { Component } from 'react'

import Month from './Month'

export default class Calendar extends Component {
  render(){
    const months = this.props.months || []
    const monthItems = months.map( (month, index) => <Month index={index} month={month}/> )

    console.log(this)

    return (
      <div>
        This is a year
        {monthItems}
      </div>
    )
  }
}
