import { useState, useEffect } from "react";

function useDebounce(changedValue, delayTime) {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(changedValue);

  useEffect(() => {
    // Set a timeout to update the debounced value after delayTime
    const timeoutId = setTimeout(() => {
      setDebouncedValue(changedValue);
    }, delayTime);

    // Clear the timeout if changedValue changes before delayTime
    return () => clearTimeout(timeoutId);
  }, [changedValue, delayTime]);

  return debouncedValue;
}

export default useDebounce;
