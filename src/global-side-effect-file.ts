console.log("Running global side effect file.");

console.log(
  "process.env.SOME_GSM_SECRET outside:",
  process.env.SOME_GSM_SECRET
);

export const globalSingleton = {
  someSecret: process.env.SOME_GSM_SECRET,
};

export function getSecretValueDynamically() {
  console.log("Running in function to get secret value dynamically.");
  console.log(
    "process.env.SOME_GSM_SECRET inside function:",
    process.env.SOME_GSM_SECRET
  );

  return process.env.SOME_GSM_SECRET;
}
