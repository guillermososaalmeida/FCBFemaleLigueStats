import jsonData from "./mockPlayers.json";
import { Player } from "./Player";

export class PlayerLoader {
  load() {
    const players: Player[] = [];

    for (const jsonPlayer of jsonData.player_stats) {
      const player = new Player(jsonPlayer);
      players.push(player);
    }
    return players;
  }
}
