import VanillaTilt from 'vanilla-tilt';
import React, { useEffect, useRef } from 'react';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}

export default Tilt