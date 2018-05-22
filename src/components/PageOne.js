import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Question, AnswerContainer } from './StyledComponents/StyledComponents';
import { InputOne, InputTwo, InputThree, InputFour } from './Answer/Inputs';
import Answer from './Answer/Answer';

class PageOne extends Component {
  state = {
    answer: false,
    toggleQuestion: false
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.answer === true) {
      this.props.theScore();
    }
    this.setState({ toggleQuestion: true });
    setTimeout(() => {
      this.props.history.push('/page-two');
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <AnswerContainer onSubmit={this.onSubmit}>
          <CSSTransition
            classNames={'fade-slide'}
            mountOnEnter
            unmountOnExit
            in={!this.state.toggleQuestion}
          >
            <section style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
              <Question>ASDF?</Question>
            </section>
          </CSSTransition>

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
