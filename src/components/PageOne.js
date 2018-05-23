import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition, Transition } from 'react-transition-group';
import { AnswerContainer } from './StyledComponents/StyledComponents';
import { InputOne, InputTwo, InputThree, InputFour } from './Answer/Inputs';
import Answer from './Answer/Answer';
import Question from './Question/Question';

class PageOne extends Component {
  state = {
    answer: false,
    toggleQuestion: false
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
      this.props.theScore();
    }
    this.setState({ toggleQuestion: !this.state.toggleQuestion });
    setTimeout(() => {
      this.props.history.push('/page-two');
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <AnswerContainer onSubmit={this.onSubmit}>
          <Question active={this.state.toggleQuestion}>ASDF</Question>

          <Answer>
            <InputOne changed={() => this.setState({ answer: true })} />
          </Answer>
          <Answer>
            <InputTwo changed={() => this.setState({ answer: false })} />
          </Answer>
          <Answer>
            <InputThree changed={() => this.setState({ answer: false })} />
          </Answer>
          <Answer>
            <InputFour changed={() => this.setState({ answer: false })} />
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
  theScore: () => dispatch({ type: 'SCORE', val: 5 })
});

PageOne.propTypes = {
  theScore: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(PageOne);
