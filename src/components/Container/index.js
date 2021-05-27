import React, { Component } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';
import Hashids from 'hashids';
var hashids = new Hashids('Anti Counterfeting System for Clothing Products')

export class Container extends Component {
  state = { isShown: false };
  showModal = () => {
    console.log("1")
    this.setState({ isShown: true }, () => {
      
      var stringID = this.props.forwardID.toString()
      var numberID = Number(stringID)
      var encryptid = hashids.encode(numberID)
      console.log("encrypt id", encryptid.toString())
      var a = encryptid.toString()
        // this.props.forwardID = a
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>
        <TriggerButton
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerText={this.props.triggerText}
          forwardID={this.props.forwardID}
        />
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            forwardID={this.props.forwardID}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;
