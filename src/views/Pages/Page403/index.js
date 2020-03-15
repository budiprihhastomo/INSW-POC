import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class Page403 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-4">403</h1>
                <h4 className="pt-3">Akses Ditolak!</h4>
                <p className="text-muted float-left">
                  Hubungi administrator untuk konfirmasi data lebih lanjut.
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page403;
