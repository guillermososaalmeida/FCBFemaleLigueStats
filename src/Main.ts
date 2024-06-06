import * as readline from "readline";
import { Player } from "./Player";
import { PlayerLoader } from "./PlayerLoader";
import { ListBuilder } from "./ListBuilder";

export class Main {
  private players: Player[] = [];
  private playerLoader: PlayerLoader;
  private listBuilder: ListBuilder;

  constructor() {
    this.playerLoader = new PlayerLoader();
    this.listBuilder = new ListBuilder();
  }

  start() {
    this.players = this.playerLoader.load();
    this.logMenu();
  }

  private logMenu() {
    let list: { [key: string]: number | string }[];

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `
    ¡Hola! Elige una opción:


      1. Goles
      2. Disparos
      3. Pases
      4. Asistencias
      5. Recuperaciones
      6. Tarjetas Amarillas
      7. Tarjetas Rojas
      8. Faltas
      9. Salir del programa
      
      Introduce el número: `,
      (answer) => {
        switch (answer) {
          case "1":
            list = this.listBuilder.listByGoals(this.players);
            console.log(`
LISTADO DE GOLES
              `);
            break;
          case "2":
            list = this.listBuilder.listByShots(this.players);
            console.log(`
LISTADO DE DISPAROS
              `);
            break;
          case "3":
            list = this.listBuilder.listByPasses(this.players);
            console.log(`
LISTADO DE PASES
              `);
            break;
          case "4":
            list = this.listBuilder.listByAssists(this.players);
            console.log(`
LISTADO DE ASISTENCIAS
              `);
            break;
          case "5":
            list = this.listBuilder.listByInterceptions(this.players);
            console.log(`
LISTADO DE RECUPERACIONES
              `);
            break;
          case "6":
            list = this.listBuilder.listByYellowCards(this.players);
            console.log(`
LISTADO DE TARJETAS AMARILLAS
              `);
            break;
          case "7":
            list = this.listBuilder.listByRedCards(this.players);
            console.log(`
LISTADO DE TARJETAS ROJAS
              `);
            break;
          case "8":
            list = this.listBuilder.listByFouls(this.players);
            console.log(`
LISTADO DE FALTAS
              `);
            break;

          case "9":
            console.log("Programa finalizado... ¡Hasta otra!");
            rl.close();
            return;
          default:
            console.log(`
              Respuesta inválida. ¡Elige un número del 1 al 9!
              `);
            rl.close();
            this.logMenu();
            return;
        }

        for (const [index, player] of list.entries()) {
          const keys = Object.keys(player);
          console.log(`${index + 1}. ${player.name}  -->  ${player[keys[1]]}`);
        }
        rl.question(
          `
Presiona Enter para volver al menú...`,
          () => {
            rl.close();
            this.logMenu();
          }
        );
      }
    );
  }
}
