<script>
  export let href;
  export let filename;
</script>

<style>
  div {
    text-align: center;
  }

  div > a {
    display: inline-block;
    margin: 2rem auto 0;
    padding: 0.7rem 1.4rem;
    background-color: #000;
    color: #fff;
    border-radius: 0.5rem;
  }
</style>

<div>
  <a {href} download={filename}>
    <slot />
  </a>
</div>
