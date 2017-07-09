import React, { Component } from 'react'
import Formsy from 'formsy-react'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

import TextInput from './TextInput'

const moment = extendMoment(Moment)
function obtainMonths (){
  const start = new Date(2017, 15, 5)
  const end = new Date()

  const range = moment.range(start, end)

  const years = Array.from(range.by('year'))
  const months = Array.from(range.by('month'))
}

const validations = {
  required: 'This field is required'
}

export default class Toolbar extends Component {
  state = {}

  handleOnChange = ({currentTarget}) => {
    this.props.updateState(currentTarget.name, currentTarget.value)
  }

  render(){
    return (
      <Formsy.Form
        onValid={this.handleOnValid}
        onValidSubmit={this.handleOnValidSubmit}
        onInvalid={this.handleOnInvalid}
        onInvalidSubmit={this.handleOnInvalidSubmit}
      >
        <TextInput name="date" onChange={this.handleOnChange} value={this.props.date} required type="date"/>
        <TextInput name="days" onChange={this.handleOnChange} value={this.props.days} required type="number" min={0} placeholder="Number of days"/>
        <TextInput name="country" onChange={this.handleOnChange} value={this.props.country} required type="text" placeholder="Country Code (i.e. US)"/>
        <button type="submit">Update</button>
      </Formsy.Form>
    )
  }
}
