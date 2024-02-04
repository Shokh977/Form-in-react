import { useState } from "react";

export function useInput(defaulValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaulValue);
  const [edited, setEdited] = useState(false);
  
  const valueIsValid = validationFn(enteredValue);

  const handleChangeInput = (event) => {
    setEnteredValue(event.target.value);
    setEdited(false);
  };

  const handleInputBlur = () => {
    setEdited(true);
  };
  return {
    value: enteredValue,
    handleChangeInput,
    handleInputBlur,
    hasError: edited && !valueIsValid,
  };
}
