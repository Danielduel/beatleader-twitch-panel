<script>
  import { onMount } from "svelte";

  let profileLink;

  let saved = true;
  $: if (profileLink == undefined) saved = false;

  onMount(() => {
    Twitch.ext.onAuthorized(function () {
      profileLink = Twitch.ext.configuration.broadcaster.content;
    });
  });

  function set() {
    if (profileLink == undefined) return;

    window.Twitch.ext.configuration.set("broadcaster", "1", profileLink);
    saved = true;
  }
</script>

<div class="header">
  <h1 class="title">BeatLeader Profile Link:</h1>
</div>

<input
  placeholder="Input your link"
  bind:value={profileLink}
  on:input={() => (saved = false)} />
<button type="submit" on:click={set} disabled={saved == true}>
  {#if saved == true}
    Saved
  {:else}
    Save
  {/if}
</button>
<span>Example: https://beatleader.xyz/u/76561198059961776</span>

<style lang="postcss">
  .header {
    padding: 1em;
  }
  .title {
    font-weight: bold;
  }
  input {
    margin-left: 1em;
    @apply p-2 w-80 bg-gray-800 rounded-md;
  }
  span {
    margin-left: 1em;
  }

  button[type="submit"] {
    @apply ml-1 p-2 rounded-md font-medium;
    @apply bg-purple-500 disabled:bg-purple-400;
  }
</style>
