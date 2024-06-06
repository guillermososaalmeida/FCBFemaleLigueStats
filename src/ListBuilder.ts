import { Player } from "./Player";

export class ListBuilder {
  listByGoals(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      goals: player.goals(),
    }));
    list.sort((playerA, playerB) => playerB.goals - playerA.goals);
    return list;
  }

  listByShots(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      shots: player.shots(),
    }));
    list.sort((playerA, playerB) => playerB.shots - playerA.shots);
    return list;
  }

  listByPasses(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      passes: player.passes(),
    }));
    list.sort((playerA, playerB) => playerB.passes - playerA.passes);
    return list;
  }

  listByAssists(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      assists: player.assists(),
    }));
    list.sort((playerA, playerB) => playerB.assists - playerA.assists);
    return list;
  }

  listByInterceptions(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      interceptions: player.interceptions(),
    }));
    list.sort(
      (playerA, playerB) => playerB.interceptions - playerA.interceptions
    );
    return list;
  }

  listByYellowCards(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      yellowCards: player.yellowCards(),
    }));
    list.sort((playerA, playerB) => playerB.yellowCards - playerA.yellowCards);
    return list;
  }

  listByRedCards(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      redCards: player.redCards(),
    }));
    list.sort((playerA, playerB) => playerB.redCards - playerA.redCards);
    return list;
  }

  listByFouls(players: Player[]) {
    const list = players.map((player) => ({
      name: player.name,
      fouls: player.fouls(),
    }));
    list.sort((playerA, playerB) => playerB.fouls - playerA.fouls);
    return list;
  }
}
