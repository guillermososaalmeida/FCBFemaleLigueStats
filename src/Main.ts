import { Player } from "./Player";
import { PlayerLoader } from "./PlayerLoader";

export class Main {
  private players: Player[] = [];
  private playerLoader: PlayerLoader;

  constructor() {
    this.playerLoader = new PlayerLoader();
  }

  start() {
    this.players = this.playerLoader.load();
  }
}
