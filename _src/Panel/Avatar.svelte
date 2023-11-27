<script>
  export let profile;

  const BL_CDN = "https://cdn.beatleader.xyz";
  const getOverlayUrlByName = (effectName, type = "") =>
    effectName?.length
      ? `${BL_CDN}/assets/${effectName}${type?.length ? `_${type}` : ""}.webp`
      : null;

  $: avatar = profile.avatar;
  $: profileSettings = profile.profileSettings;
  $: overlayUrl = profileSettings?.effectName?.length
    ? getOverlayUrlByName(profileSettings.effectName, "small")
    : null;
  $: hue = profileSettings?.hue ?? 0;
  $: saturation = profileSettings?.saturation ?? 1;
</script>

{#if avatar}
  <figure class="image is-64x64" on:click>
    <img src={avatar} alt="" />
    {#if overlayUrl}
      <img
        class="overlay"
        src={overlayUrl}
        style={`
			--hue: ${hue}deg;
			--saturation: ${saturation}
			`} />
    {/if}
  </figure>
{/if}

<style>
  figure {
    position: relative;
    overflow: visible !important;
  }

  img {
    border-radius: 50%;
    aspect-ratio: 1/1;
  }

  img.overlay {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    aspect-ratio: auto;
    max-width: none;
    mix-blend-mode: screen;
    filter: hue-rotate(var(--hue, 0deg)) saturate(var(--saturation, 1));
    overflow: visible !important;
  }
</style>
