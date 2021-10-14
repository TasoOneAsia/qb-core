export const debugLog = (...args: any[]) => {
  if (V8_DEV_MODE) console.log(...args);
};

export const debugDir = (...args: any[]) => {
  if (V8_DEV_MODE) console.dir(...args);
};
