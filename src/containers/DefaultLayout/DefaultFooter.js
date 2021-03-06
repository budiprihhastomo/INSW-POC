import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>
          <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
            CoreUI
          </a>{" "}
          &copy; 2020 POC INSW.
        </span>
        <span className="ml-auto">
          Powered by{" "}
          <a
            href="https://edi-indonesia.co.id/id/about-us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edii
          </a>
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
