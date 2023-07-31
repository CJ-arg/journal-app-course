import { useState } from "react";

export const useForm = (rootForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(rootForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(rootForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
