import * as game from './game';
import * as teams from './teams';
import { MCFunction, team } from 'sandstone';

function resetAll() {
    game.gameStarted.set(0);

    for (let player of teams.playerCount) {
        player.set(0);
    }

    for (let teamId of teams.id) {
        team.empty(teamId);
    }

    teams.playerTeam('@a').reset();
}

MCFunction('reset', resetAll, { runOnLoad: true });

export { resetAll };