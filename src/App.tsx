import React, { MouseEventHandler, useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Image from './components/Image';
import User from './components/User';

export interface AppProps {
  img?: string;
  nextImg?: MouseEventHandler<HTMLElement>;
}

const App = (props: AppProps): JSX.Element => {
  const [img, setImg] = useState('');

  const nextImg = () => {
    setImg(faker.image.abstract(450, 500, true));
    console.log(img);
  };
  useEffect(() => {
    nextImg();
  }, []);
  return (
    <>
      <User />
      <Image img={img} nextImg={nextImg} />
    </>
  );
};

export default App;
