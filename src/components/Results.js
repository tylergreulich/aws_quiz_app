import React from 'react';
import {
  ResultsContainer,
  ToggleButton,
  Title
} from './StyledComponents/StyledComponents';

export const Passed = props => (
  <ResultsContainer>
    <Title style={{ marginBottom: '3rem' }}>{props.children}</Title>
    <ToggleButton onClick={props.home} style={{ marginTop: '3rem' }}>
      Reset
    </ToggleButton>
  </ResultsContainer>
);

export const Failed = props => (
  <ResultsContainer>
    <Title style={{ marginBottom: '3rem' }}>{props.children}</Title>
    <ToggleButton onClick={props.home} style={{ marginTop: '3rem' }}>
      Reset
    </ToggleButton>
  </ResultsContainer>
);
