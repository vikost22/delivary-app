import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../../redux/features/modalSlice";

export default function Modal() {
  const { modalIsOpen, modalContent } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  function closeModal(event) {
    if (!event.target.closest(".modal") || event.target.closest(".close-btn")) {
      dispatch(toggleState());
    }
  }
  return (
    <div
      className={`${modalIsOpen ? "modal-wrap--active" : ""} modal-wrap`}
      onClick={closeModal}
    >
      <div className="modal">
        <h5 className="modal__header">{modalContent.title}</h5>
        {modalContent.closeButton && (
          <button className="close-btn">
            <span></span>
            <span></span>
          </button>
        )}
        <div className="modal__body">
          <div className={"modal__text"}>{modalContent.text}</div>
          <div className="modal__actions">{modalContent.actions}</div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  actions: PropTypes.array,
  closeButton: PropTypes.bool,
  modalIsOpen: PropTypes.bool,
  onCloseClick: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
};
