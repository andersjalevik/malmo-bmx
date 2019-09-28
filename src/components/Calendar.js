
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { hidden } from 'ansi-colors'

class Calendar extends React.Component {
  render() {
    const { data } = this.props

    return (
      <div style={{backgroundColor: 'red', width: '100%'}}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FStockholm&amp;src=bWFsbW9ibXhyYWNpbmdAZ21haWwuY29t&amp;color=%237986CB&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA" 
          frameborder="0"
          scrolling="no"
          style={{borderWidth:0, width: '100%', minHeight: '500px', overflowY: hidden}}
        ></iframe>
      </div>
    )
  }
}
// Calendar.propTypes = {}

export default Calendar