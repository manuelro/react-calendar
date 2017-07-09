import React, { Component } from 'react'

const style = {
  width: "25px",
  lineHeight: "25px",
  textAlign: "center",
  float: "left",
  backgroundColor: "#C8DA96",
  border: "solid 1px white",
}

/*
  Inside this component make sure to create an interface segregation
  depending on the type of day (holiday, weekend day, weekday, invalid day),
  and style acordingly
*/

export default class Day extends Component{
  render(){
    return <div style={style}>{this.props.day}</div>
  }
}
