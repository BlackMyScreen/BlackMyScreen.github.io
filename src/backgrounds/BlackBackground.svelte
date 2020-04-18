<script>
  import { onMount } from "svelte";
  import Button from "../Button.svelte";

  export let width;
  export let height;

  let canvas;
  let base64Url;
  let frame;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    let frame;

    (function loop() {
      frame = requestAnimationFrame(loop);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      base64Url = canvas.toDataURL("image/png;base64");
    })();

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<figure>
  <canvas bind:this={canvas} {width} {height} />
  <figcaption>
    By
    <a href="https://twitter.com/canrau" data-goatcounter-click rel="noopener">
      @CanRau
    </a>
  </figcaption>
</figure>

{#if base64Url}
  <Button href={base64Url} filename="BlackMyScreen.png">Download</Button>
{/if}
