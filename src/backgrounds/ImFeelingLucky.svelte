<script>
  import { onMount } from "svelte";
  import Button from "../Button.svelte";

  export let width;
  export let height;

  let canvas;
  let base64Url;
  let canvasWorker;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    if (window.Worker) {
      canvasWorker = new Worker("/worker-imfeelinglucky.js");
    }

    (function loop() {
      let frame;
      frame = requestAnimationFrame(loop);

      const imageData = ctx.getImageData(0, 0, width, height);

      if (window.Worker && canvasWorker) {
        // FIXME: width & height not updating as expected?
        canvasWorker.postMessage([width, height, imageData]);
        canvasWorker.onmessage = e => {
          ctx.putImageData(e.data, 0, 0);
          base64Url = canvas.toDataURL("image/png;base64");
        };
      } else {
        for (let p = 0; p < imageData.data.length; p += 4) {
          const i = p / 4;
          const x = i % width;
          const y = (i / height) >>> 0;

          const t = window.performance.now();

          const r = 64 + (128 * x) / width + 64 * Math.sin(t / 1000);
          const g = 64 + (128 * y) / height + 64 * Math.cos(t / 1000);
          const b = 128;

          imageData.data[p + 0] = r;
          imageData.data[p + 1] = g;
          imageData.data[p + 2] = b;
          imageData.data[p + 3] = 255;
        }

        ctx.putImageData(imageData, 0, 0);
        base64Url = canvas.toDataURL("image/png;base64");
      }
    })();

    return () => {
      cancelAnimationFrame(frame);
      if (canvasWorker) canvasWorker.terminate();
    };
  });
</script>

<main>
  <h2>I'm Feeling Lucky</h2>

  <p>
    I know this is definitely not black 😂 yet while developing this site I came
    across this neat effect and couldn't resist including it.
  </p>
  <p>
    <strong>Note:</strong>
    You will download the picture at the moment of your click on the download
    button, meaning it's a static image and the downloaded .png file won't be
    animated.
  </p>

  <figure>
    <canvas bind:this={canvas} {width} {height} />
    <figcaption>
      By
      <a
        href="https://twitter.com/canrau"
        data-goatcounter-click
        rel="noopener">
        @CanRau
      </a>
    </figcaption>
  </figure>

  {#if base64Url}
    <Button href={base64Url} filename="ImFeelingLucky.png">Download</Button>
  {/if}
</main>
