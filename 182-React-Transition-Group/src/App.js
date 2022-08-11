import { useState } from "react";
import { Container } from "react-bootstrap";
import Transition from "react-transition-group/Transition";
import "./App.css";

const Modal = (props) => {
  const duration = 300;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    transform: "translateY(200px)",
    visibility: 'hidden',
  };

  const transitionStyles = {
    entering: { opacity: 1, visibility: 'visible', transform: "translateY(0)", },
    entered: { opacity: 1, visibility: 'visible', transform: "translateY(0)", },
    exiting: { opacity: 0, visibility: 'hidden', transform: "translateY(200px)", },
    exited: { opacity: 0, visibility: 'hidden', transform: "translateY(200px)", },
  };

  return (
    <Transition 
      in={props.show}
      timeout={duration}
      // unmountOnExit
      onEnter={() => props.setShowTrigger(false)}
      onExited={() => props.setShowTrigger(true)}
    >
      {(state) => (
        <div 
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          className="modal mt-5 d-block"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Typical modal window</h5>
                <button
                  onClick={() => props.onClose(false)}
                  type="button"
                  className="btn-close"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Modal body content</p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => props.onClose(false)}
                  type="button"
                  className="btn btn-secondary">
                  Close
                </button>
                <button
                  onClick={() => props.onClose(false)}
                  type="button"
                  className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
           </div>
        </div>
      )}
    </Transition>
  );
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);

  return (
    <Container>
      <Modal onClose={setShowModal} show={showModal} setShowTrigger={setShowTrigger} />
      {
        showTrigger ? <button type="button" className="btn btn-warning mt-5" onClick={() => setShowModal(true)}>
          Open Modal
        </button> : null
      }
    </Container>
  );
}

export default App;
