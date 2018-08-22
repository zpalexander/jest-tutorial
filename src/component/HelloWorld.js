import React, { Component } from 'react';

const HelloWorld = (props) => (
  <div className="hello-world">Hello { props.name || 'World' }</div>
);

export default HelloWorld;
