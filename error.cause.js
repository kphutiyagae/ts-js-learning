function shouldThrowError() {
  throw new Error();
}

try {
  sholdThrowError();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
