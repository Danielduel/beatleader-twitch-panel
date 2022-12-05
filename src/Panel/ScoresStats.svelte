<script>
  import Badge from "./Badge.svelte";
  import { createEventDispatcher } from "svelte";

  export let stats;

  const dispatch = createEventDispatcher();
</script>

{#if stats}
  <div class="badges has-text-centered-mobile">
    {#each stats as stat}
      {#key stat.label}
        <Badge {...stat} on:click={() => dispatch("click", stat)} />
      {/key}
    {/each}
  </div>
{/if}

<style>
  .badges.skeleton .badge {
    display: inline-block;
    width: 12em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }

  .badges :global(.badge .value .prev.inc),
  .badges :global(.badge .value .prev.dec) {
    color: inherit !important;
  }
</style>
