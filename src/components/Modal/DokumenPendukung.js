import React, { Component } from "react";
import { Col, Row, Input, FormGroup, Label } from "reactstrap";
import Modal from "./Modal.base";

export default class DokumenPendukung extends Component {
  state = {
    focused: false,
    date: "10-11-2020"
  };

  render() {
    return (
      <Modal {...this.props}>
        <Row>
          <Col xs="12" md="6">
            <FormGroup row>
              <Col md="4">
                <Label>Kode Dokumen</Label>
              </Col>
              <Col xs="12" md="8">
                <Input type="select" name="select" id="select">
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
              <Col md="4">
                <Label>No. Dokumen</Label>
              </Col>
              <Col xs="12" md="8">
                <Input
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="Nomor Identitas"
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <FormGroup row>
              <Col md="4">
                <Label>Kode Fasilitas</Label>
              </Col>
              <Col xs="12" md="8">
                <Input
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="Masukkan Nama"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup row>
              <Col md="4">
                <Label>Tanggal Dokumen</Label>
              </Col>
              <Col xs="12" md="8">
                {/* Taruh Disini Date nya :) */}
              </Col>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup row>
              <Col md="4">
                <Label>File Lampiran</Label>
              </Col>
              <Col xs="12" md="8">
                <Input
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="Nomor Identitas"
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </Modal>
    );
  }
}
