import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import {
  AppCard,
  TitleContainer,
  Title,
  Countdown,
  ToggleContainer,
  ToggleButton
} from './components/StyledComponents/StyledComponents';

class App extends Component {
  state = {
    countdown: 5,
    displayCountdown: false
  };

  toggleCountdown = () => {
    const display = this.state.displayCountdown;
    this.setState({ displayCountdown: !display });
    setInterval(() => {
      this.setState(prevState => ({
        countdown: prevState.countdown - 1
      }));
    }, 1000);
  };

  render() {
    const classes = ['hidden'];
    const reverseClasses = [];
    const transitionColor = ['green'];

    if (this.state.displayCountdown) {
      classes.push('display');
      reverseClasses.push('hidden');
      transitionColor.push('nocolor');
    }

    if (this.state.countdown === 0) {
      this.props.history.push('/page-one');
    }

    return (
      <div className="App">
        <AppCard className={transitionColor.join(' ')}>
          <TitleContainer>
            <Title className={reverseClasses.join(' ')}>
              AWS Certified Solutions Architect Quiz
            </Title>
          </TitleContainer>
          <Countdown className={classes.join(' ')}>
            {this.state.countdown}
          </Countdown>
          <ToggleContainer className={reverseClasses.join(' ')}>
            <ToggleButton onClick={this.toggleCountdown}>Start</ToggleButton>
          </ToggleContainer>
        </AppCard>
      </div>
    );
  }
}

export default App;
