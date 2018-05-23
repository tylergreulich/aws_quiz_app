import React from 'react';
import {
  Question,
  QuestionContainer
} from '../StyledComponents/StyledComponents';
import { Transition } from 'react-transition-group';

const question = props => (
  <QuestionContainer>
    <Transition in={props.active} timeout={100}>
      {state => (
        <Question
          style={{
            opacity: state === 'exited' || state === 'entering' ? 0 : 1,
            transform:
              state === 'exited' || state === 'entering'
                ? 'translateY(-100%)'
                : 'translateY(0%)',
            transition: 'all .5s ease-out'
          }}
        >
          {props.children}
        </Question>
      )}
    </Transition>
  </QuestionContainer>
);

export default question;
