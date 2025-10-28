import React, {useEffectEvent} from 'react';

export function BadComponent() {
  return <button onClick={useEffectEvent(() => false)}>click me</button>;
}

export default [
  /React Hook "useEffectEvent" can only be called at the top level of your component/,
];
