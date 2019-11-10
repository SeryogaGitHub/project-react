import React from 'react';
import preloader from '../../assect/img/preloader.gif';

let Preloader = () => {
  return(
    <div style={{backgroundColor: '#ffffff', textAlign: 'center'}}>
      <img src={preloader} alt={'preloader'}/>
    </div>
  );
};

export default Preloader;
