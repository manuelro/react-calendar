import React, { Component } from 'react'

import Week from './Week'

export default class Month extends Component{
  render(){
    const weeks = this.props.weeks || []
    weekItems = weeks.map( (week, index) => <Week key={index} week={week} /> )

    return (
      <div>
        {weekItems}
      </div>
    )
  }
}
