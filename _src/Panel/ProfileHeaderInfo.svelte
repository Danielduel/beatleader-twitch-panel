<script>
  import Value from "./Value.svelte";
  import ClanBadges from "./ClanBadges.svelte";

  export let playerInfo;

  const PLAYERS_PER_PAGE = 50;
  const BL_CDN = "https://cdn.beatleader.xyz";

  function getCountryRankingUrl(countryObj) {
    const rank = countryObj?.rankValue ?? countryObj?.rank ?? null;
    if (!rank) return null;

    const country = countryObj?.country ?? null;
    if (!country) return null;

    return `https://www.beatleader.xyz/ranking/${
      Math.floor((rank - 1) / PLAYERS_PER_PAGE) + 1
    }?countries=${country.toLowerCase()}`;
  }

  function getPlayerCountries(playerInfo) {
    if (!playerInfo?.countries) return [];

    return playerInfo.countries.map((c) => ({
      ...c,
      prevRank: playerInfo?.lastWeekCountryRank,
    }));
  }

  function showRainbow(player) {
    var result = false;
    player.clans?.forEach((element) => {
      if (element.tag == "GAY") {
        result = true;
      }
    });

    return result;
  }

  $: name = playerInfo.name;
  $: rank = playerInfo
    ? playerInfo.rankValue
      ? playerInfo.rankValue
      : playerInfo.rank
    : null;
  $: countries = getPlayerCountries(playerInfo);
</script>

<div class="profile-header-info">
  {#if playerInfo}
    <div class="player-nickname {showRainbow(playerInfo) ? 'rainbow' : ''}">
      {#if name}
        <a
          href={`https://beatleader.xyz/u/${playerInfo.id}`}
          target="_blank"
          rel="noreferrer">
          {name}
        </a>

        <ClanBadges player={playerInfo} />
      {/if}
    </div>

    <div class="player-ranking">
      <a
        style="flex: none"
        href={`https://www.beatleader.xyz/ranking/${
          Math.floor((rank - 1) / PLAYERS_PER_PAGE) + 1
        }`}
        title="Go to global ranking"
        class="clickable">
        <i class="fas fa-globe-americas" />

        <Value
          value={playerInfo?.rank}
          prevValue={playerInfo?.lastWeekRank}
          prevLabel="Last week"
          prefix="#"
          digits={0}
          zero="#0"
          inline={true}
          reversePrevSign={true} />
      </a>
      {#each countries as country}
        <a
          style="flex: none"
          href={getCountryRankingUrl(country)}
          title="Go to country ranking"
          class="clickable">
          <img
            src={`${BL_CDN}/flags/${
              country && country.country && country.country.toLowerCase
                ? country.country.toLowerCase()
                : ""
            }.png`}
            class="countryIcon"
            alt={country?.country} />

          <Value
            value={country.rank}
            prevValue={country.lastWeekCountryRank}
            prevLabel="Last week"
            prefix="#"
            digits={0}
            zero="#0"
            inline={true}
            reversePrevSign={true} />

          {#if country.subRank && country.subRank !== country.rankValue}
            <small>(#{country.subRank})</small>
          {/if}
        </a>
      {/each}

      <span class="pp">
        <Value
          value={playerInfo?.pp}
          suffix="pp"
          prevValue={playerInfo?.lastWeekPp}
          prevLabel="Last week"
          inline={true}
          zero="0pp" />
      </span>
    </div>
  {/if}
</div>

<style>
  .profile-header-info {
    display: contents;
  }

  .player-nickname {
    display: flex;
    flex-wrap: nowrap;
    align-items: center !important;
    color: var(--alternate);
    font-size: 1.7em;
    font-weight: bold;
    align-items: baseline;
    z-index: 8;
  }

  .player-nickname.rainbow {
    color: #00ffbc;
    -webkit-background-clip: text;
    background-image: -webkit-linear-gradient(180deg, #f35626, #feab3a);
    -webkit-animation: rainbow 0.9s infinite linear;
    animation: rainbow 0.9s infinite linear;
  }

  .status {
    font-size: smaller;
  }

  .player-ranking {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 0.7em;
    font-size: 1.25em;
    font-weight: 500;
    align-items: center;
  }

  :global(.edit-enabled) .player-ranking {
    margin: 1rem 0;
  }

  .pp {
    color: var(--ppColour) !important;
  }

  .sponsor-message {
    padding-top: 1em;
    padding-bottom: 1em;
    display: grid;
  }

  .sponsor-input {
    font-size: inherit;
    padding: 0;
    color: var(--textColor);
    background-color: transparent;
    border: none;
    border-bottom: solid 1px var(--dimmed);
    outline: none;
  }

  .countryIcon {
    width: 1.2em;
  }

  .input-reset {
    font-size: inherit;
    padding: 0;
    color: var(--textColor);
    background-color: transparent;
    border: none;
    border-bottom: solid 1px var(--dimmed);
    outline: none;
    max-width: 80vw;
  }

  .input-reset::placeholder {
    color: var(--faded) !important;
  }

  .inlineLink {
    display: contents;
  }

  .pickerContainer {
    font-size: 1rem;
  }

  :global(.editNameButton) {
    margin-bottom: -1em !important;
    font-size: 0.75em !important;
  }

  :global(.banButton) {
    padding: 0 !important;
    font-size: 0.8em !important;
  }

  .beat-savior-reveal {
    align-self: end;
    cursor: pointer;
  }

  .beat-savior-reveal > i {
    transition: transform 500ms;
    transform-origin: 0.42em 0.5em;
  }

  .beat-savior-reveal.opened > i {
    transform: rotateZ(180deg);
  }

  .score-options-section {
    display: grid;
    justify-items: center;
    opacity: 0;
  }

  .score-options-section:hover {
    opacity: 1;
  }

  @media screen and (max-width: 767px) {
    .input-reset {
      flex: 1;
    }

    .player-ranking {
      justify-content: center;
    }

    .player-nickname {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
