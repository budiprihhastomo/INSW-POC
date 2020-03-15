import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

export default class ModalBase extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
        <ModalBody>{this.props.children}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.onCancel}>
            {this.props.onCancelText}
          </Button>
          <Button color="primary" onClick={this.props.onOk}>
            {this.props.onOkText}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

ModalBase.defaultProps = {
  onOkText: "Simpan",
  onCancelText: "Batal"
};
