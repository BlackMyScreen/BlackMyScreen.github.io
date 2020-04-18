<script>
  import { onMount } from "svelte";
  import BlackBackground from "./backgrounds/BlackBackground.svelte";
  import ImFeelingLucky from "./backgrounds/ImFeelingLucky.svelte";

  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;

  $: width = innerWidth;
  $: height = innerHeight;

  function reset() {
    width = window.innerWidth;
    height = window.innerHeight;
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<main>
  <h5>Your current devices display dimensions</h5>
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
    <ImFeelingLucky {width} {height} />
  </section>
</main>
