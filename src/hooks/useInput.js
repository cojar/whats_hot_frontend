import React, { useCallback, useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onHandler, setValue];
};

export default useInput;