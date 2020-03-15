import React from "react";
import { Button, Col, Form, FormGroup, Label, Row, Input } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import states from "./data/states";
import Select from "react-select";
import "react-select/dist/react-select.min.css";

// import './ValidationForms.css'

const options = states.US;

const validationSchema = function(values) {
  return Yup.object().shape({
    select: Yup.string().required("Pilih Pelabuhan Tujuan!"),
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
    // console.log('User has been successfully saved!', values)
    setSubmitting(false);
  }, 2000);
};

class TabPengangkutan extends React.Component {
  constructor(props) {
    super(props);
    this.saveChanges = this.saveChanges.bind(this);
    this.touchAll = this.touchAll.bind(this);

    this.state = {
      value: "IDN",
      value2: null,
      value3: null
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
    this.findFirstError("simpleForm", fieldName => {
      return Boolean(errors[fieldName]);
    });
  }

  touchAll(setTouched, errors) {
    setTouched({
      firstName: true,
      lastName: true,
      userName: true,
      email: true,
      password: true,
      confirmPassword: true,
      accept: true
    });
    this.validateForm(errors);
  }

  saveChanges(value) {
    this.setState({ value });
  }

  saveOptions = value2 => {
    this.setState({ value2 });
  };

  saveSelect = value3 => {
    this.setState({ value3 });
  };

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
                <Form onSubmit={handleSubmit} noValidate name="simpleForm">
                  <FormGroup row>
                    <Label
                      for="select-jenis"
                      md={{ offset: 2, size: 2 }}
                      xs="12"
                    >
                      Jenis Dokumen :
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="select"
                        name="select-jenis"
                        id="select-jenis"
                      >
                        <option value="0">NPWP 15 Digit</option>
                        <option value="1">KTP</option>
                        <option value="2">NPWP 12 Digit</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Col md="2" xs="4">
                      <Input
                        type="text"
                        id="inputJenisDokumen"
                        name="inputJenisDokumen"
                        placeholder="Masukkan Nomor"
                      />
                    </Col>
                    <Col md="2" xs="4">
                      <Input
                        type="date"
                        id="tglJenisDokumen"
                        name="tglJenisDokumen"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="noPos" md={{ offset: 2, size: 2 }} xs="12">
                      No POS :{" "}
                    </Label>
                    <Col md="2" xs="4">
                      <Input type="text" id="noPos" name="noPos" max="3" />
                    </Col>
                    <Col md="2" xs="4">
                      <Input type="text" id="noPos-2" name="noPos-2" />
                    </Col>
                    <Col md="2" xs="4">
                      <Input type="text" id="noPos-3" name="noPos-3" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="namaSarkut" md={{ offset: 2, size: 2 }} xs="6">
                      Nama Sarkut :
                    </Label>
                    <Col md="2" xs="4">
                      <Input type="text" id="namaSarkut" name="namaSarkut" />
                    </Col>
                    <Label for="select-pengangkutan" md={{ size: 2 }} xs="6">
                      Cara Pengangkutan :
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="select"
                        name="select-pengangkutan"
                        id="select-pengangkutan"
                      >
                        <option value="0">1 - LAUT</option>
                        <option value="1">2 - KERETA API</option>
                        <option value="2">3 - UDARA</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="noVoy" md={{ offset: 2, size: 2 }} xs="6">
                      No. Voy/Flight :
                    </Label>
                    <Col md="2" xs="4">
                      <Input type="text" id="noVoy" name="noVoy" />
                    </Col>
                    <Label for="select-ekspor" md={{ size: 2 }} xs="6">
                      Bendera :
                    </Label>
                    <Col md="2" xs="4">
                      <Select
                        name="select-ekspor"
                        placeholder="Bendera"
                        value={this.state.value}
                        options={options}
                        onChange={this.saveChanges}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="tglTiba" md={{ offset: 2, size: 2 }} xs="12">
                      Perkiraan tgl tiba :
                    </Label>
                    <Col md="2" xs="12">
                      <Input
                        type="date"
                        id="tglTiba"
                        name="tglTiba"
                        placeholder="Masukkan Nomor"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="select-pelabuhan-muat"
                      md={{ offset: 2, size: 2 }}
                      xs="12"
                    >
                      Pelabuhan Muat :
                    </Label>
                    <Col md="6" xs="12">
                      <Select
                        name="select-pelabuhan-muat"
                        placeholder="Bendera"
                        value={this.state.value}
                        options={options}
                        onChange={this.saveChanges}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="select-pelabuhan-tujuan"
                      md={{ offset: 2, size: 2 }}
                      xs="12"
                    >
                      Pelabuhan Tujuan :
                    </Label>
                    <Col md="6" xs="12">
                      <Select
                        name="select-pelabuhan-tujuan"
                        placeholder="Bendera"
                        value={this.state.value}
                        options={options}
                        onChange={this.saveChanges}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="select-pelabuhan-transit"
                      md={{ offset: 2, size: 2 }}
                      xs="12"
                    >
                      Pelabuhan Transit :
                    </Label>
                    <Col md="6" xs="12">
                      <Select
                        name="select-pelabuhan-transit"
                        placeholder="Bendera"
                        value={this.state.value}
                        options={options}
                        onChange={this.saveChanges}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="select-tempat-penimbunan"
                      md={{ offset: 2, size: 2 }}
                      xs="12"
                    >
                      Tempat Penimbunan :
                    </Label>
                    <Col md="6" xs="12">
                      <Select
                        name="select-tempat-penimbunan"
                        placeholder="Bendera"
                        value={this.state.value}
                        options={options}
                        onChange={this.saveChanges}
                      />
                    </Col>
                  </FormGroup>
                  <br />
                  <FormGroup row>
                    <Col md={{ offset: 2, size: 4 }} xs="12">
                      <Button type="submit" color="primary" className="mr-1">
                        <i className="fa fa-save"></i>&nbsp; Simpan Data
                        Pengangkutan
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

export default TabPengangkutan;
