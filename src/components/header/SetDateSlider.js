import React, { useContext } from 'react';
import { EventDateInput, SliderButton } from 'components/index';
import { UIContext } from 'contexts/index';

const SetDateSlider = () => {
  // const customerContext = useContext(Customer)
  const uiContext = useContext(UIContext)
  // console.log(uiContext);
  return (
    <div className={`setDateSlider ${uiContext.sliderState ? " open" : ""}` }>
      <EventDateInput name={false} email={false} phone={false}/>
      <div className="openSetDate">
        <SliderButton/>
      </div>
    </div>
  )
}

export default SetDateSlider;
