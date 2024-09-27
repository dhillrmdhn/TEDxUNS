import { useState } from "react";

const useZod = (schema) => {
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const validationResult = schema.safeParse(data);

    if (!validationResult.success) {
      setErrors(validationResult.error.format());
      return false;
    }

    setErrors({});
    return true;
  };

  return { errors, validate };
};

export default useZod;
