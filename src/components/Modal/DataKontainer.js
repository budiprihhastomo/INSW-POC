import React, { Component } from "react";
import { Col, Row, Input, FormGroup, Label } from "reactstrap";
import Modal from "./Modal.base";

export default class DataKontainer extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <Col xs="12">
          <Row>
            <Col xs="12" md="6">
              <FormGroup row>
                <Label for="tipeKontainer" md="4">
                  Tipe Kontainer
                </Label>
                <Col xs="12" md="8">
                  <Input type="select" name="tipeKontainer" id="tipeKontainer">
                    <option value="0">NPWP 15 Digit</option>
                    <option value="1">KTP</option>
                    <option value="2">NPWP 12 Digit</option>
                    <option value="3">Lainnya</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12" md="6">
              <FormGroup row>
                <Label for="ukuranKontainer" md="4">
                  Ukuran Kontainer
                </Label>
                <Col xs="12" md="8">
                  <Input
                    type="select"
                    name="ukuranKontainer"
                    id="ukuranKontainer"
                  >
                    <option value="0">20-20 FEET</option>
                    <option value="1">40-40 FEET</option>
                    <option value="2">45-45 FEET</option>
                    <option value="2">60-60 FEET</option>
                    <option value="3">Lainnya</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12" md="6">
              <FormGroup row>
                <Label for="jenisKontainer" md="4">
                  Jenis Kontainer
                </Label>
                <Col xs="12" md="8">
                  <Input
                    type="select"
                    name="jenisKontainer"
                    id="jenisKontainer"
                  >
                    <option value="0">4 - EMPTY</option>
                    <option value="1">8 - FCL</option>
                    <option value="2">7 - LCL</option>
                    <option value="3">Lainnya</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12" md="6">
              <FormGroup row>
                <Label for="noKontainer" md="4">
                  No Kontainer
                </Label>
                <Col xs="12" md="8">
                  <Input
                    type="text"
                    id="noKontainer"
                    name="noKontainer"
                    placeholder="Nomor Identitas"
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Modal>
    );
  }
}
