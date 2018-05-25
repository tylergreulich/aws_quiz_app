import React from 'react';
import { LabelContainer } from '../StyledComponents/StyledComponents';

const answer = props => {
  return (
    <LabelContainer>
      <label>{props.children}</label>
    </LabelContainer>
  );
};

export default answer;
