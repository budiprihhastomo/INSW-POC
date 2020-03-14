import React, { Component } from 'react';
import { Card, CardHeader, CardBody} from 'reactstrap';
import Tabs from '../../Base/Tabs/Tabs'

class BasicForms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
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
    );
  }
}

export default BasicForms;
