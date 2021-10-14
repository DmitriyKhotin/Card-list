import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

export const debounce = (callback: Function) => {
  let timer: TimeoutId;
  return (value: string) => {
    timer = setTimeout(() => {
      if (Number(value)) {
        callback(value);
      } else {
        clearTimeout(timer);
      }
    }, 500);
  };
};
