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

class TabPungutan extends Component {
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

                <Button type="submit" color="primary" className="mr-1">
                    <i className="fa fa-send"></i>&nbsp; Kirim Data Dokumen
                    </Button>
            </div>
        );
    }
}

export default TabPungutan;
