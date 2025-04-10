export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log(`Loading environment variables`);

    await loadSecrets();

    console.log(`Environment variables are loaded`);
    console.log(
      "process.env.SOME_GSM_SECRET in instrumentation:",
      process.env.SOME_GSM_SECRET
    );
  }
}

export async function loadSecrets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      process.env.SOME_GSM_SECRET = "mocked secret value";

      resolve(process.env.SOME_GSM_SECRET);
    }, 1000);
  });
}
