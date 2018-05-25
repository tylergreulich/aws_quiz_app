import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppCard } from './StyledComponents/StyledComponents';
import { withRouter } from 'react-router-dom';
import { Passed, Failed } from './Results';

class Results extends Component {
  render() {
    let results = null;
    let calcScore = `${this.props.globalScore / 25 * 100}%`;

    if (this.props.globalScore >= 20) {
      results = (
        <Passed home={() => this.props.history.push('/')}>
          You passed! Your score was {calcScore}
        </Passed>
      );
    } else {
      return (
        <Failed home={() => this.props.history.push('/')}>
          You failed! Your score was {calcScore}
        </Failed>
      );
    }

    return <AppCard>{results}</AppCard>;
  }
}

const mapStateToProps = state => ({
  globalScore: state.score
});

export default connect(mapStateToProps, null)(withRouter(Results));
