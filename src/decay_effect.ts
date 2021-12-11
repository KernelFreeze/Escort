import { effect, execute, MCFunction, say, Selector, tp, _ } from "sandstone";
import * as game from "./game";
import * as teams from './teams';

MCFunction('_decay_effect', () => {
    execute.as('@a').at('@p').if(game.gameMode.equalTo(1)).run(() => {
        _.if(Selector('@e', { limit: 1, team: teams.id[0], distance: [64, Infinity] }), () => {
            effect.give('@s', 'minecraft:wither', 2, 2);
        });
    });
}, { runEachTick: true });