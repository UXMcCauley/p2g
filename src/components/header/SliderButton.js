import React, { useContext } from 'react';
import {PulseIcon} from 'components/index';
import { Customer, UIContext } from 'contexts/index';
import { Button } from 'react-bootstrap';

const SliderButton = () => {
  const uiContext = useContext(UIContext)
  const customerContext = useContext(Customer)
  const messages = ["Change my date.", "Set my date", "Nevermind"]
  const closeX = (<div className="closeX"><img alt="close icon" src='/img/x-circle.svg'/> </div>)

  return (
    <Button className="lottie" variant="primary" onClick={() => {uiContext.toggleSlider()}}>
      {customerContext.customerData.data.date === undefined ? messages[1] : messages[0]}
      {customerContext.eventDate ? closeX : <PulseIcon speed="4"/>}
    </Button>
  )
}

export default SliderButton;
