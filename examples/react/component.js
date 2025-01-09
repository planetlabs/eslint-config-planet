import {string} from 'prop-types';
import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';

const HelloMessage = ({name}) => {
  const [greeting, setGreeting] = useState('Hello');

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
  name: string.isRequired,
};

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('root'));
