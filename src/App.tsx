import React from 'react';
import User from './components/User';

export interface AppProps {
  color?: string;
}
const App = (props: AppProps): JSX.Element => {
  return (
    <>
      <User />
    </>
  );
};

export default App;
