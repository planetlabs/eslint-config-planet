import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import {string} from 'prop-types';

const HelloMessage = ({name, initialGreeting = 'Hello'}) => {
  const [greeting, setGreeting] = useState(initialGreeting);

  const onClick = useCallback(() => {
    setGreeting('Goodbye');
  }, [setGreeting]);

  return (
    <div onClick={onClick}>
      {greeting} {name}
    </div>
  );
};

HelloMessage.propTypes = {
  initialGreeting: string,
  name: string.isRequired,
};

ReactDOM.render(
  <HelloMessage name="John" initialGreeting="Hi" />,
  document.getElementById('root')
);
