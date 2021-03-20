import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [list, setList] = useState({ listTable: [] });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  return list;
};

export default useInitialState;
