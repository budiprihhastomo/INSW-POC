import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row
} from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import data from "./_data";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.state = {
      modal: false,
      large: false
    };
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: false,
      withFirstAndLast: false
    };
  }

  // just an example
  nameFormat(cell, row) {
    const id = `/users/${row.id}`;
    return (
      <NavLink strict to={id}>
        {" "}
        {cell}{" "}
      </NavLink>
    );
  }

  toggleLarge = () => {
    this.setState({
      large: !this.state.large
    });
  };

  render() {
    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>
            <strong>Pemilik Barang </strong>
          </CardHeader>
          <CardBody>
            <Button color="primary" onClick={this.toggleLarge} className="mr-1">
              <i className="fa fa-plus"></i>&nbsp; Tambah
            </Button>
            <Modal
              isOpen={this.state.large}
              toggle={this.toggleLarge}
              className={"modal-lg " + this.props.className}
            >
              <ModalHeader toggle={this.toggleLarge}>
                Tambah Data Pemilik
              </ModalHeader>
              <ModalBody>
                <Row>
                  <Col xs="12" md="6">
                    <FormGroup row>
                      <Col md="4">
                        <Label>Jenis Identitas</Label>
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
                        <Label>No. Identitas</Label>
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
                        <Label>Nama</Label>
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
                        <Label>Alamat</Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input
                          type="textarea"
                          id="textarea-input"
                          name="textarea-input"
                          placeholder="Masukkan Alamat"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleLarge}>
                  Cancel
                </Button>
                <Button color="primary" onClick={this.toggleLarge}>
                  OK
                </Button>{" "}
              </ModalFooter>
            </Modal>
            <BootstrapTable
              data={this.table}
              version="4"
              striped
              hover
              pagination
              search
              options={this.options}
            >
              <TableHeaderColumn
                dataField="name"
                dataSort
                dataFormat={this.nameFormat}
              >
                Name
              </TableHeaderColumn>
              <TableHeaderColumn isKey dataField="email">
                Email
              </TableHeaderColumn>
              <TableHeaderColumn dataField="age" dataSort>
                Age
              </TableHeaderColumn>
              <TableHeaderColumn dataField="city" dataSort>
                City
              </TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
