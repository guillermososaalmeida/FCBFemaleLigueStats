import jsonData from "./mockPlayers.json";

export type JsonPlayer = (typeof jsonData.player_stats)[0];

export class Player {
  position: string;
  shirtNumber: number;
  name: string;
  stats: Stat[];

  constructor(jsonPlayer: JsonPlayer) {
    this.position = jsonPlayer.position;
    this.shirtNumber = jsonPlayer.shirt_number;
    this.name = jsonPlayer.extra_info.name;
    this.stats = jsonPlayer.stats;
  }

  goals = () => this.getStat("goals");

  shots = () => this.getStat("shots_on_target_inc_goals");

  passes = () => this.getStat("total_passes");

  assists = () => this.getStat("goal_assists");

  interceptions = () => this.getStat("interceptions");

  yellowCards = () => this.getStat("yellow_cards");

  redCards = () => this.getStat("red_cards");

  fouls = () => this.getStat("total_fouls_conceded");

  private getStat(statName: string) {
    return this.stats.find(({ name }) => name === statName)?.stat ?? 0;
  }
}
