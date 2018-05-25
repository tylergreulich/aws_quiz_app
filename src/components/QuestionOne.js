import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AnswerContainer } from './StyledComponents/StyledComponents';
import { InputOne, InputTwo, InputThree, InputFour } from './Answer/Inputs';
import Answer from './Answer/Answer';
import Question from './Question/Question';
import './PointAnimation.css';

class QuestionOne extends Component {
  state = {
    answer: false,
    toggleQuestion: false,
    togglePoints: false,
    localScore: 0
  };

  componentDidMount() {
    this.setState(prevState => {
      return {
        toggleQuestion: !prevState.toggleQuestion
      };
    });
  }

  onSubmit = event => {
    event.preventDefault();
    if (this.state.answer === true) {
      this.props.addGlobalScore();
      this.setState(prevState => {
        return {
          localScore: prevState.localScore + 5
        };
      });
    }
    this.setState(prevState => {
      return { togglePoints: !prevState.togglePoints };
    });

    setTimeout(() => {
      this.setState({ toggleQuestion: !this.state.toggleQuestion });
    }, 1250);

    setTimeout(() => {
      this.props.history.push('/question-two');
    }, 2000);
  };

  render() {
    let pointClasses = ['off'];

    if (this.state.togglePoints) {
      pointClasses.push('togglePoints');
    }

    return (
      <div className="App">
        <div className={pointClasses.join(' ')}>+{this.state.localScore}</div>
        <AnswerContainer onSubmit={this.onSubmit}>
          <Question active={this.state.toggleQuestion}>
            How can software determine the public and private IP addresses of
            the EC2 instance that it is running on?
          </Question>

          <Answer>
            <InputOne changed={() => this.setState({ answer: true })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              Query the local instance metadata.
            </p>
          </Answer>
          <Answer>
            <InputTwo changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              Use an ipconfig or ifconfig command.
            </p>
          </Answer>

          <Answer>
            <InputThree changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              Query the appropriate Amazon CloudWatch metric.
            </p>
          </Answer>
          <Answer>
            <InputFour changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              Query the local instance userdata.
            </p>
          </Answer>

          <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            <input type="submit" value="Submit" />
          </div>
        </AnswerContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  globalScore: state.score
});

const mapDispatchToProps = dispatch => ({
  addGlobalScore: () => dispatch({ type: 'SCORE', val: 5 })
});

QuestionOne.propTypes = {
  theScore: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(QuestionOne)
);
