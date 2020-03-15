import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardHeader, CardBody } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import ModalDataPemilik from "../../../components/Modal/DataPemilik";
import "react-bootstrap-table/dist//react-bootstrap-table-all.min.css";
import data from "./_data";

class DataTable extends Component {
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

  toggleLarge = () => {
    this.setState({
      modal: !this.state.modal
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
            <ModalDataPemilik
              isOpen={this.state.modal}
              toggle={this.toggleLarge}
              className={"modal-md " + this.props.className}
              onOk={this.toggleLarge}
              onCancel={this.toggleLarge}
              title="Tambah Data Pemilik"
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
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
