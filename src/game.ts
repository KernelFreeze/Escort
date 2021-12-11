import { gamerule, MCFunction, team, Variable } from "sandstone";
import * as teams from './teams';
import * as scoreboard from './scoreboard';

const gameMode = Variable(0);
const worldOffset = Variable(0);

MCFunction('_init', () => {
    gamerule('naturalRegeneration', false);
}, { runOnLoad: true });

MCFunction('start', () => {
    gameMode.set(1);
    scoreboard.updateEntries();
});

let pause = MCFunction('pause', () => {
    gameMode.set(0);
    scoreboard.updateEntries();
});

function resetAll() {
    pause();

    for (let player of teams.playerCount) {
        player.set(0);
    }

    for (let teamId of teams.id) {
        team.empty(teamId);
    }

    teams.playerTeam('@a').reset();
}

MCFunction('reset', resetAll, { runOnLoad: true });

export { gameMode, worldOffset, resetAll };