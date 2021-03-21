import { useState, useEffect } from 'react';

const useChangeState = (API,dataReg) => {
  const [register, setRegister ] = useState([]);
  useEffect(() => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataReg)
    };
    fetch(API, requestOptions)
        .then(data => setRegister(data.id));
  }, []);
  return register;
};

export default useChangeState;