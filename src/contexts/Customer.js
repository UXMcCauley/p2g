import React, { createContext, useState } from "react";

const Customer = createContext({
  updateCustomerData: () => {},
});

const CustomerProvider = ({ children }) => {
  let [ customerData, setCustomerData ] = useState({
    data: {
      eventDetails: {
        'Date': '',
        'Time': ''
      },
      personalDetails: {
        'First': 'Drew',
        'Last': 'McCauley',
        'Email': 'uxmccauley@gmail.com',
        'Phone': '6083998607',
        'Address': '8472 County Road T',
        'City': 'Arpin',
        'State': 'WI',
        'Zip': '54410',
      },
      'Waiver': false,
    }
  })

  const updateCustomerData = (section, type, value) => {
    setCustomerData(prevState => {
      let data = Object.assign({}, prevState.data)
      data[section][type] = value
      return { data }
    })
  }

  return (
    <Customer.Provider
      value={{ customerData, updateCustomerData }}>
      { children }
    </Customer.Provider>
  )
}

export { Customer, CustomerProvider }
