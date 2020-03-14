import React, { Component } from 'react';
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
  Row,
} from 'reactstrap';
import states from './data/states';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

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
      value2: null,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  saveChanges = value => {
    this.setState({ value });
  }

  saveOptions = value2 => {
    this.setState({ value2 });
  }

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
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Jenis Identitas</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="select" name="select" id="select">
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Nama</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-nama" id="textarea-nama" rows="3"
                             placeholder="Nama Perusahaan" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Alamat</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-alamat" id="textarea-alamat" rows="3"
                             placeholder="Alamat Perusahaan" />
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
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Jenis Identitas</Label>
                    </Col>
                    <Col xs="6" md="6">
                      <Input type="select" name="select" id="select">
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Nama</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-nama" id="textarea-nama" rows="3"
                             placeholder="Nama Perusahaan" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Alamat</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-alamat" id="textarea-alamat" rows="3"
                             placeholder="Alamat Perusahaan" />
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
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="textarea-input">Nama</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="textarea" name="textarea-nama" id="textarea-nama" rows="3"
                                placeholder="Nama Perusahaan" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="textarea-input">Alamat</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="textarea" name="textarea-alamat" id="textarea-alamat" rows="3"
                                placeholder="Alamat Perusahaan" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label>Negara</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Select
                                name="select-negara"
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
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="textarea-input">Nama</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="textarea" name="textarea-nama" id="textarea-nama" rows="3"
                                placeholder="Nama Perusahaan" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="textarea-input">Alamat</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="textarea" name="textarea-alamat" id="textarea-alamat" rows="3"
                                placeholder="Alamat Perusahaan" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label>Negara</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Select
                                name="select-negara"
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
                <Button type="submit" color="primary" className="mr-1">Kirim Data Entitas</Button>
            </Col>
        </Row>
        <br />
        <Row>
            <Col xs="12" md="12">
                <Card>
                    <CardHeader>
                        <strong>Pemilik Barang</strong>
                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Identitas;
