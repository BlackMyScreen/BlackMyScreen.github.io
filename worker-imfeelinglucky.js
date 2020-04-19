onmessage = function (event) {
  var imageData = event.data[2];
  var width = event.data[0];
  var height = event.data[1];
  for (var p = 0; p < imageData.data.length; p += 4) {
    var i = p / 4;
    var x = i % width;
    var y = (i / height) >>> 0;

    var t = performance.now();

    var r = 64 + (128 * x) / width + 64 * Math.sin(t / 1000);
    var g = 64 + (128 * y) / height + 64 * Math.cos(t / 1000);
    var b = 128;

    imageData.data[p + 0] = r;
    imageData.data[p + 1] = g;
    imageData.data[p + 2] = b;
    imageData.data[p + 3] = 255;
  }
  postMessage(imageData);
};
