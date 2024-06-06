import * as readline from "readline";
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
    this.logMenu();
  }

  private logMenu() {
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
            console.log(`
LISTADO DE GOLES
              `);
            break;
          case "2":
            console.log(`
LISTADO DE DISPAROS
              `);
            break;
          case "3":
            console.log(`
LISTADO DE PASES
              `);
            break;
          case "4":
            console.log(`
LISTADO DE ASISTENCIAS
              `);
            break;
          case "5":
            console.log(`
LISTADO DE RECUPERACIONES
              `);
            break;
          case "6":
            console.log(`
LISTADO DE TARJETAS AMARILLAS
              `);
            break;
          case "7":
            console.log(`
LISTADO DE TARJETAS ROJAS
              `);
            break;
          case "8":
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
