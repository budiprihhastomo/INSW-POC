import React, { Component } from "react";
import { Col, Row, Input, FormGroup, Label } from "reactstrap";
import Modal from "./Modal.base";

export default class DataKemasan extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <Col xs="12">
          <Row>
            <Col xs="12" md="10">
              <FormGroup row>
                <Label for="select-kode-kemasan" md="4">
                  Kode Kemasan
                </Label>
                <Col xs="12" md="8">
                  <Input
                    type="select"
                    name="select-kode-kemasan"
                    id="select-kode-kemasan"
                  >
                    <option value="0">NPWP 15 Digit</option>
                    <option value="1">KTP</option>
                    <option value="2">NPWP 12 Digit</option>
                    <option value="3">Lainnya</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12" md="10">
              <FormGroup row>
                <Label for="jumlahKemasan" md="4">
                  Jumlah Kemasan
                </Label>
                <Col xs="12" md="8">
                  <Input
                    type="number"
                    id="jumlahKemasan"
                    name="jumlahKemasan"
                    placeholder="Jumlah Kemasan"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12" md="10">
              <FormGroup row>
                <Label for="merkKemasan" md="4">
                  Merk Kemasan
                </Label>
                <Col xs="12" md="8">
                  <Input
                    type="text"
                    id="merkKemasan"
                    name="merkKemasan"
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
