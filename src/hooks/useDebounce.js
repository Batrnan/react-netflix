import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // value 가 바뀌면 다시 useEffect가 실행되면서 원래 있던 호출중인
  // useEffect 함수를 종료 해줘야 함.
  // 그래서 value 가 바뀌면, 전의 useEffect가 종료되면서 setTimeout도 강제로 종료.
  // 원래 0.5초를 기다리고 있다가, value 가 바뀌면 0.5초
  // 기다리는 setTimeout 함수 종료되고, 다시 0.5초 설정

  return debounceValue;
};
