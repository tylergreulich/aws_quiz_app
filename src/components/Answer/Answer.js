import React from 'react';

const answer = props => (
  <div style={{ textAlign: 'center' }}>
    <label>{props.children}</label>
  </div>
);

export default answer;
