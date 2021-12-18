function readJson(res, cb, err) {
  let buffer;

  res.onData((ab, isLast) => {
    const chunk = Buffer.from(ab);

    if (isLast) {
      if (buffer) {
        cb(JSON.parse(Buffer.concat([buffer, chunk])));
      } else {
        cb(JSON.parse(chunk));
      }
      return buffer;
    }
    if (buffer) {
      buffer = Buffer.concat([buffer, chunk]);
    } else {
      buffer = Buffer.concat([chunk]);
    }
  });

  res.onAborted(err);
}

export default readJson;
