import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function cancelHandler() {
    setModalIsOpen(false);
  }

  function confirmHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal closeModal={cancelHandler} confirmModal={confirmHandler} />
      )}
      {modalIsOpen && <Backdrop closeModal={cancelHandler} />}
    </div>
  );
}

export default Todo;
