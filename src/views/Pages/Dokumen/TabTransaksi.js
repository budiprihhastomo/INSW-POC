import React from "react";
import { Button, Col, Form, FormGroup, Label, Row, Input } from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "react-select/dist/react-select.min.css";

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

class TabTransaksi extends React.Component {
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
                      xs="6"
                    >
                      Transaksi
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="select"
                        name="select-jenis-nilai"
                        id="select-jenis-nilai"
                        placeholder="Pilih Jenis Nilai"
                      >
                        <option value="0">1 - BUKAN TRANSAKSI JUAL BELI</option>
                        <option value="1">2 - KERETA API</option>
                        <option value="2">3 - UDARA</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Label for="select-harga" md={{ size: 2 }} xs="6">
                      Kode Harga
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="select"
                        name="select-harga"
                        id="select-harga"
                        placeholder="Pilih Kode Harga"
                      >
                        <option value="0">1 - KODE HARGA</option>
                        <option value="1">2 - KERETA API</option>
                        <option value="2">3 - UDARA</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="select-valuta"
                      md={{ offset: 2, size: 2 }}
                      xs="6"
                    >
                      Valuta
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="select"
                        name="select-valuta"
                        id="select-valuta"
                      >
                        <option value="0">IDR - RUPIAH</option>
                        <option value="1">2 - KERETA API</option>
                        <option value="2">3 - UDARA</option>
                        <option value="3">Lainnya</option>
                      </Input>
                    </Col>
                    <Label for="ndpbm" md={{ size: 2 }} xs="6">
                      NDPBM
                    </Label>
                    <Col md="2" xs="4">
                      <p className="form-control-static" id="ndpbm">
                        0.0
                      </p>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="harga-cif" md={{ offset: 2, size: 2 }} xs="6">
                      Harga CIF
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="harga-cif"
                        name="harga-cif"
                        placeholder="0.00"
                        min="0"
                      />
                    </Col>
                    <Label for="biayaTambahan-1" md={{ size: 2 }} xs="6">
                      Biaya Tambahan
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="biayaTambahan-1"
                        name="biayaTambahan-1"
                        placeholder="0.00"
                        min="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="nilAsuransi" md={{ offset: 2, size: 2 }} xs="6">
                      Nil Asuransi
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="nilAsuransi"
                        name="nilAsuransi"
                        placeholder="0.00"
                        min="0"
                      />
                    </Col>
                    <Label for="biayaPengurangan" md={{ size: 2 }} xs="6">
                      Biaya Pengurangan
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="biayaPengurangan"
                        name="biayaPengurangan"
                        placeholder="0.00"
                        min="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="freight" md={{ offset: 2, size: 2 }} xs="6">
                      Freight
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="freight"
                        name="freight"
                        placeholder="0.00"
                        min="0"
                      />
                    </Col>
                    <Label for="vd" md={{ size: 2 }} xs="6">
                      VD
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="vd"
                        name="vd"
                        placeholder="0.00"
                        min="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="nilaiPabean" md={{ offset: 2, size: 2 }} xs="6">
                      Nilai Pabean
                    </Label>
                    <Col md="2" xs="4">
                      <p className="form-control-static" id="nilaiPabean">
                        0.0
                      </p>
                    </Col>
                    <Label for="biayaTambahan-2" md={{ size: 2 }} xs="6">
                      Biaya Tambahan
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="biayaTambahan-2"
                        name="biayaTambahan-2"
                        placeholder="0.00 KG"
                        min="0"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="nilaiPabean" md={{ offset: 2, size: 2 }} xs="6">
                      Nilai Pabean
                    </Label>
                    <Col md="2" xs="4">
                      <p className="form-control-static" id="nilaiPabean">
                        0.0
                      </p>
                    </Col>
                    <Label for="biayaTambahan-3" md={{ size: 2 }} xs="6">
                      Biaya Tambahan
                    </Label>
                    <Col md="2" xs="4">
                      <Input
                        type="number"
                        id="biayaTambahan-3"
                        name="biayaTambahan-3"
                        placeholder="0.00 KG"
                        min="0"
                      />
                    </Col>
                  </FormGroup>
                  <br />
                  <FormGroup row>
                    <Col md={{ offset: 2, size: 4 }} xs="12">
                      <Button type="submit" color="primary" className="mr-1">
                        <i className="fa fa-save"></i>&nbsp; Simpan Data
                        Transaksi
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

export default TabTransaksi;
