<script>
  export let href;
  export let filename;
</script>

<div class="download-button-container">
  <a class="button" {href} download={filename} data-goatcounter-click>
    <slot />
  </a>
</div>
