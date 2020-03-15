import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import data from "../../Tables/DataTable/_data";
import Modal from "../../../components/Modal/DataKemasan";
import TabKontainer from "./TabKontainer";

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
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <Fragment>
        <div className="animated">
          <Button color="primary" onClick={this.toggleLarge} className="mr-1">
            <i className="fa fa-plus"></i>&nbsp; Tambah Kemasan
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleLarge}
            className={"modal-lg " + this.props.className}
            title="Tambah Data Kemasan"
            onOk={this.toggleLarge}
            onCancel={this.toggleLarge}
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
              Kode Kemasan
            </TableHeaderColumn>
            <TableHeaderColumn isKey dataField="email">
              Jumlah Kemasan
            </TableHeaderColumn>
            <TableHeaderColumn dataField="city" dataSort>
              Merk Kemasan
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
        <TabKontainer />
      </Fragment>
    );
  }
}

export default TabKemasan;
