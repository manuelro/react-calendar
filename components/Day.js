import React, { Component } from 'react'

const styles = {
  width: 100 / 7 + "%",
  paddingTop: "100%",
}

export default class Day extends Component{
  render(){
    return <div styles={styles}>{this.props.number}</div>
  }
}
