import {useDispatch, useSelector} from "react-redux";
import {actionDec, actionInc, actionRnd, actionReset} from "../actions";


const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
      <div className="jumbotron">
        <h1>{counter}</h1>
        <button onClick={() => dispatch(actionDec())} className="btn btn-primary">DEC</button>
        <button onClick={() => dispatch(actionInc())} className="btn btn-primary">INC</button>
        <button onClick={() => dispatch(actionRnd())} className="btn btn-primary">RND</button>
        <button onClick={() => dispatch(actionReset())} className="btn btn-primary">RESET</button>
      </div>
    )
};

// const mapStateToProps = (state) => ({
//     counter: state.value,
// });

// export default connect(mapStateToProps, actions)(Counter);

export default Counter;