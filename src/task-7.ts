const getMessage = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS да");
    }, 1000);
  });
};

getMessage().then((result) => console.log(result)); // "Alice"
