import React from 'react';
import { Button, Col, CustomInput, Form, FormGroup, Label, Row} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup'
import states from './data/states';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';
// import './ValidationForms.css'

const options = states.US;
const options2 = states.AU;

const validationSchema = function (values) {
  return Yup.object().shape({
    select: Yup.string()
    .required('Pilih Pelabuhan Tujuan!'),
    firstName: Yup.string()
    .min(2, `First name has to be at least 2 characters`)
    .required('First name is required'),
    lastName: Yup.string()
    .min(1, `Last name has to be at least 1 character`)
    .required('Last name is required'),
    userName: Yup.string()
    .min(5, `Username has to be at least 5 characters`)
    .required('Username is required'),
    email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
    password: Yup.string()
    .min(6, `Password has to be at least ${6} characters!`)
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 'Password must contain: numbers, uppercase and lowercase letters\n')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([values.password], 'Passwords must match')
    .required('Password confirmation is required'),
    accept: Yup.bool()
    .required('* required')
    .test('accept', 'You have to accept our Terms and Conditions!', value => value === true),
  })
}

const validate = (getValidationSchema) => {
  return (values) => {
    const validationSchema = getValidationSchema(values)
    try {
      validationSchema.validateSync(values, { abortEarly: false })
      return {}
    } catch (error) {
      return getErrorsFromValidationError(error)
    }
  }
}

const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    }
  }, {})
}

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  accept: false
}

const onSubmit = (values, { setSubmitting, setErrors }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    // console.log('User has been successfully saved!', values)
    setSubmitting(false)
  }, 2000)
}

class Header extends React.Component {
  constructor(props){
    super(props)
    this.saveChanges = this.saveChanges.bind(this);
    this.touchAll = this.touchAll.bind(this);

    this.state = {
      value: null,
      value2: null,
      value3: null
    }
  }

  findFirstError (formName, hasError) {
    const form = document.forms[formName]
    for (let i = 0; i < form.length; i++) {
      if (hasError(form[i].name)) {
        form[i].focus()
        break
      }
    }
  }

  validateForm (errors) {
    this.findFirstError('simpleForm', (fieldName) => {
      return Boolean(errors[fieldName])
    })
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
      }
    )
    this.validateForm(errors)
  }

  saveChanges(value) {
    this.setState({ value });
  }

  saveOptions = value2 => {
    this.setState({ value2 });
  }

  saveSelect = value3 => {
    this.setState({ value3 });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <br />
        <Formik
            initialValues={initialValues}
            validate={validate(validationSchema)}
            onSubmit={onSubmit}
            render={
            ({handleSubmit}) => (
                <Row>
                <Col lg="12">
                    <Form onSubmit={handleSubmit} noValidate name='simpleForm'>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Label>No. Pengajuan :</Label>
                        </Col>
                        <Col xs="6" md="6">
                            <p className="form-control-static">000020-161682-20200314-000537</p>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Label>Pelabuhan Tujuan :</Label>
                        </Col>
                        <Col xs="6" md="4">
                          <Select
                            name="select-ekspor"
                            placeholder="Pelabuhan Muat Ekspor"
                            value={this.state.value}
                            options={options}
                            onChange={this.saveChanges}
                          />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Label>Kantor Pabean Bongkar :</Label>
                        </Col>
                        <Col xs="6" md="4">
                            <p className="form-control-static">081400 - KPPBC ATAMBUA</p>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Label>Jenis PIB :</Label>
                        </Col>
                        <Col xs="6" md="4">
                        <Select
                            name="select-pib"
                            placeholder="Pilih Jenis"
                            value={this.state.value2}
                            options={options2}
                            onChange={this.saveOptions}
                          />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Label>Jenis Impor :</Label>
                        </Col>
                        <Col xs="6" md="4">
                        <Select
                            name="select-pib"
                            placeholder="Pilih Jenis Impor"
                            value={this.state.value3}
                            options={options}
                            onChange={this.saveSelect}
                          />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Label>Cara Pembayaran :</Label>
                        </Col>
                        <Col xs="6" md="4">
                            <CustomInput 
                                type="select" 
                                name="selectBayar" 
                                id="selectBayar"
                            >
                                <option value="">Pilih Cara Pembayaran</option>
                                <option value="1">Option #1</option>
                                <option value="2">Option #2</option>
                                <option value="3">Option #3</option>
                            </CustomInput>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Label>No API-U/P :</Label>
                        </Col>
                        <Col xs="6" md="4">
                            <p className="form-control-static"></p>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col xs="6" md={{offset: 2, size: 4}}>
                            <Button type="submit" color="primary" className="mr-1"><i className="fa fa-save"></i>&nbsp; Simpan Data</Button>
                            {/* <Button type="button" color="success" className="mr-1" onClick={() => this.touchAll(setTouched, errors)}  disabled={isValid}>Validate</Button>
                            <Button type="reset" color="danger" className="mr-1" onClick={handleReset}>Reset</Button> */}
                        </Col>
                    </FormGroup>
                    </Form>
                </Col>
                </Row>
            )} />
      </div>
    )
  }
}

export default Header;
