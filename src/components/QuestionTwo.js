import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AnswerContainer } from './StyledComponents/StyledComponents';
import { InputOne, InputTwo, InputThree, InputFour } from './Answer/Inputs';
import Answer from './Answer/Answer';
import Question from './Question/Question';
import './PointAnimation.css';
import { ToggleButton } from './StyledComponents/StyledComponents';

class QuestionTwo extends Component {
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
      this.props.history.push('/question-three');
    }, 2000);
  };

  render() {
    let pointClasses = ['off'];

    if (this.state.togglePoints) {
      pointClasses.push('togglePoints');
    }

    return (
      <div className="App">
        <AnswerContainer onSubmit={this.onSubmit}>
          <div className={pointClasses.join(' ')}>+{this.state.localScore}</div>
          <Question active={this.state.toggleQuestion}>
            What does Amazon CloudFormation provide?
          </Question>

          <Answer>
            <InputOne changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              The ability to setup Autoscaling for Amazon EC2 instances
            </p>
          </Answer>
          <Answer>
            <InputTwo changed={() => this.setState({ answer: false })} />

            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              A template to map network resources for Amazon Web Services
            </p>
          </Answer>
          <Answer>
            <InputThree changed={() => this.setState({ answer: true })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              A template resource creation for Amazon Web Services
            </p>
          </Answer>
          <Answer>
            <InputFour changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              None of the above
            </p>
          </Answer>

          <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            <ToggleButton type="submit" onClick={this.onSubmit}>
              Next
            </ToggleButton>
          </div>
        </AnswerContainer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addGlobalScore: () => dispatch({ type: 'SCORE', val: 5 })
});

QuestionTwo.propTypes = {
  addGLobalScore: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(withRouter(QuestionTwo));
