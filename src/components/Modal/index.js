import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactToPrint from 'react-to-print';

// import { Form } from '../Form';
import FocusTrap from 'focus-trap-react';
import Hashids from 'hashids';
var hashids = new Hashids('Anti Counterfeting System for Clothing Products')

var QRCode = require('qrcode.react');
// var hashids = new Hashids('Anti Counterfeting System for Clothing Products')
// const encryptid = hashids.encode(1,2)
// console.log(hashids.decode(encryptid))
// const decryptid = hashids.decode(encryptid)
var stringID,encryptid,numberID
function myFunction() {
  window.print()
}
function printDiv(divName) {
  
  window.print();
}
export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  forwardID,
  
}) => {
  
  const componentRef = useRef();
  
  return ReactDOM.createPortal(
    
    <FocusTrap>
     
      <aside
        tag="aside"
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        
        <div className="modal-area" ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            onClick={closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
          <div id="printableArea">
          <p id="section-to-print" align='center'><QRCode value={'https://0090bcd0612a.ngrok.io/?page=show&id=' + encryptid} /></p>
</div>
          
            {/* <Form onSubmit={onSubmit} /> */}
            <button onClick={printDiv('printableArea')} value="print a div!"> Print</button>
     
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
