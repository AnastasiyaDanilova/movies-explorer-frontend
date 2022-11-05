import {useState} from 'react';

const useInput = (initialValue) => {

  const [value, setValue] = useState(initialValue)
  const [errorMessage, setErrorMessage] = useState('')

  function onChange(e) {
    setValue(e.target.value)
    setErrorMessage(e.target.validationMessage)
  }

  return {
    value,
    setValue,
    onChange,
    errorMessage
  }
}

export default useInput 