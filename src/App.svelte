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

<style>
  .size-controls {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .size-control {
    font-size: 1.1rem;
    width: 4.2rem;
    border: 1px solid #ececec80;
    padding: 0.3rem;
    background-color: #222;
    color: #ececec;
    border-radius: 0.5rem;
  }
  .size-controls-operator {
    margin: 0 0.4rem;
  }
  .size-reset {
    margin-left: 0.4rem;
    padding: 0.53rem 1rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    font-family: sans-serif;
  }
</style>

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
