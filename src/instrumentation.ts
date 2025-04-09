export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // const { loadEnv } = await import("@kouzoh/node-dotenv");

    // await loadEnv({
    //   filepath: ".env.local",
    //   secrets: {
    //     set: true,
    //   },
    // });

    console.log(`Loading environment variables`);

    await loadSecrets();

    console.log(`Environment variables are loaded`);
  }
}

export async function loadSecrets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      process.env.SOME_GSM_SECRET = "mocked value";

      resolve(process.env.SOME_GSM_SECRET);
    }, 1000);
  });
}
