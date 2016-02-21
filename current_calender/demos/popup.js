import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
let Popup = React.createClass({
  render(){
    return (
      <div>
        <BigCalendar
          popup
          events={events}
          defaultDate={new Date(2016, 1, 1)}
        />
      </div>
    )
  }
})

export default Popup;
