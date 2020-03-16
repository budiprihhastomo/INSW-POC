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
import DataTable from '../../Tables/DataTable/DataTable'
import states from './data/states';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

const options = states.US;

class Barang extends Component {
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
          <Col xs="12" md="6" lg="12">
            <Card>
              <CardHeader>
                <strong>Barang</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Pos Tarif</Label>
                    </Col>
                    <Col xs="6" md="6" lg="4">
                      <Input type="select" name="select" id="select">
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Kode Barang</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Uraian</Label>
                    </Col>
                    <Col xs="6" md="6" lg="4">
                      <Input type="textarea" name="textarea-nama" id="textarea-nama" rows="3"
                             placeholder="Nama Perusahaan" />
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Type</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Input type="textarea" id="text-input" name="text-input" placeholder="Text" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Merk</Label>
                    </Col>
                    <Col xs="6" md="6" lg="4">
                      <Input type="textarea" name="textarea-nama" id="textarea-nama" rows="3"
                             placeholder="Nama Perusahaan" />
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Spesifikasi Lain</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Input type="textarea" id="text-input" name="text-input" placeholder="Text" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Kondisi</Label>
                    </Col>
                    <Col xs="6" md="6" lg="4">
                      <Input type="select" name="select" id="select">
                          <option value="0">Barang Baru</option>
                          <option value="1">Bekas Pakai</option>
                        </Input>
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Negara Asal</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Input type="select" name="select" id="select">
                        <option value="0">Timor Leste</option>
                        <option value="1">Singapura</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <hr></hr>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Jumlah / Kode Satuan</Label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Harga FOB</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Label>NaN</Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Jumlah / Kode Kemasan</Label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Freight</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Label>NaN</Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Amount CIF (USD)</Label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Asuransi</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Label>NaN</Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>(Biaya Tambahan - Biaya Pengurangan)</Label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Label>0.00</Label>
                    </Col>
                    <Col md="3" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Harga CIF</Label>
                    </Col>
                    <Col xs="6" md="3" lg="4">
                      <Label>NaN</Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Label>Harga Satuan</Label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Label>NaN</Label>
                    </Col>
                    <Col md="3" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                      <Label>Berat Bersih</Label>
                    </Col>
                    <Col xs="6" md="3" lg="2">
                     <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col xs="6" md="3" lg="2">
                      <label>KG</label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                    </Col>
                    <Col xs="6" md="6" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                      <Label>CIF RP</Label>
                    </Col>
                    <Col xs="6" md="3" lg="2">
                      <label>NaN</label>
                    </Col>
                  </FormGroup>
                  <hr></hr>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Advalarum</option>
                      </Input>
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="3">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>BMAD</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                      <label class="custom-control-label" for="defaultUnchecked">BMADS</label>
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Advalarum</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="3">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>BMTP</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                      <label class="custom-control-label" for="defaultUnchecked">BMTPS</label>
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Advalarum</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="3">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>BMI</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                      <label class="custom-control-label" for="defaultUnchecked">BMIS</label>
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Advalarum</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="3">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>BMP</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                      <label class="custom-control-label" for="defaultUnchecked">BMPS</label>
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Advalarum</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="3">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>PPN</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="4">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>PPNBM</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="4">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>PPH</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col md="3" lg="4">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col xs="6" md="3" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>Cukai</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                      <label class="custom-control-label" for="defaultUnchecked">CUKAI</label>
                    </Col>
                    <Col md="3" lg="1">
                      <label>0</label>
                    </Col>
                    <Col md="3" lg="2">
                    </Col>
                    <Col md="3" lg="1">
                      <label>0</label>
                    </Col>
                    <Col xs="6" md="3" lg="2">
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" lg="2">
                      <label>Jenis Nilai</label>
                    </Col>
                    <Col xs="6" md="6" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">BM</option>
                      </Input>
                    </Col>
                    <Col md="3" lg="2">
                      <label>Nilai Tambah</label>
                    </Col>
                    <Col md="3" lg="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                    <Col md="3" lg="2">
                      <label>Jatuh Tempo</label>
                    </Col>
                    <Col xs="6" md="3" lg="2">
                      <Input type="date" id="text-input" name="text-input" placeholder="0.00" />
                    </Col>
                  </FormGroup>
                  </Form>
                </CardBody>
            </Card>
          </Col>
            <Col xs="12" md="6">
                <Button type="submit" color="primary" className="mr-1"><i className="fa fa-send"></i>&nbsp; Simpan Data</Button>
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

export default Barang;
