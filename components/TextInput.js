import React, { Component } from 'react'

const styles = {
  input: {
    padding: '0.3em 0.5em',
    minHeight: '1.5em',
    minWidth: '20em',
    margin: '0.2em',
    borderRadius: '5px',
    border: 'solid silver 1px'
  }
}

export default class TextInput extends Component {
  render(){
    return (
      <div>
        <input style={styles.input} {...this.props}/>
      </div>
    )
  }
}
