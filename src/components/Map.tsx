import React, { useEffect } from 'react';

const styles = {
  height: '80%',
  width: '100%',
};

const Map = () => {
  useEffect(() => {
    setTimeout(() => {
      new google.maps.Map(document.getElementById('map') as HTMLElement, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }, 1000);
  }, []);

  return <div id='map' style={styles}></div>;
};

export default Map;
