import { MCFunction, Objective, team } from "sandstone";
import { Variable } from "sandstone";

// Configurable team variables
const maxPlayers = [
    1, 2, 3, 2
];

const maxHealth = [
    1 * 2, 3 * 2, 5 * 2, 7 * 2
];

const name = [
    "Escoltado",
    "Médico",
    "Escolta",
    "Tanque"
]

const playerCount = [
    Variable(0),
    Variable(0),
    Variable(0),
    Variable(0),
];
const id: string[] = []
const playerTeam = Objective.create('_player_team', 'dummy');

MCFunction('_create_teams', () => {
    for (let i = 0; i <= 3; i++) {
        const teamName = '_escort_t_' + i;
        team.add(teamName);
        id.push(teamName);
    }
}, { runOnLoad: true });

export { id, name, maxPlayers, playerCount, playerTeam, maxHealth };