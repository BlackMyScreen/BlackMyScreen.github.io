onmessage = function (e) {
  let imageData = e.data[2];
  for (let p = 0; p < imageData.data.length; p += 4) {
    const i = p / 4;
    const x = i % e.data[0];
    const y = (i / e.data[1]) >>> 0;

    const t = performance.now();

    const r = 64 + (128 * x) / e.data[0] + 64 * Math.sin(t / 1000);
    const g = 64 + (128 * y) / e.data[1] + 64 * Math.cos(t / 1000);
    const b = 128;

    imageData.data[p + 0] = r;
    imageData.data[p + 1] = g;
    imageData.data[p + 2] = b;
    imageData.data[p + 3] = 255;
  }
  postMessage(imageData);
};
