import React from "react";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import states from "./data/states";
import Select from "react-select";
import "react-select/dist/react-select.min.css";

import { _PelabuhanTujuan } from "../../../action/BC2.0/tabHeader";

const options = states.US;
const options2 = states.AU;
const { kodeBayar } = states;

const validationSchema = function(values) {
  return Yup.object().shape({
    pelabuhanTujuan: Yup.string().required("Pilih Pelabuhan Tujuan!"),
    firstName: Yup.string()
      .min(2, `First name has to be at least 2 characters`)
      .required("First name is required"),
    lastName: Yup.string()
      .min(1, `Last name has to be at least 1 character`)
      .required("Last name is required"),
    userName: Yup.string()
      .min(5, `Username has to be at least 5 characters`)
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, `Password has to be at least ${6} characters!`)
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        "Password must contain: numbers, uppercase and lowercase letters\n"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([values.password], "Passwords must match")
      .required("Password confirmation is required"),
    accept: Yup.bool()
      .required("* required")
      .test(
        "accept",
        "You have to accept our Terms and Conditions!",
        value => value === true
      )
  });
};

const validate = getValidationSchema => {
  return values => {
    const validationSchema = getValidationSchema(values);
    try {
      validationSchema.validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      return getErrorsFromValidationError(error);
    }
  };
};

const getErrorsFromValidationError = validationError => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR]
    };
  }, {});
};

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  accept: false
};

const onSubmit = (values, { setSubmitting, setErrors }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 2000);
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.touchAll = this.touchAll.bind(this);
    this.state = {
      pelabuhanTujuan: null,
      pib: null,
      jenisImpor: null
    };
  }

  findFirstError(formName, hasError) {
    const form = document.forms[formName];
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus();
        break;
      }
    }
  }

  validateForm(errors) {
    this.findFirstError("tabHeader", fieldName => {
      return Boolean(errors[fieldName]);
    });
  }

  touchAll(setTouched, errors) {
    setTouched({
      pelabuhanTujuan: true,
      jenisPIB: true,
      jenisImpor: true,
      pembayaran: true
    });
    this.validateForm(errors);
  }

  _setValueSelect = (name, value) => {
    this.setState({ [name]: value });
  };

  componentDidMount() {
    _PelabuhanTujuan();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <br />
        <Formik
          initialValues={initialValues}
          validate={validate(validationSchema)}
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <Row>
              <Col lg="12">
                <Form onSubmit={handleSubmit} noValidate name="tabHeader">
                  <FormGroup row>
                    <Label
                      for="noPengajuan"
                      md={{ offset: 2, size: 4 }}
                      xs="12"
                    >
                      No. Pengajuan :
                    </Label>
                    <Col md="6" xs="12">
                      <p className="form-control-static" id="noPengajuan">
                        000020-161682-20200314-000537
                      </p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="pelabuhanTujuan"
                      md={{ offset: 2, size: 4 }}
                      xs="12"
                    >
                      Pelabuhan Tujuan :
                    </Label>
                    <Col md="4" xs="12">
                      <Select
                        name="pelabuhanTujuan"
                        placeholder="Pelabuhan Tujuan"
                        value={this.state.pelabuhanTujuan}
                        options={options}
                        onChange={({ value }) =>
                          this._setValueSelect("pelabuhanTujuan", value)
                        }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="kantorPabean"
                      md={{ offset: 2, size: 4 }}
                      xs="12"
                    >
                      Kantor Pabean Bongkar :
                    </Label>
                    <Col md="4" xs="12">
                      <p className="form-control-static" id="kantorPabean">
                        081400 - KPPBC ATAMBUA
                      </p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="pib" md={{ offset: 2, size: 4 }} xs="12">
                      Jenis PIB :
                    </Label>
                    <Col md="4" xs="12">
                      <Select
                        name="pib"
                        placeholder="Pilih Jenis PIB"
                        value={this.state.pib}
                        options={options2}
                        onChange={({ value }) =>
                          this._setValueSelect("pib", value)
                        }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="jenisImpor" md={{ offset: 2, size: 4 }} xs="12">
                      Jenis Impor :
                    </Label>
                    <Col md="4" xs="12">
                      <Select
                        name="jenisImpor"
                        placeholder="Pilih Jenis Impor"
                        value={this.state.jenisImpor}
                        options={options}
                        onChange={({ value }) =>
                          this._setValueSelect("jenisImpor", value)
                        }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="select-bayar"
                      md={{ offset: 2, size: 4 }}
                      xs="12"
                    >
                      Cara Pembayaran :
                    </Label>
                    <Col md="4" xs="12">
                      <Select
                        name="jenisBayar"
                        placeholder="Pilih Cara Pembayaran"
                        value={this.state.jenisBayar}
                        options={kodeBayar}
                        onChange={({ value }) =>
                          this._setValueSelect("jenisBayar", value)
                        }
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="noAPI" md={{ offset: 2, size: 4 }} xs="12">
                      No API-U/P :
                    </Label>
                    <Col md="4" xs="12">
                      <p className="form-control-static" id="noAPI"></p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ offset: 2, size: 4 }} xs="12">
                      <Button
                        type="submit"
                        color="primary"
                        className="mr-1"
                        onClick={handleSubmit}
                      >
                        <i className="fa fa-save"></i>&nbsp; Simpan Data
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          )}
        />
      </div>
    );
  }
}

export default Header;
