import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import DataTable from "../../Tables/DataTable/DataTable";
import states from "./data/states";
import Select from "react-select";
import "react-select/dist/react-select.min.css";

const options = states.US;

class Identitas extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      value: null,
      value2: null
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  saveChanges = value => {
    this.setState({ value });
  };

  saveOptions = value2 => {
    this.setState({ value2 });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Importir</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Label for="jenisIdentitasImportir" xs="12">
                      Jenis Identitas
                    </Label>
                    <Col sm="6" xs="12">
                      <Input
                        type="select"
                        name="jenisIdentitasImportir"
                        id="jenisIdentitasImportir"
                      >
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col sm="6" xs="12">
                      <Input
                        type="text"
                        id="noIdentitasImportir"
                        name="noIdentitasImportir"
                        placeholder="No. Identitas"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="namaPerusahaanImportir" sm="4" md="12">
                      Nama Perusahaan
                    </Label>
                    <Col sm="8" md="12">
                      <Input
                        type="textarea"
                        name="namaPerusahaanImportir"
                        id="namaPerusahaanImportir"
                        rows="3"
                        placeholder="Nama Perusahaan"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="namaAlamatPerusahaan" sm="4" md="12">
                      Alamat Perusahaan
                    </Label>
                    <Col sm="8" md="12">
                      <Input
                        type="textarea"
                        name="namaAlamatPerusahaan"
                        id="namaAlamatPerusahaan"
                        rows="3"
                        placeholder="Alamat Perusahaan"
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>NPWP Pemusatan</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Label for="jenisIdentitasNPWPPemusatan" xs="12">
                      Jenis Identitas
                    </Label>
                    <Col sm="6" xs="12">
                      <Input
                        type="select"
                        name="jenisIdentitasNPWPPemusatan"
                        id="jenisIdentitasNPWPPemusatan"
                      >
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col sm="6" xs="12">
                      <Input
                        type="text"
                        id="noIdentitasNPWPPemusatan"
                        name="noIdentitasNPWPPemusatan"
                        placeholder="No. Identitas"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="namaNPWPPemusatan" sm="4" md="12">
                      Nama Perusahaan
                    </Label>
                    <Col sm="8" md="12">
                      <Input
                        type="textarea"
                        name="namaNPWPPemusatan"
                        id="namaNPWPPemusatan"
                        rows="3"
                        placeholder="Nama Perusahaan"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="alamatNPWPPemusatan" sm="4" md="12">
                      Alamat Perusahaan
                    </Label>
                    <Col sm="8" md="12">
                      <Input
                        type="textarea"
                        name="alamatNPWPPemusatan"
                        id="alamatNPWPPemusatan"
                        rows="3"
                        placeholder="Alamat Perusahaan"
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Pengirim</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Label for="namaPengirim" md="3" xs="12">
                      Nama
                    </Label>
                    <Col md="9" xs="12">
                      <Input
                        type="textarea"
                        name="namaPengirim"
                        id="namaPengirim"
                        rows="3"
                        placeholder="Nama Pengirim"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="alamatPengirim" md="3" xs="12">
                      Alamat
                    </Label>
                    <Col md="9" xs="12">
                      <Input
                        type="textarea"
                        name="alamatPengirim"
                        id="alamatPengirim"
                        rows="3"
                        placeholder="Alamat Pengirim"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="negaraPengirim" md="3" sm="12">
                      Negara
                    </Label>
                    <Col md="9" xs="12">
                      <Select
                        name="negaraPengirim"
                        placeholder="Pilih Negara"
                        value={this.state.value}
                        options={options}
                        onChange={this.saveChanges}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Penjual</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Label for="namaPenjual" md="3" xs="12">
                      Nama
                    </Label>
                    <Col md="9" xs="12">
                      <Input
                        type="textarea"
                        name="namaPenjual"
                        id="namaPenjual"
                        rows="3"
                        placeholder="Nama Penjual"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="alamatPenjual" md="3" xs="12">
                      Alamat
                    </Label>
                    <Col md="9" xs="12">
                      <Input
                        type="textarea"
                        name="alamatPenjual"
                        id="alamatPenjual"
                        rows="3"
                        placeholder="Alamat Penjual"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="negaraPenjual" md="3" xs="12">
                      Negara
                    </Label>
                    <Col md="9" xs="12">
                      <Select
                        name="negaraPenjual"
                        placeholder="Pilih Negara"
                        value={this.state.value2}
                        options={options}
                        onChange={this.saveOptions}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <Button type="submit" color="primary" className="mr-1">
              <i className="fa fa-send"></i>&nbsp; Kirim Data Entitas
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs="12" md="12">
            <DataTable />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Identitas;
