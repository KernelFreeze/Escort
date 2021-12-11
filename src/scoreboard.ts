import { MCFunction, scoreboard } from "sandstone";

MCFunction('_update_scoreboard', () => {

}, { runEachTick: true });

function removeEntry(value: number) {

}

function createEntry(value: number) {
    scoreboard.players.add('§r'.repeat(value), '_scoreboard', value);
}

function createEntries(amount: number) {
    for (let i = 0; i < amount; i++) {
        createEntry(i);
    }
}

function updateEntries() {

}

MCFunction('_init_scoreboard', () => {
    scoreboard.objectives.remove('_scoreboard')
    scoreboard.objectives.add('_scoreboard', 'dummy', { "text": "     Escolta     ", "bold": true, "color": "gold" });
    scoreboard.objectives.setDisplay('sidebar', '_scoreboard');

    createEntries(10);
}, { runOnLoad: true });