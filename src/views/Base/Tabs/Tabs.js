import React, { Component } from 'react';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import TabHeader from '../../Pages/Dokumen/TabHeader';
import TabIdentitas from '../../Pages/Dokumen/TabIdentitas';
import TabDokumen from '../../Pages/Dokumen/TabDokumen'
import TabPungutan from '../../Pages/Dokumen/TabPungutan';
import TabKemasanKontainer from '../../Pages/Dokumen/TabKemasan';
import TabPengangkutan from '../../Pages/Dokumen/TabPengangkutan';
import TabTransaksi from '../../Pages/Dokumen/TabTransaksi';
// import classnames from 'classnames';

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  lorem() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <TabHeader />
        </TabPane>
        <TabPane tabId="2">
          <TabIdentitas />
        </TabPane>
        <TabPane tabId="3">
          <TabDokumen />
        </TabPane>
        <TabPane tabId="4">
          <TabPengangkutan />
        </TabPane>
        <TabPane tabId="5">
          <TabKemasanKontainer />
        </TabPane>
        <TabPane tabId="6">
          <TabTransaksi />
        </TabPane>
        <TabPane tabId="7">
          {`7. ${this.lorem()}`}
        </TabPane>
        <TabPane tabId="8">
          <TabPungutan />
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Header
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Identitas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Dokumen Pendukung
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Pengangkutan
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '5'}
                  onClick={() => { this.toggle(0, '5'); }}
                >
                  Kemasan & Kontainer
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '6'}
                  onClick={() => { this.toggle(0, '6'); }}
                >
                  Transaksi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '7'}
                  onClick={() => { this.toggle(0, '7'); }}
                >
                  Barang
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '8'}
                  onClick={() => { this.toggle(0, '8'); }}
                >
                  Pungutan
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tabs;
