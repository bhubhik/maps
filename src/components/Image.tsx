import React from 'react';
import { AppProps } from '../App';

const Image = ({ img, nextImg }: AppProps): JSX.Element => {
  return (
    <div>
      <img src={img} alt='A random' />
      <button onClick={nextImg}>Next Image</button>
    </div>
  );
};

export default Image;
