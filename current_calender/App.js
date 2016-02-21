import React from 'react';
import Api from './Api';
import cn from 'classnames';
import { render } from 'react-dom';

import localizer from 'react-big-calendar/localizers/globalize';
import globalize from 'globalize';

localizer(globalize);

import 'react-big-calendar/less/styles.less';
import './styles.less';

const Example = React.createClass({
  getInitialState(){
    return {
      selected: 'basic'
    };
  },

  render() {
    let selected = this.state.selected;
    let Current = {
      basic: require('./demos/basic'),
      selectable: require('./demos/selectable'),
      cultures: require('./demos/cultures'),
      popup: require('./demos/popup'),
      rendering: require('./demos/rendering')
    }[selected];

    return (
      <div className='app'>
        <div className='examples contain'>
          <aside>
            <ul className='nav nav-pills nav-stacked'>
              <li className={cn({active: selected === 'basic' })}>
                <a href='#' onClick={this.select.bind(null, 'basic')}>APPOINTMENTS</a>
              </li>
              <li className={cn({active: selected === 'selectable' })}>
                <a href='#' onClick={this.select.bind(null, 'selectable')}>TASK</a>
              </li>
              <li className={cn({active: selected === 'cultures' })}>
                <a href='#' onClick={this.select.bind(null, 'cultures')}>OUTSTANDING TASKS</a>
              </li>
              <li className={cn({active: selected === 'rendering' })}>
                <a href='#' onClick={this.select.bind(null, 'rendering')}>COMPLETED TASKS</a>
              </li>
            </ul>
          </aside>
          <div className='example'>
            <div  style={{ marginBottom: 15 }}>
            </div>
            <Current />
          </div>
        </div>
      </div>
    );
  },

  select(selected, e){
    e.preventDefault();
    this.setState({ selected })
  }
});

render(<Example/>, document.getElementById('root'));
