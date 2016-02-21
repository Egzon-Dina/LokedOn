import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';

require('globalize/lib/cultures/globalize.culture.en-GB');
require('globalize/lib/cultures/globalize.culture.es');
require('globalize/lib/cultures/globalize.culture.fr');
require('globalize/lib/cultures/globalize.culture.ar-AE');

let Cultures = React.createClass({

  getInitialState(){
    return { culture: 'en' }
  },

  render(){
    let cultures = ['en']
    let rtl = this.state.culture === 'ar-AE';

    return (
      <div>
        <h3 style={{ marginBottom: 20 }}>
          <label></label>
          {' '}
          
        </h3>
        <BigCalendar
          rtl={rtl}
          events={events}
          culture={this.state.culture}
          defaultDate={new Date(2016, 1, 1)}
        />
      </div>
    )
  }
})

export default Cultures;
