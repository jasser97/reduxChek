import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/actions";

const Counter = (props) => {
  return (
    <div>
      <h1> {props.count.counter}</h1>

      <button
        style={{
          fontSize: 30,
          width: 35,
        }}
        onClick={props.inc}
      >
        +
      </button>
      <button
        style={{
          fontSize: 30,
          width: 35,
        }}
        onClick={props.dec}
      >
        -
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.CounterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
