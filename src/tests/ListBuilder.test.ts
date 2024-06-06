import { ListBuilder } from "../ListBuilder";
import { PlayerLoader } from "../PlayerLoader";
import { Player } from "../Player";

describe("ListBuilder", () => {
  let playerLoader: PlayerLoader;
  let listBuilder: ListBuilder;
  let players: Player[];

  beforeEach(() => {
    playerLoader = new PlayerLoader();
    listBuilder = new ListBuilder();
    players = playerLoader.load();
  });

  it("SHOULD build list by goals", () => {
    const result = listBuilder.listByGoals(players);

    expect(result[0].name).toBe("Caroline Hansen");
  });

  it("SHOULD build list by shots", () => {
    const result = listBuilder.listByShots(players);

    expect(result[0].name).toBe("Clàudia Pina");
  });

  it("SHOULD build list by passes", () => {
    const result = listBuilder.listByPasses(players);

    expect(result[0].name).toBe("Patri Guijarro");
  });

  it("SHOULD build list by assists", () => {
    const result = listBuilder.listByAssists(players);

    expect(result[0].name).toBe("Caroline Hansen");
  });

  it("SHOULD build list by interceptions", () => {
    const result = listBuilder.listByInterceptions(players);

    expect(result[0].name).toBe("Lucy Bronze");
  });

  it("SHOULD build list by yellow cards", () => {
    const result = listBuilder.listByYellowCards(players);

    expect(result[0].name).toBe("Irene Paredes");
  });

  it("SHOULD build list by red cards", () => {
    const result = listBuilder.listByRedCards(players);

    expect(result[0].name).toBe("Sandra Paños");
  });

  it("SHOULD build list by fouls", () => {
    const result = listBuilder.listByFouls(players);

    expect(result[0].name).toBe("Marta Torrejón");
  });
});
