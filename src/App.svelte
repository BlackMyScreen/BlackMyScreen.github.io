<script>
  import { onMount } from "svelte";
  import BlackBackground from "./backgrounds/BlackBackground.svelte";
  import IFeelLucky from "./backgrounds/IFeelLucky.svelte";

  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;

  $: width = innerWidth * 2;
  $: height = innerHeight * 2;

  function reset() {
    width = window.innerWidth * 2;
    height = window.innerHeight * 2;
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<main>
  <h5>Your current devices display dimensions * 2</h5>
  <div class="size-controls">
    <input class="size-control" type="number" bind:value={width} />
    <span class="size-controls-operator">X</span>
    <input class="size-control" type="number" bind:value={height} />
    <button class="size-reset" type="button" on:click={reset}>Reset</button>
  </div>

  <section>
    <BlackBackground {width} {height} />
  </section>

  <section>
    <IFeelLucky {width} {height} />
  </section>
</main>
