import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AnswerContainer } from './StyledComponents/StyledComponents';
import { InputOne, InputTwo, InputThree, InputFour } from './Answer/Inputs';
import Answer from './Answer/Answer';
import Question from './Question/Question';
import './PointAnimation.css';

class QuestionThree extends Component {
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
      this.props.history.push('/question-four');
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
            When will you incur costs with an Elastic IP address (EIP)?
          </Question>

          <Answer>
            <InputOne changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              When it is allocated and associated with a running instance
            </p>
          </Answer>
          <Answer>
            <InputTwo changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              Costs are incurred regardless of whether the EIP is associated
              with a running instance
            </p>
          </Answer>
          <Answer>
            <InputThree changed={() => this.setState({ answer: false })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              When an EIP is allocated
            </p>
          </Answer>
          <Answer>
            <InputFour changed={() => this.setState({ answer: true })} />
            <p style={{ fontSize: '1.4rem', textAlign: 'center' }}>
              When it is allocated and associated with a stopped instance
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

const mapDispatchToProps = dispatch => ({
  addGlobalScore: () => dispatch({ type: 'SCORE', val: 5 })
});

QuestionThree.propTypes = {
  theScore: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(withRouter(QuestionThree));
