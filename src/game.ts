import { gamerule, MCFunction, Variable } from "sandstone";
import * as game from "./game";

const gameStarted = Variable(0);
const worldOffset = Variable(0);

MCFunction('_init', () => {
    gamerule('naturalRegeneration', false);
}, { runOnLoad: true });

MCFunction('start', () => {
    game.gameStarted.set(1);
});

MCFunction('pause', () => {
    game.gameStarted.set(0);
});

export { gameStarted, worldOffset };