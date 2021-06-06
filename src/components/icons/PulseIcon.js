import React from 'react';

const PulseIcon = (props) => {
  return (
    <lottie-player style={{ width: 60, height: 60, position: 'absolute', top: -6, right: 46 }}
      src="https://assets7.lottiefiles.com/packages/lf20_7aqq7yqm.json"
      background="transparent"
      speed={props.speed}
      loop
      autoplay>
    </lottie-player>
  )
}

export default PulseIcon;
