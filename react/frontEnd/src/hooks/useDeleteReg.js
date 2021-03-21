import { useState, useEffect } from 'react';

const useDeleteState = (API,id) => {
  const [register, setRegister ] = useState([]);
  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(API.concat('/',id), requestOptions)
        .then(data => setRegister(data));
  }, []);
  return register;
};

export default useDeleteState;
