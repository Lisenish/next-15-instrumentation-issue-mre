console.log("Running global side effect file.");

export const globalSingleton = {
  someSecret: process.env.SOME_GSM_SECRET,
};
