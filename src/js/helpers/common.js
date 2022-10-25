export function isProd() {
  return process.env.NODE_ENV === "production";
}

export function main() {
  if (!isProd()) {
    console.log("Dev mode enabled.");
  }
}
