import React, { Component } from "react";
import { Col, Row, Input, FormGroup, Label, Button } from "reactstrap";
import Modal from "./Modal.base";

export default class DataPemilik extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <Col xs="12">
          <Row>
            <Col xs="12">
              <FormGroup row>
                <Label for="jenisIdentitas" xs="12">
                  Jenis Identitas
                </Label>
                <Col xs="12">
                  <Input
                    type="select"
                    name="jenisIdentitas"
                    id="jenisIdentitas"
                  >
                    <option value="0">NPWP 15 Digit</option>
                    <option value="1">KTP</option>
                    <option value="2">NPWP 12 Digit</option>
                    <option value="3">Lainnya</option>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup row>
                <Label for="noIdentitas" xs="12">
                  No. Identitas
                </Label>
                <Col xs="12">
                  <Input
                    type="text"
                    id="noIdentitas"
                    name="noIdentitas"
                    placeholder="Nomor Identitas"
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <FormGroup row>
                <Label for="namaPemilik" xs="12">
                  Nama Pemilik
                </Label>
                <Col xs="12">
                  <Input
                    type="text"
                    id="namaPemilik"
                    name="namaPemilik"
                    placeholder="Masukkan Nama Pemilik"
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup row>
                <Label for="alamatPemilik" xs="12">
                  Alamat
                </Label>
                <Col xs="12">
                  <Input
                    type="textarea"
                    id="textarea-input"
                    name="textarea-input"
                    placeholder="Masukkan Alamat Pemilik"
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
