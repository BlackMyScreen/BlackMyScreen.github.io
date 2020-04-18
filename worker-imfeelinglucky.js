onmessage = function (e) {
  let imageData = e.data[2];
  const width = e.data[0];
  const height = e.data[1];
  for (let p = 0; p < imageData.data.length; p += 4) {
    const i = p / 4;
    const x = i % width;
    const y = (i / height) >>> 0;

    const t = performance.now();

    const r = 64 + (128 * x) / width + 64 * Math.sin(t / 1000);
    const g = 64 + (128 * y) / height + 64 * Math.cos(t / 1000);
    const b = 128;

    imageData.data[p + 0] = r;
    imageData.data[p + 1] = g;
    imageData.data[p + 2] = b;
    imageData.data[p + 3] = 255;
  }
  postMessage(imageData);
};
