import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Moment from 'moment'
import store from 'store'

import Toolbar from './Toolbar'
import Year from './Year'
import ErrorMessage from './ErrorMessage'

/*
  Initializes the holidays namespace in localStorage
  to avoid further calls to the server use the data
  in this namespace.

  Holidays are not mutable data over time, therefore
  we can use a stable mechanism to store it
*/
function initLocalStorageNamespace(){
  if (!store.get('holidays')) store.set('holidays', {})
}

/*
  This function will save holidays on a yearly basis,
  that is 2016, 2017 and so on. Year number will behave
  as a sub-namespace
*/
function saveHolidaysToLocalStorage(year, holidays){
  const namespace = store.get('holidays')
  if (!namespace) initLocalStorageNamespace()
  namespace[year] = holidays;
  store.set('holidays', namespace)
}

/*
  Holidays stored in localStorage have a higher priority
  in order to avoid a second request to the server
*/
function getHolidaysFromLocalStorage(year){
  const namespace = store.get('holidays') || {}
  return namespace[year]
}

/*
  This callback is going to be called once we attempt to
  change the params (via the toolbar)
*/
function loadHolidaysCallback(error, year, holidays){
  if (error) return this.setState({ error })
  initLocalStorageNamespace()
  saveHolidaysToLocalStorage(year, holidays)
  this.setState({ holidays })
}

/*
  This function serves as a coordinator function that will
  basically check out if there is data in localStorage,
  and if not then proceed with the request to the API
*/
function loadHolidays(cb){
  const key = '19ade6e6-a2b3-4450-a25c-ad64072ca1ee'
  const country = this.state.country || 'US'
  const year = Moment(this.state.date).format('YYYY') || 2017
  const endpoint = `https://holidayapi.com/v1/holidays?key=${key}&country=${country}&year=${year}`
  const holidaysFromLocalStorage = getHolidaysFromLocalStorage(year)

  // Use the callback pattern to avoid repetition
  if(holidaysFromLocalStorage) {
    cb.call(this, null, year, holidaysFromLocalStorage)
  } else {
    fetch(endpoint)
      .then(res => {
        if (res.status >= 400) throw new Error("Bad response from server")
        return res.json()
      })
      .then(res => cb.call(this, null, year, res.holidays))
      .catch(e => cb.call(this, e))
  }
}

/*
  This function will be passed down the components tree,
  more exactly to the toolbar component. The toolbar component
  will handle any mutation in the shared state
*/
function updateState(key, value){
  this.setState({ [key]: value })
}

/*
  This function will get the years from a starting point.
  It will always return n + 1, because it's a range,
  if the length of the returned array is equal to one,
  use the current year, if not, use the current year
  plus the years in the range
*/
function getYears(date){
  return [2017, 2018] // This should return a years array with Moment.js year structure
}

export default class CalendarApp extends Component {
  state = {
    date: Moment(new Date()).format('YYYY-MM-DD'),
    days: 10,
    country: 'US',
    months: [],
  }

  componentDidMount(){
    loadHolidays.call(this, loadHolidaysCallback)
  }

  render(){
    const years = getYears(this.state.date) || []
    const yearItems = years.map((year, index) => <Year key={index} year={year} {...this.state}/>)

    return (
      <div>
        <Toolbar {...this.state} updateState={updateState.bind(this)}/>
        {this.state.error ? <ErrorMessage error={this.state.error}/> : null}
        {yearItems}
      </div>
    )
  }
}
