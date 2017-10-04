import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-md-progress-bar';
import { Container, Wrapper, Errors, ErrorItem, Header, Title, Body } from './tags';

class Dialog extends Component {
  static propTypes = {
    errors: PropTypes.array,
    progressBar: PropTypes.bool,
    show: PropTypes.bool,
  }

  /**
   * Render progress.
   *
   * @returns {XML}
   */
  renderProgress() {
    if (this.props.progressBar) {
      return (
        <ProgressBar
          overlay={true}
          show={true}
        />
      );
    }
  }

  /**
   * Render body.
   *
   * @returns {XML}
   */
  renderBody() {
    return (
      <Body>
        {this.props.children}
      </Body>
    );
  }

  /**
   * Render modal.
   *
   * @returns {XML}
   */
  renderModal() {
    return(
      <Container style={{ height: window.innerHeight }}>
        <Wrapper>
          { this.renderProgress() }
          { this.renderErrors() }
          { this.renderBody() }
        </Wrapper>
      </Container>
    );
  }

  /**
   * Render error message.
   *
   * @returns {XML}
   */
  renderErrors() {
    if (this.props.errors) {
      const errors = this.props.errors.map((error, index) =>
        <ErrorItem key={index}>
          {error.message}
        </ErrorItem>
      );

      return (
        <Errors>
          {errors}
        </Errors>
      );
    }
  }

  /**
   * Render error message.
   *
   * @returns {XML}
   */
  render() {
    return this.props.show ? this.renderModal() : null;
  }
}

export default Dialog;
