import { useState, useEffect } from 'react';

const useInitialStateM = (API) => {
  const [message, setMessage] = useState({ rMessage: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setMessage(data.result));
  }, []);
  return message;
};


export default useInitialStateM;
