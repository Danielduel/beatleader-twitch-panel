<script>
  import ScoresStats from "./ScoresStats.svelte";
  import processPlayerData from "./profile";

  export let profile = null;
  export let profileAppearance;

  let showHidden = false;

  function processStats(stats, profileAppearance, editEnabled) {
    const visible =
      stats?.length && editEnabled
        ? stats.map((s) => ({
            ...s,
            title: "Click to toggle",
            disabled: profileAppearance && !profileAppearance.includes(s.key),
          }))
        : (stats ?? []).filter(
            (s) => !profileAppearance || profileAppearance.includes(s?.key)
          );

    const hidden = (stats ?? []).filter(
      (s) => !visible.some((v) => v.key === s.key)
    );

    return {
      visible,
      hidden,
    };
  }

  $: ({ playerInfo, scoresStats, accBadges, ssBadges } =
    processPlayerData(profile));
  $: ({ visible: visibleScoresStats, hidden: hiddenScoresStats } = processStats(
    scoresStats,
    profileAppearance
  ));
  $: ({ visible: visibleAccStats, hidden: hiddenAccStats } = processStats(
    accBadges,
    profileAppearance
  ));
</script>

<div class="wrapper">
  <div class="beatleader-summary">
    {#if scoresStats}
      {#if scoresStats}
        <ScoresStats stats={showHidden ? scoresStats : visibleScoresStats} />
      {/if}
      <div>
        {#if accBadges}
          <ScoresStats stats={showHidden ? accBadges : visibleAccStats} />
        {/if}
      </div>
    {/if}
  </div>
  {#if hiddenScoresStats?.length || hiddenAccStats?.length}
    <span
      class="reveal clickable"
      class:opened={showHidden}
      on:click={() => (showHidden = !showHidden)}
      title={showHidden ? "Hide all stats" : "Show rest of the stats"}>
      <i class={showHidden ? "fas fa-eye-slash" : "far fa-eye"} />
    </span>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    align-items: flex-start;
  }

  .beatleader-summary {
    margin-top: 0.3em;
    flex-grow: 1;
  }

  .reveal {
    align-self: flex-start;
    cursor: pointer;
  }

  :global(.edit-enabled) * :global(.badge) {
    cursor: cell;
  }

  :global(.edit-enabled) * :global(.badge:not(.disabled)) {
    background: transparent !important;
    border-style: dotted;
    border-width: 0.15em;
  }

  :global(.edit-enabled) * :global(.badge.disabled) {
    filter: grayscale(1);
    opacity: 0.25;
    transition: all 200ms;
  }

  :global(.edit-enabled) * :global(.badge.disabled:hover) {
    filter: none;
    opacity: 0.5;
  }
</style>
