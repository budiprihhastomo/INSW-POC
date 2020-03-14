import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
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
import data from "../../Tables/DataTable/_data";

// React DatePicker
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerTheme({
    reactDates: {
      ...DefaultTheme.reactDates,
      color: {
        ...DefaultTheme.reactDates.color,
        highlighted: {
          backgroundColor: '#82E0AA',
          backgroundColor_active: '#58D68D',
          backgroundColor_hover: '#58D68D',
          color: '#186A3B',
          color_active: '#186A3B',
          color_hover: '#186A3B',
        },
      },
    },
  });

class TabDokumen extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.state = {
      modal: false,
      large: false,
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
        <Button color="primary" onClick={this.toggleLarge} className="mr-1">
          <i className="fa fa-plus"></i>&nbsp; Tambah
        </Button>
        <Modal
          isOpen={this.state.large}
          toggle={this.toggleLarge}
          className={"modal-lg " + this.props.className}
        >
          <ModalHeader toggle={this.toggleLarge}>
            Tambah Dokumen Pendukung
          </ModalHeader>
          <ModalBody>
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
                    <SingleDatePicker
                      date={this.state.date} // momentPropTypes.momentObj or null
                      onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                      focused={this.state.focused} // PropTypes.bool
                      onFocusChange={({ focused }) =>
                        this.setState({ focused })
                      } // PropTypes.func.isRequired
                      id="date" // PropTypes.string.isRequired,
                    />
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
      </div>
    );
  }
}

export default TabDokumen;
