<script>
  import { onMount } from "svelte";
  import Button from "../Button.svelte";

  export let width;
  export let height;

  let canvas;
  let base64Url;
  let ctx;

  function paint() {
    if (!canvas) return;
    if (!ctx) {
      ctx = canvas.getContext("2d");
    }
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    base64Url = canvas.toDataURL("image/png;base64");
    console.log("paint");
  }

  onMount(paint);

  $: width && height && window.setTimeout(paint, 50);
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
