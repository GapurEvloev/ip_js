import {connect} from "react-redux";
import * as actions from "../actions";


const Counter = ({counter, actionDec, actionInc, actionRnd, actionReset}) => (
  <div className="jumbotron">
    <h1>{counter}</h1>
    <button onClick={actionDec} className="btn btn-primary">DEC</button>
    <button onClick={actionInc} className="btn btn-primary">INC</button>
    <button onClick={actionRnd} className="btn btn-primary">RND</button>
    <button onClick={actionReset} className="btn btn-primary">RESET</button>
  </div>
);

const mapStateToProps = (state) => ({
    counter: state.value,
});

export default connect(mapStateToProps, actions)(Counter);