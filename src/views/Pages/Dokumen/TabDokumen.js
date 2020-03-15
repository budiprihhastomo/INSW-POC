import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import data from "../../Tables/DataTable/_data";
import Modal from "../../../components/Modal/DokumenPendukung";

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

class TabDokumen extends Component {
  constructor(props) {
    super(props);

    this.table = data.rows;
    this.state = {
      modal: false
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

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div className="animated">
        <Button color="primary" onClick={this.toggleModal} className="mr-1">
          <i className="fa fa-plus"></i>&nbsp; Tambah
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={"modal-lg " + this.props.className}
          onOk={this.toggleModal}
          onCancel={this.toggleModal}
          title="Tambah Dokumen Pendukung"
        />
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
