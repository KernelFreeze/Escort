import { execute, MCFunction, playsound, rel, tellraw, title, _ } from "sandstone";
import { Objective } from 'sandstone'
import * as game from "./game";
import * as book from "./book";

const deaths = Objective.create('deaths', 'deathCount', [{ text: 'Player Deaths' }])

MCFunction('_death_counter', () => {
    execute.as('@a').at('@p').run(() => {
        const playerDeaths = deaths('@s')
        _.if(playerDeaths.greaterThan(0), () => {
            announceDeath()

            playerDeaths.remove(1)
        })
    })
}, { runEachTick: true });

MCFunction('_death_test', announceDeath);

function announceDeath() {
    tellraw('@a', [{ "text": "¡Qué lástima!", "color": "light_purple" }, { "text": " La partida se ha perdido debido a la muerte de ", "color": "light_purple" }, { "selector": "@s", "color": "light_purple" }, { "text": ".", "color": "light_purple" }])
    playsound('minecraft:entity.zombie_horse.death', 'master', '@a', rel(0, 0, 0), 10000.0, 1.0)
    title('@a').times(20, 20 * 10, 20)
    title('@a').subtitle({ "text": "Mejor suerte la próxima" })
    title('@a').title({ "text": "¡Han muerto!", "color": "red" })

    game.resetAll()
    book.giveBooksToAll()
}
