import React, { Component } from 'react';
import CounterControl from './CounterControl'
import CounterOutput from './CounterOutput'
import {connect} from 'react-redux'

class Counter extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  return (
      <div>
        <CounterOutput counterLabel = {this.props.ctr} />
        <CounterControl title="increment +1" onButtonPush = {this.props.onIncrementCounter}   />
        <CounterControl title="decrement -1"/>
        <CounterControl title="increment by +5"/>
        <CounterControl title="decrement by -5"/>
      </div>
  )
  }
}

const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    ctr : state.counter,
    first: state.firstName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type :'INC_COUNTER'}),

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter)
