import React, { useState, createContext, useContext, useEffect } from 'react'

const FormContext = createContext(null);

const FormProvider = ({children}) => {
    const [form, setForm] = useState(null);

    const setMenuForm = (menuId, item) => {
        setForm(prevValue => {
            const menuForm = {...prevValue[menuId], item};
            return menuForm;
         })
    }


    function loadFormsData() {
      fetch('data.json')
      .then((response ) => { 
        console.log('ressssssss', response);
        return response.json()
        })
        .then(data => {
          console.log(JSON.parse(data));
          setForm(JSON.parse(data));
        })
        .catch(error => {
          console.error('Error loading forms:', error);
        });
    }

  return (
    <FormContext.Provider
        value={{setMenuForm, loadFormsData}}
    >
        {children}
      </FormContext.Provider>
  )
}

const useForm = () => useContext(FormContext);
  
export { FormProvider, useForm };  
 