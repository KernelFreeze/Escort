import { attribute, effect, MCFunction, Selector } from "sandstone";
import * as teams from "./teams";

function setMaxHealth(health: number) {
    attribute("@s", "minecraft:generic.max_health").baseSet(health);
    effect.give("@s", "minecraft:instant_health", 1, 10);
}

MCFunction('_effects', () => {
    // x1   1 corazón: Escoltado > Speed II
    effect.give(Selector('@a', { team: teams.id[0] }), "minecraft:speed", 15, 1, true);

    // x2   3 corazones: Médico  > Speed I
    effect.give(Selector('@a', { team: teams.id[1] }), "minecraft:speed", 15, 0, true);

    // x3   5 corazones: Escolta > Fuerza I y Caída Lenta
    effect.give(Selector('@a', { team: teams.id[2] }), "minecraft:strength", 15, 0, true);
    effect.give(Selector('@a', { team: teams.id[2] }), "minecraft:slow_falling", 15, 0, true);


    // x2  7 corazones: Tanque > Slowness I  y Resistencia I y 10 panes.
    effect.give(Selector('@a', { team: teams.id[3] }), "minecraft:slowness", 15, 0, true);
    effect.give(Selector('@a', { team: teams.id[3] }), "minecraft:resistance", 15, 0, true);
}, { runEachTick: true });

export { setMaxHealth };