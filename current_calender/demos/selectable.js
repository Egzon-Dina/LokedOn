import React, { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';

let Selectable = React.createClass({
  render(){
    return (
      <div>
        <BigCalendar
          selectable
          events={events}
          defaultView='week'
          defaultDate={new Date(2016, 1, 1)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        />
      </div>
    )
  }
})

export default Selectable;
