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
import "react-dates/lib/css/_datepicker.css";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";

ThemedStyleSheet.registerTheme({
  reactDates: {
    ...DefaultTheme.reactDates,
    color: {
      ...DefaultTheme.reactDates.color,
      highlighted: {
        backgroundColor: "#82E0AA",
        backgroundColor_active: "#58D68D",
        backgroundColor_hover: "#58D68D",
        color: "#186A3B",
        color_active: "#186A3B",
        color_hover: "#186A3B"
      }
    }
  }
});

class TabKemasan extends Component {
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
        <Button color="primary" onClick={this.toggleLarge} className="mr-1">
          <i className="fa fa-plus"></i>&nbsp; Tambah Kontainer
        </Button>
        <Modal
          isOpen={this.state.large}
          toggle={this.toggleLarge}
          className={"modal-lg " + this.props.className}
        >
          <ModalHeader toggle={this.toggleLarge}>
            Tambah Data Kontainer
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col xs="12" md="6">
                <FormGroup row>
                  <Label for="tipeKontainer" md="4">
                    Tipe Kontainer
                  </Label>
                  <Col xs="12" md="8">
                    <Input
                      type="select"
                      name="tipeKontainer"
                      id="tipeKontainer"
                    >
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
            No Kontainer
          </TableHeaderColumn>
          <TableHeaderColumn isKey dataField="email">
            Ukuran Kontainer
          </TableHeaderColumn>
          <TableHeaderColumn dataField="age" dataSort>
            Tipe Kontainer
          </TableHeaderColumn>
          <TableHeaderColumn dataField="city" dataSort>
            Jenis Kontainer
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default TabKemasan;
