import { useState, useCallback } from "react";

interface UseFormParams {
  [key: string]: string;
}

const useForm = (initialState: UseFormParams): [UseFormParams, ({ target }: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setValues((state) => ({ ...state, [name]: value }));
  }, []);

  return [values, handleChange];
};

export default useForm;
