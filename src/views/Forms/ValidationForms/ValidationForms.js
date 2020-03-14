import React from 'react';
import { Card, CardHeader, CardBody} from 'reactstrap';
import Tabs from '../../Base/Tabs/Tabs'
import './ValidationForms.css'

class ValidationForms extends React.Component {
  constructor(props){
    super(props)
    this.touchAll = this.touchAll.bind(this)

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

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="icon-note"></i><strong>Form Dokumen</strong>
          </CardHeader>
          <CardBody>
            <Tabs/>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ValidationForms;
