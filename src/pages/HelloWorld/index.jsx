import React from 'react';

/* smaller components */

/* Showing React special props: children and style */
function Title(props) {
  console.log('Title is gonna render with: ', props);

  /* Example of scoped css using react style prop */
  return <h1 style={{ textAlign: 'center' }}>{props.children}</h1>;
}

/* Using object destructuring for props. Make it cleaner */
function PrimaryButton({ children, onClick }) {
  console.log('PrimaryButton is gonna render with: ', { children, onClick });

  return (
    <button className="btn btn-lg btn-primary btn-block" onClick={onClick}>
      {children}
    </button>
  );
}

/* Divinding in smaller presentational components */
function Message(props) {
  console.log('Message is gonna render with: ', props);
  return (
    <div className="alert alert-info" role="alert">
      {props.message}
    </div>
  );
}

function CounterInfo(props) {
  console.log('CounterInfo is gonna render with: ', props);
  return (
    <p>
      {props.text}
      <span className="badge badge-secondary">{props.counter}</span>
    </p>
  );
}

/* compounded component */
function HelloWorld(props) {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(prevCounter => {
      return prevCounter + 1;
    });
  };

  return (
    <div>
      <Title>Hello World</Title>

      {/* Conditional rendering: only if message prop is defined */}
      {props.message && <Message message={props.message} />}

      <CounterInfo text="Counter value is " counter={counter} />

      <PrimaryButton onClick={increment}>Add</PrimaryButton>
    </div>
  );
}

export default HelloWorld;
