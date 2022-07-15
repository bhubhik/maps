import React, { useState } from 'react';
import Myprops from './Myprops';

export interface AppProps {
  color?: string;
}
const App = (props: AppProps): JSX.Element => {
  const color = 'red';
  return (
    <>
      <TryCatch color={color} />
      <Myprops color={color} />
    </>
  );
};

const TryCatch = ({ color }: AppProps) => {
  return <div>{color}</div>;
};

export default App;
