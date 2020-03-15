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
              <Label for="select-dokumen" md="4">
                Kode Dokumen
              </Label>
              <Col xs="12" md="8">
                <Input type="select" name="select-dokumen" id="select-dokumen">
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
              <Label for="noIdentitas" md="4">
                No. Dokumen
              </Label>
              <Col xs="12" md="8">
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
          <Col xs="12" md="6">
            <FormGroup row>
              <Label for="kodeFasilitas" md="4">
                Kode Fasilitas
              </Label>
              <Col xs="12" md="8">
                <Input
                  type="text"
                  id="kodeFasilitas"
                  name="kodeFasilitas"
                  placeholder="Masukkan Nama"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup row>
              <Label for="tglDokumen" md="4">
                Tanggal Dokumen
              </Label>
              <Col xs="12" md="8">
                {/* Taruh Disini Date nya :) */}
              </Col>
            </FormGroup>
          </Col>
          <Col xs="12" md="6">
            <FormGroup row>
              <Label for="fileLampiran" md="4">
                File Lampiran
              </Label>
              <Col xs="12" md="8">
                <Input
                  type="text"
                  id="fileLampiran"
                  name="fileLampiran"
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
