import React from 'react';

const Hello = (props) => {
  const { message } = props;
  return (
    <div className="hello">
      <h2>Hello from the Hello Component</h2>
      <h3>{message}</h3>
      {props.children}
    </div>
  );
};

export default Hello;
