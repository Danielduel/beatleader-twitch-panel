<script>
  import { onMount } from "svelte";
  import Avatar from "./Avatar.svelte";
  import BeatLeaderSummary from "./BeatLeaderSummary.svelte";
  import ProfileHeaderInfo from "./ProfileHeaderInfo.svelte";

  let id = undefined;

  onMount(() => {
    window.Twitch.ext.onAuthorized(function () {
      const config = window.Twitch.ext.configuration.broadcaster.content;
      id = new URL(config).pathname.split("/")[2];
    });
  });

  async function getProfile() {
    return await fetch(`https://api.beatleader.xyz/player/${id}`).then((d) =>
      d.json()
    );
  }
</script>

<div class="header">
  <h1 class="header-title">My Beat Saber profile</h1>
  <a href="https://beatleader.xyz/" target="_blank">
    <img src="./logo.svg" alt="BL icon" />
  </a>
</div>

{#if id != undefined}
  {#await getProfile()}
    <svg
      class="animate-spin -ml-1 mr-3 h-10 w-10 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4" />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  {:then profile}
    {#if profile}
      <div class="avatar-and-roles">
        <div class="avatar-cell">
          <Avatar {profile} />
        </div>
      </div>

      <div class="rank-and-stats-cell">
        <ProfileHeaderInfo playerInfo={profile} />
        <BeatLeaderSummary
          {profile}
          profileAppearance={profile.profileSettings?.profileAppearance} />
      </div>
    {:else}
      Please link Twitch to your profile on the BeatLeader website.
    {/if}
  {/await}
{:else}
  Please specify BeatLeader ID in config.
{/if}

<style>
  .header {
    background-color: #1c364d;
    margin-bottom: 0.5em;
  }

  .header-title {
    font-weight: bold;
    margin: 0.2em;
    margin-left: 0.5em;
  }

  .player-general-info {
    display: flex;
    flex-wrap: nowrap;
    grid-gap: 1.5em;
    align-items: flex-start;
  }

  .avatar-cell {
    position: relative;
    width: 64px;
    min-width: 64px;
    height: 64px;
  }

  .rank-and-stats-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 0.4em;
    flex-grow: 1;
  }

  .role-icons {
    display: flex;
    position: relative;
    z-index: 5;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    width: 100%;
    min-height: 1.5rem;
  }

  .avatar-and-roles {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.6em;
  }

  :global(.inner-modal) {
    z-index: 10 !important;
    position: relative !important;
  }

  @media screen and (max-width: 767px) {
    .player-general-info {
      flex-direction: column;
      align-items: center;
      grid-gap: 0.4em;
    }

    .rank-and-stats-cell {
      align-items: center;
    }
  }
</style>
