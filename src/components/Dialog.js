import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-md-progress-bar';
import { Container, Wrapper, Errors, ErrorItem, Header, Title, Body } from './tags';

class Dialog extends Component {

  /**
   * React Component constructor.
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      progressBar: props.progressBar,
      errors: props.errors
    }
  }

  /**
   * Update state based nextProps.
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
      progressBar: nextProps.progressBar,
      errors: nextProps.errors
    });
  }

  /**
   * Render progress.
   * @returns {XML}
   */
  renderProgress() {
    if (this.state.progressBar) {
      return (
        <ProgressBar
          show={true}
          overlay={true}
        />
      );
    } else {
      return (null);
    }
  }

  /**
   * Render body.
   * @returns {XML}
   */
  renderBody() {
    return(
      <Body>
        { this.props.children }
      </Body>
    )
  }

  /**
   * Render modal.
   * @returns {XML}
   */
  renderModal() {
    return(
      <Container style={ { ...{ height: window.innerHeight } } }>
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
   * @returns {XML}
   */
  renderErrors() {
    if (this.state.errors) {
      const errors = this.state.errors.map((error, index) =>
        <ErrorItem key={index}>
          {error.message}
        </ErrorItem>
      );

      return (
        <Errors>
          {errors}
        </Errors>
      );
    } else {
      return (null);
    }
  }

  /**
   * Render error message.
   * @returns {XML}
   */
  render() {
    return (this.state.show) ? this.renderModal() : null;
  }
}

Dialog.propTypes = {
  show: PropTypes.bool,
  progressBar: PropTypes.bool,
  errors: PropTypes.array,
}

export default Dialog;
