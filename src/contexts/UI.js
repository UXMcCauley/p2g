import React, { createContext, useState } from "react";

const UIContext = createContext({
  toggleSlider: () => {},
  toggleCart: () => {},
});

const UIProvider = ({ children }) => {
  // change state of date slider in header
  const [ sliderState, setSliderState ] = useState(false)
  const toggleSlider = (el) => { setSliderState( !sliderState )}

  // change state of cart slide in element
  const [ cartState, setCartState ] = useState(true)
  const toggleCart = (el) => {
    setCartState( !cartState )
  }

  return (
    <UIContext.Provider
      value={{ sliderState, toggleSlider, cartState, toggleCart }}>
      { children }
    </UIContext.Provider>
  )
}

export { UIContext, UIProvider }
