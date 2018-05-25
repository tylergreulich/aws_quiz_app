import Aux from '../../hoc/Auxiliary';
import React from 'react';
import { StyledInput } from '../StyledComponents/StyledComponents';

export const InputOne = props => (
  <Aux>
    <StyledInput
      type="radio"
      value="1"
      name="group1"
      onChange={props.changed}
    />
    {props.children}
  </Aux>
);

export const InputTwo = props => (
  <Aux>
    <StyledInput
      type="radio"
      value="2"
      name="group1"
      onChange={props.changed}
    />
    {/* <div>2</div> */}
  </Aux>
);

export const InputThree = props => (
  <Aux>
    <StyledInput
      type="radio"
      value="3"
      name="group1"
      onChange={props.changed}
    />
    {/* <div>3</div> */}
  </Aux>
);

export const InputFour = props => (
  <Aux>
    <StyledInput
      type="radio"
      value="4"
      name="group1"
      onChange={props.changed}
    />
    {/* <div>4</div> */}
  </Aux>
);
